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

$("#questions").text(quizQuestions[0].question);
$("#answer1").text(quizQuestions[0].answers.a);

$("#start").on("click", function() {
  $("#start").css({
    'display': 'none'
  });
  $(".hidden").css({
    'visibility': 'visible'
  });
});

// for (let i = 0; i < quizQuestions.length; i++) {
//   console.log(quizQuestions[i].question);
//   console.log(quizQuestions[i].answers.a);
//   console.log(quizQuestions[i].answers.b);
//   console.log(quizQuestions[i].answers.c);
//   console.log(quizQuestions[i].answers.d);
// };
