const quizData = [
    {
        question: 'What is array?',
        a: 'object',
        b: 'functions',
        c: 'data type',
        d: 'method',
        correct: 'c'
    },
    {
        question: 'What is map?',
        a: 'object',
        b: 'functions',
        c: 'variable',
        d: 'method',
        correct: 'd'
    },
    {
        question: 'What is let keyword used for?',
        a: 'object',
        b: 'functions',
        c: 'variable',
        d: 'method',
        correct: 'c'
    },
    {
        question: 'What is class keyword used for?',
        a: 'object',
        b: 'class',
        c: 'variable',
        d: 'function',
        correct: 'c'
    },
    {
        question: 'latest JS version?',
        a: 'ES5',
        b: 'Vanilla',
        c: 'ES6',
        d: 'ES11',
        correct: 'd'
    }

];

const quizBody = document.getElementById("quiz");
const answersE = document.querySelectorAll(".answer");
const questionE = document.getElementById('question');
const atxt = document.getElementById('atxt');
const btxt = document.getElementById('btxt');
const ctxt = document.getElementById('ctxt');
const dtxt = document.getElementById('dtxt');
const submitBtn = document.getElementById('submit');
const resultContainer = document.getElementById('resultContainer');
const resultMsg = document.getElementById('resultMsg');
const retakeBtn = document.getElementById('retake');
const alertBox = document.getElementById('alert');
let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionE.innerText = currentQuizData.question;
    atxt.innerText = currentQuizData.a;
    btxt.innerText = currentQuizData.b;
    ctxt.innerText = currentQuizData.c;
    dtxt.innerText = currentQuizData.d;
}

function getSelected(){
    let correctAns = undefined;

    answersE.forEach((answer) => {
        if (answer.checked) {
            correctAns = answer.id;
        }
    });
    return correctAns;
}

function deselectAnswer() {
    answersE.forEach((answer) => {
        answer.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    
    const correctAns = getSelected();
    answersE.forEach((answer) => {
        if (answer.checked){
            if (correctAns) {
                if (correctAns === quizData[currentQuiz].correct) {
                    score++;
                }
                currentQuiz++;
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    // quizBody.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>`;
                    // resultMsg.style.display = "block";
                    // retakeBtn.style.display = "block";
                    quizBody.style.display = "none";
                    resultContainer.style.display = "flex";
                    resultMsg.innerText = `Congratulations! Your score is ${score} out of ${quizData.length}`;
                }
            }
        } else {
            alertBox.innerText = `Please select an answer to proceed`;
            // console.log("hh");
        }
    });
    
})

//retake test//
retakeBtn.addEventListener('click', () => {
    window.location.reload();
})