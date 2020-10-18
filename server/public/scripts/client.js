console.log('hello form js');

$( document ).ready( function(){
    console.log( 'JQ' );
    // Establish Click Listeners
    setupClickListeners();

    getToDos();
});

function setupClickListeners() {
    $( '#addButton' ).on( 'click', function() { //click listener for the add task button
        console.log( 'in addButton on click' )
        //get user inputs and put into an object

    })
}//end of setupClickListeners


//GET
function getToDos() {
    let el = $('#viewToDos');
    el.empty();
    console.log('in getToDos');
    //ajax call to server to get todos
    $.ajax( {
        method: 'GET',
        url: '/tasksToDo'
    }).then( function ( response ) {
        console.log('back from server with', response );
        for (let i = 0; i < response.length; i++) {
            if (response[i].taskComplete == "y" || response[i].taskComplete == "Y") {
                el.append(`
                    <tr>
                        <td>${response[i].person}</td>
                        <td>${response[i].taskName}</td>
                        <td>${response[i].taskNotes}</td>
                        <td>${response[i].taskComplete}</td>
                    </tr>
                `)
            } else {
                el.append (`
                    <tr data-id=${response[i]}>
                    <td>${response[i].person}</td>
                        <td>${response[i].taskName}</td>
                        <td>${response[i].taskNotes}</td>
                        <td>${response[i].taskComplete}</td>
                        <td><button class="ready">Ready</button></td>
                    </tr>
                `)
            }
            }
    }).catch(function(error) {
        console.log('error', error);
    });
}//end getToDos




//POST
function saveToDo( newToDo ) {
    console.log( 'In saveToDo', newToDo );
    //ajax call to server to get ToDos
    $.ajax({
        type: 'POST',
        url: '/tasksToDo',
        data: newToDo,
    }).then ( function ( response ) {
        $('#person').val(''),
        $('#taskName').val(''),
        $('#taskNotes').val(''),
        $('#taskComplete').val(''),
        getToDos();
    });
}//end saveToDo




//PUT



//DELETE





