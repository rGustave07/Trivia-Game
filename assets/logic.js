$(document).ready(function(){

  var questionsAsked;
  var correctAnswers;
  var wrongAnswers;

  function rndNumGen(min, max) {
    return Math.random() * (max - min) + min;
  };

  function resetGame(){
    questionsAsked = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    $('#questionHolder').empty();
    $('#questionHolder').text("Welcome to the Trivia Quiz!");
    $('#answer1').empty();
    $('#answer1').text("Play Game!");
    $('#answer1').on('click', function() {
      console.log("successfully entered play game phase");
      // Enter function in here that starts the game
    })
  };

  var question1 = {
    question : "Why must everything be so complicated?",
    ans1 : "That's the way it is",
    ans2 : "Things will never be the same",
    ans3 : "That's just the way it is",
    ans4 : "awww yeah",

    display: function() {
      $('#questionHolder').empty();
      $('#questionHolder').text(question1.question);
    }
  };
























});
