const quizData = require('../models/quizData');

exports.renderQuizPage = (req, res) => {
  res.render('pages/quiz', { quizData });
};

exports.processQuizSubmission = (req, res) => {
    const userAnswers = Object.keys(req.body).map(key => req.body[key]);
    let score = 0;
  
    for (let i = 0; i < quizData.length; i++) {
      if (userAnswers[i] === quizData[i].correctAnswer) {
        score++;
      }
    }
  
    const totalQuestions = quizData.length;
    const percentageScore = (score / totalQuestions) * 100;
  
    res.render('pages/result', { score, totalQuestions, percentageScore });
};

  