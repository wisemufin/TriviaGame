// Object holding all of the quiz questions and answers
var quizQuestions = [
  {
    question: "What year was Doom released?",
    answers: {
      a: '1993',
      b: '1995',
      c: '1997',
      d: '1990'
    },
    correctAnswer: 'a'
  },
  {
    question: "What year did Sonic the Hedgehog get released?",
    answers: {
      a: '1995',
      b: '1994',
      c: '1991',
      d: '1999'
    },
    correctAnswer: 'c'
  },
  {
    question: "What year did GoldenEye 007 get released?",
    answers: {
      a: '1995',
      b: '1994',
      c: '1997',
      d: '1999'
    },
    correctAnswer: 'c'
  },
  {
    question: "What year did Diddy Kong Racing get released?",
    answers: {
      a: '1995',
      b: '1994',
      c: '1997',
      d: '1999'
    },
    correctAnswer: 'c'
  },
  {
    question: "What year did Super Mario 64 get released?",
    answers: {
      a: '1995',
      b: '1996',
      c: '1997',
      d: '1999'
    },
    correctAnswer: 'b'
  }
];



// Keeps track of right answers
var scoreCorrect = 0;
// Keeps track of wrong answers
var scoreWrong = 0;
// Keeps track of questions where the time ran out
var unanswered = 0;
// Stores what quesiton the game is currently on
var questionIndex = 0;
// Timing variable
var time = 30;
// Holds the interval
var interval;

// Function that displays the final screen of the game
function endgame() {
  // Hides the timer
  $("#time-hide").css({'visibility' : 'hidden'});
  // Changes the screen to say game over
  $("#questions").text("Game Over!");
  $(".answer").css({
    'visibility' : 'visible'
  });
  // These remove the answer class so that these sections no longer have hover effects
  $("#answer1").text("Correct: " + scoreCorrect).removeClass("answer");
  $("#answer2").text("Wrong: " + scoreWrong).removeClass("answer");
  $("#answer3").text("Unanswered: " + unanswered).removeClass("answer");
  // Hides answer 4
  // This was necessar because the restart button needed to be its own thing
  $("#answer4").css({'visibility' : 'hidden'});
  // Resets all of the game conditions to 0 and starts on the first question
  $("#restart").css({'display' : 'block'}).on("click", function() {
    scoreWrong = 0;
    scoreCorrect = 0;
    unanswered = 0;
    questionIndex = 0;
    // resetAnswerCSS brings the hover effects back to the answers
    resetAnswerCSS();
    loadQuestions();
  });
}

// This is necessary for the screen between the questions to hide the timer and answers
function hideAnswersAndTime() {
  $("#time-hide").css({
    'visibility' : 'hidden'
  });
  $(".answer").css({
    'visibility' : 'hidden'
  });
}

// The function to bring back the hover effects of the answers
function resetAnswerCSS() {
  $('#answer1').addClass("answer");
  $('#answer2').addClass("answer");
  $('#answer3').addClass("answer");
  $("answer4").css({'display' : 'block'});
}

// Loads up all of the questions for the game
function loadQuestions() {
  if (questionIndex < quizQuestions.length) {
    // Sets the time to 30 for the countdown in the next round of questions
    time = 30;
    // Starts the timer with the new 30 seconds
    timerStart();
    $("#restart").css({'display' : 'none'});
    $("#time-hide").css({
      'visibility' : 'visible'
    });
    $("#timer").text(time);
    $("#questions").text(quizQuestions[questionIndex].question);
    $(".answer").css({
      'visibility' : 'visible'
    });
    $("#answer1").text(quizQuestions[questionIndex].answers.a);
    $("#answer2").text(quizQuestions[questionIndex].answers.b);
    $("#answer3").text(quizQuestions[questionIndex].answers.c);
    $("#answer4").text(quizQuestions[questionIndex].answers.d);
  } else {
    // Runs the endgame function and shows the final screen with score and restart button
    endgame();
  }
}

// Function that starts the game
$("#start").on("click", function() {
  $("#start").css({
    'display': 'none'
  });
  $(".hidden").css({
    'visibility': 'visible'
  });

  loadQuestions();
  timerStart();
});

// Timer start function
function timerStart() {
  clearInterval(interval);
  interval = setInterval(decrement, 1000);
}

// Timer countdown function
function decrement() {
  time--;
  $("#timer").text(time);

  if (time === 0) {
    stop();
    unanswered++;
  }
}

// Function to stop the timer
function stop() {
  clearInterval(interval);
  // Moves game to the next question
  questionIndex++;
  hideAnswersAndTime();
  $("#questions").text("Time is up!");
  // Shows next set of questions after 5 seconds
  setTimeout(loadQuestions, 1000 * 5);
}

function resetTimer() {
  clearInterval(interval);
  setTimeout(loadQuestions, 1000 * 5);
}

// On click function for each quiz question
$(".answer").on("click",function() {
  if ($(this).attr("value") === quizQuestions[questionIndex].correctAnswer) {
    // console.log($(this).attr("value"));
    resetTimer();
    hideAnswersAndTime();
    $("#questions").text("Correct!");
    // Move to next question
    questionIndex++;
    scoreCorrect++;
    setTimeout(loadQuestions, 1000 * 5);
    console.log(questionIndex);
} else {
  resetTimer();
  hideAnswersAndTime();
  $("#questions").text("Wrong!");
  // Hide answers text
  // Increase wrong score
  scoreWrong++;
  // Increase question index
  questionIndex++;
  setTimeout(loadQuestions, 1000 * 5);
  console.log("Wrong!");
}
});

// for (let i = 0; i < quizQuestions.length; i++) {
//   console.log(quizQuestions[i].question);
//   console.log(quizQuestions[i].answers.a);
//   console.log(quizQuestions[i].answers.b);
//   console.log(quizQuestions[i].answers.c);
//   console.log(quizQuestions[i].answers.d);
// };
