
  var questionsAsked;
  var correctAnswers;
  var wrongAnswers;
  var index = 0;
  var timer = 0;

  function rndNumGen(min, max) {
    return Math.random() * (max - min) + min;
  };

  function resetGame(){
    questions.currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    $('#questionHolder').empty();
    $('#questionHolder').text("Welcome to the Trivia Quiz!");
    $('#answer0').empty();
    $('#answer1').empty();
    $('#answer2').empty();
    $('#answer3').empty();
    $('#answer0').text("Play Game!");
    $('#answer0').on('click', function() {
      console.log("successfully entered play game phase");
      questions.startGame();
    })
  };

  var questions = {
    questionSet: [
      {
        actualQuestion : "Why is Ritter Gustave just so damn fantastic?",
        ansChoices : ["he just is?", "He was born that way", "Suisse", "FBGM"],
        correctChoice : "He was born that way",
      },
      {
        actualQuestion : "Where was Ritter Gustave born?",
        ansChoices : ["Uruguay", "California", "Switzerland", "Maldives"],
        correctChoice : "Switzerland",
      },
      {
        actualQuestion : "What is Ritter's Fathers name?",
        ansChoices : ["Steve", "McChillin", "Bob", "Gerald"],
        correctChoice : "Gerald",
      }
    ],

    currentQuestionIndex : 0,

    display: function() {
      if ( this.currentQuestionIndex == this.questionSet.length){
        resetGame();
      } else {
        $('#questionHolder').empty();
        $('#questionHolder').text(this.questionSet[this.currentQuestionIndex].actualQuestion);

        for (var i = 0; i < this.questionSet[this.currentQuestionIndex].ansChoices.length; i++){
          $('#answer' + i).text(this.questionSet[this.currentQuestionIndex].ansChoices[i]);
        }
        // Set timer in here
        
      }
    },

    startGame: function() {
      this.display();
    },

    usrInput: function(a) {
      console.log($(a).text());
        if ( $(a).text() === this.questionSet[this.currentQuestionIndex].correctChoice ){
          this.currentQuestionIndex++;
          this.display();
        } else {
          this.display();
        }
        window.clearTimeout(time);
        time = window.setTimeout(30000);
    }
}
var time;
resetGame();
