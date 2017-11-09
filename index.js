'use strict';

const STORE = 
    {
      questions: [
        {
          quest: 'What fruit is traditionally used in an Eve\'s pudding?',
          correctAnswer: 'apples',
          answersArr: [ 'pears', 'apples', 'raisins', 'lemon'],
          //userAnswerCorrect: false
        },
            
        {
          quest: 'In which country did Tea originate?',
          correctAnswer: 'China',
          answersArr: [ 'China', 'Japan', 'Russia', 'Italy'],
          //userAnswerCorrect: false
        },

        {
          quest: 'What is the traditional Egyptian and Middle Eastern food which is a deep-fried ball or patty made from ground chickpeas, fava beans, or both?',
          correctAnswer: 'Falafel',
          answersArr: [ 'Hush puppies', 'Matzo balls', 'Kugel', 'Falafel']
          //userAnswerCorrect: false
        },

        {
          quest: 'Used in pudding, what is the starch extracted from the spongy center, or pith, of various tropical palm stems known as?',
          correctAnswer: 'Sago',
          answersArr: [ 'Tapioca', 'Potato starch', 'Sago', 'Gelatin']
          //userAnswerCorrect: false
        },

        {
          quest: 'If you were touring the vinyards of the Hunter Valley, in which country would you be?',
          correctAnswer: 'Australia',
          answersArr: [ 'Australia', 'Canada', 'United States', 'New Zealand']
          //userAnswerCorrect: false
        },

        {
          quest: 'Which pastry can be described as a laminated dough where butter is placed inside a pocket in the pastry which is then repeatedly folded and rolled?',
          correctAnswer: 'Puff pastry',
          answersArr: [ 'Croissant', 'Filo', 'Puff pastry', 'Biscuit']
          //userAnswerCorrect: false
        },

        {
          quest: 'Which of these is not a main ingredient of a Mocha?',
          correctAnswer: 'Cinnamon',
          answersArr: [ 'Chocolate', 'Cinnamon', 'Espresso', 'Hot milk']
          //userAnswerCorrect: false
        },

        {
          quest: 'A Scandinavian meal served buffet style with multiple hot and cold dishes of various foods is known as a what?',
          correctAnswer: 'Smorgasbord',
          answersArr: [ 'Smorgasbord', 'Tapas', 'Montage', 'Spread']
          //userAnswerCorrect: false
        },

        {
          quest: 'Beef jerky probably originated in South American, but what is Jerky?',
          correctAnswer: 'It is a form of meat preservation in which the meat is dried to prevent it from spoiling.',
          answersArr: [ 'It is a form of meat preservation in which the meat is salted to prevent it from spoiling.', 'It is a form of meat preservation in which the meat is steamed to prevent it from spoiling.', 'It is a form of meat preservation in which the meat is dried to prevent it from spoiling.', 'It is a form of meat preservation in which the meat is frozen to prevent it from spoiling.']
          //userAnswerCorrect: false
        },

        {
          quest: 'If you were having a cocktail of Guinness and Champagne what would it be called?',
          correctAnswer: 'Black Velvet',
          answersArr: [ 'Crown Royal', 'Black Velvet', 'Moscow Mule', 'Ginger beer']
          //userAnswerCorrect: false
        },   

      ],
      currentQuestion: 0,
      score: 0
    };


    

function handleStartPage(){
  const html = generateStartPage();
  renderHTML(html);
}

function generateStartPage(){
  return `    
    <button class="btnStartQuiz">Start Quiz</button>
    `;
}


function generateQuestions(currQuestionArr, questionIndex){
  
  const currentQuestionObj = currQuestionArr[questionIndex];
  //console.log(currentQuestionObj);
  return `
    <div class="placeAndScore hidden">
        <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
        <div id="scoreInQuiz">You've answered ${STORE.score} questions correctly.</div>
    </div>
    <div class="questionsAndAnswers">
        <span>${currentQuestionObj.quest}</span>
    </div>
    <div class="questionsAndAnswers">  
        <input type="radio" name="multipleChoice" id="multipleChoice1" value="${currentQuestionObj.answersArr[0]}" required>
        <label for="multipleChoice1">${currentQuestionObj.answersArr[0]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice2" value="${currentQuestionObj.answersArr[1]}" required>
        <label for="multipleChoice2">${currentQuestionObj.answersArr[1]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice3" value="${currentQuestionObj.answersArr[2]}" required>
        <label for="multipleChoice3">${currentQuestionObj.answersArr[2]}</label>
    </div>
    <div class="questionsAndAnswers">
        <input type="radio" name="multipleChoice" id="multipleChoice4" value="${currentQuestionObj.answersArr[3]}" required>
        <label for="multipleChoice4">${currentQuestionObj.answersArr[3]}</label>
    </div>
    <div>
        <button id="submitAnswerButton">Submit Answer</button>
    </div>`;
}

function generateRightFeedback(currQuestionArr, questionIndex){

  return `
        <div class="feedBack">
            <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
            <div id="scoreInQuiz">You've answered ${STORE.score} questions correctly.</div>
            <p>Cheers! You Are Right!</p>
            <button class="btnNextQuestion">Go to the next Question</button>
        </div>
    `;
}

function generateWrongFeedback(currQuestionArr, questionIndex){
  
  return `
    <div class="feedBack">
        <div id="placeInQuiz">Question ${questionIndex + 1} out of ${currQuestionArr.length}</div>
        <div id="scoreInQuiz">You've answered ${STORE.score} questions correctly.</div>
        <p>You've been Chopped! The correct answer was ${STORE.questions[questionIndex].correctAnswer}</p>
        <button class="btnNextQuestion">Go to the next Question</button>
    </div>
    `;
}

function generatePassResultPage(){
  return `
  <h2>Congratulations! You are a master Culinary Artist!</h2>
  <p>Your Score was ${STORE.score/STORE.questions.length*100}%</p>     
  <button class="startNewQuiz">Start New Quiz</button>
  `;
}

function generateFailResultPage(){
  return `
  <h2>You got Burned! Watch some FOOD Network and try again!</h2>
  <p>Your Score was ${STORE.score/STORE.questions.length*100}%</p>     
  <button class="startNewQuiz">Start New Quiz</button>
  `;
}

function renderHTML(strQuestion){
  $('#quizContent').html(strQuestion);
}

function handleQuestions(storeData){
  const html = generateQuestions(storeData.questions, storeData.currentQuestion);
  renderHTML(html);
}

function handleWrongFeedback(storeData){
  const wrongHTML = generateWrongFeedback(storeData.questions, storeData.currentQuestion);
  renderHTML(wrongHTML);
}

function handleRightFeedback(storeData){
  const rightHTML = generateRightFeedback(storeData.questions, storeData.currentQuestion);
  renderHTML(rightHTML);
}

function handlePassResultPage(storeData){
  const passHTML = generatePassResultPage();
  renderHTML(passHTML);
}

function handleFailResultPage(storedata){
  const failHTML = generateFailResultPage();
  renderHTML(failHTML);
}

function handleSubmitAnswer(){
  $('form').on('click', '#submitAnswerButton', function(event){
    event.preventDefault();
    const submittedAnswer = $('input[type=radio][name=multipleChoice]:checked').val();
    const errorMessage= '<p class="errorMessage">You must fill in an answer</p>';

    if(submittedAnswer !== undefined){
      if(STORE.questions[STORE.currentQuestion].correctAnswer === submittedAnswer){
        STORE.score++;
        handleRightFeedback(STORE);
        STORE.currentQuestion++;  
      } else {
        handleWrongFeedback(STORE);
        STORE.currentQuestion++;  
      }
    }else{
      $('#quizContent').prepend(errorMessage);
    }
    console.log(STORE.currentQuestion);
  });
}

function handleStartQuizBtn(){
  $('form').on('click', '.btnStartQuiz', function(event){
    event.preventDefault();
    handleQuestions(STORE);
  });
}

function handleNextQuestionBtn(){
  $('form').on('click', '.btnNextQuestion', function(event){
    if(STORE.currentQuestion < 10){
      event.preventDefault();
      console.log(STORE.currentQuestion);  
      handleQuestions(STORE);
    } else {
      if(STORE.score >= 7){
        handlePassResultPage(STORE);
      } else if(STORE.score < 7){
        handleFailResultPage(STORE);
      }
    }
  });
}

function quizApp(){
  handleStartPage();
  handleStartQuizBtn();
  //handleQuestions(STORE);
  handleSubmitAnswer();
  handleNextQuestionBtn();
}

$(quizApp);