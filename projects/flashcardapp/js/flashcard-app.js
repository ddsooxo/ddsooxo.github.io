// The following is a JavaScript Object Notation(JSON) file.
// JSON is a syntax for storing and exchanging data
// The syntax is a JS Object with arrays and objects.

var flashcards =[
  {
    "question": "How do can you access array elements?",
    "answer": "You can get elements out of arrays if you know their index. Array elements' indexes start at 0 and increment by 1, so the first element's index is 0, the second element's index is 1, the third element's is 2, etc."
  },
  {
    "question": "How do you create Array literals?",
    "answer": "You can create arrays in two different ways. The most common of which is to list values in a pair of square brackets. JavaScript arrays can contain any types of values and they can be of mixed types."

  },
  {
    "question": "What is a Multi-dimensional Arrays?",
    "answer": "A two-dimensional array is an array within an array. If you fill this array with another array you get a three-dimensional array and so on. Example: var multidimensionalArray = [[1,2,3],[4,5,6],[7,8,9]] // two dimensions, 3x3"

  },
  {
    "question": "What are the syntax of the Boolean Literals?",
    "answer": "True and False"

  },
  {
    "question": "If ( true && false ), Is this expression True or False?",
    "answer": "False because the second expression is false. d) !!true // remains true"

  },
  {
    "question": "If( false || true ), Is this expression True or False?",
    "answer": "True because any one of the expression is true"

  },
  {
    "question": " If( !false ),Is this expression True or False? ",
    "answer": "True because !false evaluates to true"

  },
  {
    "question": "if(!!True), Is this expression True or False? ",
    "answer": "True"

  },
  {
    "question": "What's the output of this boolean expression: 'if(!false && ( false || (false && true) ))' ",
    "answer": "False because-----> !false && ( false || (false && true) ) >>>!false && ( false || false) - becomes >>>true && false , which is false"

  },
  {
    "question": "What does Math.round(4.640485) give you?",
    "answer": "5"

  },
  {
    "question": "What does Math.ceil(3.2123409328492) give you?",
    "answer": "4"

  },
  {
    "question": "What does Math.ceil(8.00092) give you?",
    "answer": "9"

  },
  {
    "question": "What does Math.random() do?",
    "answer": "returns a random number between 0 and 1."

  },
  {
    "question": "What does Math.pow(2,3) execute?",
    "answer": "8."

  },
  {
    "question": "What does Math.random() do?",
    "answer": "returns a random number between 0 and 1."

  },
  {
    "question": "What's the output of 5 % 4 == ?",
    "answer": "1 because that's the remainder of 5/4"

  },
  {
    "question": "What's prefix increment/decrement?",
    "answer": "Operators that first << increase the value of the variable by 1 (increment) or decrease the value of an expression / variable by 1 (decrement) >> and then return this incremented / decremented value."

  },
  {
    "question": "What's postfix increment/decrement?",
    "answer": "Operators are operators that first return the << value of the variable >> and then increase the value of that variable by 1 (increment) or decrease the value of the variable by 1 (decrement) ."

  },
  {
    "question": "What's the main functionality of having classes in OOP?",
    "answer": "You can use classes as a template to create many objects with similar qualities. Classes are a fundamental component of object-oriented programming (OOP) "

  }
];


var cardManager = function() {
  currentCard = 0;
    this.init = function(){
      showQuestion(currentCard);
      showAnswer(currentCard);

      $("#next-card").click(function(){
        nextCard();
        showQuestion(currentCard);
        showAnswer(currentCard);
        $('#flashcard-answer').hide();

      });

      $("#previous-card").click(function(){
        previousCard();
        showQuestion(currentCard);
        showAnswer(currentCard);
        $('#flashcard-answer').hide();
      });

      $("#shuffle-card").click(function(){
        shuffleCard();
        showQuestion(currentCard);
        showAnswer(currentCard);
      });

      $("#flip-card").click(function(){
        flipCard(); 
      });
  };

  showQuestion = function(index){
    var card = flashcards[index];
    $("#flashcard-question").html("Question: " + card.question);
  },

  showAnswer = function(index){
    var card = flashcards[index];
    $("#flashcard-answer").html("Answer: " + card.answer);
  },

  nextCard = function(){
    if(this.currentCard < flashcards.length - 1){
      this.currentCard++;
    }
    else{
      this.currentCard = 0;
    }
  },

  previousCard = function(){
    if(this.currentCard >= 0){
      this.currentCard--;
    }
    else{
      this.currentCard = flashcards.length - 1;
      console.log("Failed to go to previous Card");
    }
  },

  shuffleCard = function(){
    
  },

  flipCard = function(){
    $("#flashcard-answer").toggle();
  }

  
} 

cardManager = new cardManager();
cardManager.init();


