console.log('hello form js');

$( document ).ready( function(){
    console.log( 'JQ' );
    // Establish Click Listeners
    setupClickListeners();
});

function setupClickListeners() {
    $( '#addButton' ).on( 'click', function() { //click listener for the add task button
        console.log( 'in addButton on click' )
        //get user inputs and put into an object

    })
}//end of setupClickListeners


//GET
function getToDos




//POST
function saveToDo( newToDo ) {
    console.log( 'In saveToDo', newToDo );
    //ajax call to server to get ToDos
    $.ajax({
        type: 'POST',
        url: '/router',
        data: newToDo,
    }).then (function(response) {
        $('#person').val(''),
        $('#taskName').val(''),
        $('#taskNotes').val(''),
        $('#taskComplete').val(''),
        getToDos();
    });
}//end saveToDo




//DELETE





