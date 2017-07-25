
  var questionsAsked;
  var correctAnswers =0;
  var wrongAnswers= 0;
  var index = 0;
  var timer = 30;

  function timingFnc(){
    questions.display();
    $('#answerSection').show();
    timer = 30;
  }

  function resetGame(){
    questions.currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    timer = 30;
    questions.startGame();
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
        alert("Correct: " + correctAnswers + " Wrong: " + wrongAnswers);
        resetGame();
      } else {
        $('#questionHolder').empty();
        $('#questionHolder').text(this.questionSet[this.currentQuestionIndex].actualQuestion);

        for (var i = 0; i < this.questionSet[this.currentQuestionIndex].ansChoices.length; i++){
          $('#answer' + i).text(this.questionSet[this.currentQuestionIndex].ansChoices[i]);
        }
      }
      var IntervalID = setInterval(function(){
        timer--;
        $('#timeBox').text(timer);
        if ( timer == 0){
          questions.currentQuestionIndex++;
          ++wrongAnswers;
          alert("Time's up! You forfeit this question");
          questions.display();
          timer = 30;
        }
      }, 1000);
    },

    startGame: function() {
      $('#questionHolder').empty();
      $('#questionHolder').text("Welcome to the Trivia Quiz!");
      var correctAnswers = 0;
      var wrongAnswers = 0;
      timer = 30;
      $('#answer0').empty();
      $('#answer1').empty();
      $('#answer2').empty();
      $('#answer3').empty();
      $('#answer0').text("Play Game!");
    },

    usrInput: function(a) {
        if ( $(a).text() === this.questionSet[this.currentQuestionIndex].correctChoice && $(a).text() != "Play Game!"){
          this.currentQuestionIndex++;
          $('#questionHolder').text("CORRECT");
          $('#answerSection').hide();
          ++correctAnswers;
          var time = setTimeout( timingFnc, 2500);
        } else if ($(a).text() == "Play Game!" || $(a).text() == ""){
            questions.display();
        } else {
            this.currentQuestionIndex++;
            console.log(this.currentQuestionIndex);
            $('#answerSection').hide();
            $('#questionHolder').text("WRONG");
            ++wrongAnswers;
            var time1 = setTimeout( timingFnc, 2500)
        }
    }
}

questions.startGame();
