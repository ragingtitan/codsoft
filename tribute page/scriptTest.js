const questions=[
    {
        "question": "What club did Lionel Messi make his professional debut for?",
        "answers": [
            { "text": "FC Barcelona", "state": "correct" },
            { "text": "Newell's Old Boys", "state": "incorrect" },
            { "text": "Manchester United", "state": "incorrect" }
        ]
    },
    {
        "question": "How old was Lionel Messi when he scored his first goal for FC Barcelona?",
        "answers": [
            { "text": "17 years and 311 days", "state": "correct" },
            { "text": "18 years and 10 days", "state": "incorrect" },
            { "text": "19 years and 258 days", "state": "incorrect" }
        ]
    },
    {
        "question": "How many Ballon d'Or awards has Lionel Messi won?",
        "answers": [
            { "text": "7", "state": "correct" },
            { "text": "5", "state": "incorrect" },
            { "text": "9", "state": "incorrect" }
        ]
    },
    {
        "question": "What year did Lionel Messi win his first FIFA World Player of the Year award?",
        "answers": [
            { "text": "2009", "state": "correct" },
            { "text": "2007", "state": "incorrect" },
            { "text": "2011", "state": "incorrect" }
        ]
    },
    {
        "question": "How many goals did Lionel Messi score for FC Barcelona in all competitions during the 2011-12 season?",
        "answers": [
            { "text": "73", "state": "correct" },
            { "text": "60", "state": "incorrect" },
            { "text": "85", "state": "incorrect" }
        ]
    },
    {
        "question": "What year did Lionel Messi lead Argentina to their first Copa América title in 28 years?",
        "answers": [
            { "text": "2021", "state": "correct" },
            { "text": "2019", "state": "incorrect" },
            { "text": "2016", "state": "incorrect" }
        ]
    },
    {
        "question": "How many Champions League titles has Lionel Messi won with FC Barcelona?",
        "answers": [
            { "text": "4", "state": "correct" },
            { "text": "3", "state": "incorrect" },
            { "text": "5", "state": "incorrect" }
        ]
    },
    {
        "question": "What year did Lionel Messi make his debut for the Argentina national team?",
        "answers": [
            { "text": "2005", "state": "correct" },
            { "text": "2003", "state": "incorrect" },
            { "text": "2007", "state": "incorrect" }
        ]
    },
    {
        "question": "How many goals has Lionel Messi scored for the Argentina national team?",
        "answers": [
            { "text": "98", "state": "correct" },
            { "text": "85", "state": "incorrect" },
            { "text": "110", "state": "incorrect" }
        ]
    },
    {
        "question": "What year did Lionel Messi win his first La Liga title with FC Barcelona?",
        "answers": [
            { "text": "2005", "state": "correct" },
            { "text": "2003", "state": "incorrect" },
            { "text": "2007", "state": "incorrect" }
        ]
    }
]


let questionElement=document.getElementById("question");
let answerButtons=document.getElementById("answer-buttons");
let nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuestion();
}
function showQuestion()
{
    resetState()
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    nextButton.innerHTML='Next'
    //console.log(questionNo);
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.state==="correct" || answer.state==="incorrect") 
        {
            button.dataset.state = answer.state;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function resetState()
{
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
   // const isCorrect= selectedBtn.dataset.state="yes";
   selectedBtn.classList.add("selected");
   if(selectedBtn.dataset.state=="correct")
   {
    score++;
   }
    Array.from(answerButtons.children).forEach(button=>{
        button.disabled=true;
    });
    nextButton.style.display="block";
}
    
function showScore(){
    resetState();
    if(score>=0 && score <=3)
    {
        questionElement.innerHTML=`<p class="text-red-800 text-center">Your score is ${score}. You don't seem to know enough about Lionel Messi.</p>`;
    }
    else if(score>3 && score <=6)
    {
        questionElement.innerHTML=`<p class="text-yellow-800 text-center">Your score is ${score}. You know something about Lionel Messi.</p>`;
    }
    else if(score>6 && score<=10)
    {
        questionElement.innerHTML=`<p class="text-green-800 text-center">Your score is ${score}. You know well enough about Lionel Messi. You are his real fan.</p>`;
    }
    else{

    }
    console.log(score)
    nextButton.innerHTML='Take the test again?'
    nextButton.style.display="block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton()
    }
    else{
        startQuiz();
    }
})
startQuiz();
//new

let startQuizBtn = document.getElementById('start-quiz');
let welcome=document.querySelector('.welcome');
let app=document.querySelector('.app');
startQuizBtn.addEventListener('click',()=>{
    app.style.animationName = 'anim1';
    app.style.animationDuration ='0.5s';
    welcome.classList.add('hidden');
    app.classList.remove('hidden');
})
