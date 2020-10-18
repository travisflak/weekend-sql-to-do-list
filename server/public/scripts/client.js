console.log('hello form js');

$( document ).ready( function(){
    console.log( 'JQ' );
    // Establish Click Listeners
    // setupClickListeners();
    $( '#addButton' ).on( 'click', saveToDo );
    getToDos();
        // $('#viewToDos').on('click', '.ready', markReady);
        $('#viewToDos').on('click', '.delete', deleteToDo);
        $('#viewToDos').on('click', '.complete', completeToDo);
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
                    <tr data-id=${response[i].id}>
                        <td>${response[i].person}</td>
                        <td>${response[i].taskName}</td>
                        <td>${response[i].taskNotes}</td>
                        <td>${response[i].taskComplete}</td>
                        <td><button class="delete">DELETE</button></td>
                        <td><button class="complete">Complete</button></td>
                    </tr>
                `)
            } else {
                el.append (`
                    <tr data-id=${response[i].id}>
                        <td>${response[i].person}</td>
                        <td>${response[i].taskName}</td>
                        <td>${response[i].taskNotes}</td>
                        <td>${response[i].taskComplete}</td>
                        <td><button class="ready">Ready</button></td>
                        <td><button class="delete">DELETE</button></td>
                        <td><button class="complete">Complete</button></td>
                    </tr>
                `)
            }
            }
    }).catch(function(error) {
        console.log('error', error);
    });
}//end getToDos

//PUT
function completeToDo(){
    let todoId=$(this).closest('tr').data('id');
    console.log('clicked', todoId);
    $.ajax({
        method: 'PUT',
        url: `/tasksToDo/${todoId}`,
        data: {
            transfer: todoId
        }
    }).then(function (response){
        console.log('back from server PUT request', response);
        getToDos()
    }).catch(function(error){
        console.log('error', error);  
    })
}//end completeToDo


//POST
function saveToDo() {
    let newToDo = {
        person: $('#person').val(),
        taskName: $('#taskName').val(),
        taskNotes: $('#taskNotes').val(),
        taskComplete: $('#taskComplete').val(),
    };
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


//DELETE
function deleteToDo () {
    console.log('in DELETE function');
    let todoId=$(this).closest('tr').data('id');
    console.log('clicked', todoId);
    $.ajax({
        method: 'DELETE',
        url: `/tasksToDo/${todoId}`,
        data: {
            transfer: todoId
        }
    }).then(function (response){
        console.log('back from server DELETE request', response);
        getToDos()
    }).catch(function(error){
        console.log('error', error);  
    });
}




