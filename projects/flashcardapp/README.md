#Create your own Flashcards


* Create an object with an Array of objects
* Give the objects inside the array question and answer properties
* Give those properties values. Those values should be things you've learned today (shortcuts, syntax, git etc.)
* 

# What You Have Done!

* Setup document
* Initialized the application; cardManager.init();
* Added event handler to allow showing the next card; Line 28 $("#next-card").click(function() { ...
* Add event handler for Previous card
* Show the answers
* Flip the card
* Handle cycling back to the beginning. Currently clicking Next 3 times throws an error.
* Randomize the Next method so it shows a random card instead of just the next one in the sequence (super stretch).

# Homework

In the session on Objects, Arrays, and Hashes we discussed different methods of creating objects. You can see the two methods on slides 1 and 4 in the presentation that is shared in Slack#class-flow.

Tonight you should update the flash card app so that the cardManager is created using a constructor function.

In flashcard_app.js change the line:

    var cardManager = {
    
to 

    var CardManager = function() {
    
That will cause some errors in your program. Most importantly the last line

    cardManager.init(); 
    
will no longer work. Update the flash card app to fix all the errors.
