const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

const quizController = require('./controllers/quizController');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home');
  });  

app.get('/quiz', quizController.renderQuizPage);
app.post('/quiz', quizController.processQuizSubmission);

app.get('/result', (req, res) => {
  res.render('pages/result');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
