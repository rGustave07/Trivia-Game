
  var questionsAsked;
  var correctAnswers;
  var wrongAnswers;
  var index = 0;

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
      $('#questionHolder').empty();
      $('#questionHolder').text(this.questionSet[this.currentQuestionIndex].actualQuestion);

      for (var i = 0; i < this.questionSet[this.currentQuestionIndex].ansChoices.length; i++){
        $('#answer' + i).text(this.questionSet[this.currentQuestionIndex].ansChoices[i]);
      }
    },

    startGame: function() {
      this.display();
    },

    usrInput: function(a) {
      console.log($(a).text());
      if ( $(a).text() === this.questionSet[this.currentQuestionIndex].correctChoice ){
        console.log("right!");
        //Build the nextQuestion(True/false) function and increment this.currentQuestionIndex++
      this.currentQuestionIndex++;
      if ( this.currentQuestionIndex == 2 ){
        resetGame();
      }
    }
  }

questions.startGame();
