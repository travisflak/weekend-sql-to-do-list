console.log('hello form js');

$( document ).ready( function(){
    console.log( 'JQ' );
    // Establish Click Listeners
    setupClickListeners();
});

function setupClickListeners() {
    $( '#addButton' ).on( 'click', function() {
        console.log( 'in addButton on click' )
    })
}//end of setupClickListeners