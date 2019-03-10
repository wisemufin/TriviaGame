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

for (let i = 0; i < quizQuestions.length; i++) {
  console.log(quizQuestions[i].question);
  console.log(quizQuestions[i].answers.a);
  console.log(quizQuestions[i].answers.b);
  console.log(quizQuestions[i].answers.c);
  console.log(quizQuestions[i].answers.d);
};
