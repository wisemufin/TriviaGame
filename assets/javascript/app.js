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

function endgame() {
  $("#questions").text("Game Over!");
  $(".answer").css({
    'visibility' : 'visible'
  });
  $("#answer1").text("Correct: " + scoreCorrect);
  $("#answer2").text("Wrong: " + scoreWrong);
  $("#answer3").text("Unanswered: " + unanswered);
  $("#answer4").text("");
}

function loadQuestions() {
  if (questionIndex < quizQuestions.length) {
    time = 30;
    timerStart();
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
    // endgame();
    $("#questions").text("Game Over!");
    $(".answer").css({
      'visibility' : 'visible'
    });
    $("#answer1").text("Wins: " + scoreCorrect);
    $("#answer2").text("Losses: " + scoreWrong);
    $("#answer3").text("Unanswered: " + unanswered);
    $("#answer4").text("");
  }
}

// $("#questions").text(quizQuestions[0].question);
// $("#answer1").text(quizQuestions[0].answers.a);

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
  console.log(interval);
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
  questionIndex++;
  $("#questions").text("Time is up!");
  $(".answer").css({
    'visibility' : 'hidden'
  });
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
    $("#questions").text("Correct!");
    $(".answer").css({
      'visibility' : 'hidden'
    });
    // Increase question index
    questionIndex++;
    scoreCorrect++;
    setTimeout(loadQuestions, 1000 * 5);
    console.log(questionIndex);
} else {
  resetTimer();
  $("#questions").text("Wrong!");
  // Hide answers text
  $(".answer").css({
    'visibility' : 'hidden'
  });
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
