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




//POST
function saveToDo( newToDo ) {
    console.log('In saveToDo', newToDo);
    


}




//DELETE





