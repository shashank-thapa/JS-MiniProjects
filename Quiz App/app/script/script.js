let quizData = [
    {
        question: 'What is the capital of Nepal?',
        a: 'Pokhara',
        b: 'Lalitpur',
        c: 'Kathmandu',
        d: 'Chitwan',
        correct: 'c',
    }, {
        question: 'In what year was the Pulitzer Prize established?',
        a: '1917',
        b: '1918',
        c: '1922',
        d: '1928',
        correct: 'a',
    }, {
        question: 'What is the most used programming language in 2020?',
        a: 'C',
        b: 'Python',
        c: 'JavaScript',
        d: 'Java',
        correct: 'd',
    },{
        question: 'What does CSS stand for?',
        a: 'Conspiracy Swag Sheet',
        b: 'Cascading Style Sheet',
        c: 'Curly Sassy Sexy',
        d: 'Compartmentalization Sacrilegiousnesses Semiprofessionally',
        correct: 'b',
    }
]

let questionEl = document.getElementById('question');
let quiz = document.getElementById('quiz');
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
let submitBtn = document.getElementById('submit-bttn');
let answerEls = document.querySelectorAll('.answer');
let bttnDiv = document.querySelector(".bttn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    let currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}

function selectedAnswer(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
    let answer = selectedAnswer();

    if( answer){
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        };
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `
            <h2>Your correctly answered ${score}/${quizData.length} questions.</h2>
            
            <button onclick = "location.reload() ">Reload</button>`;
            submitBtn.remove();
        }
    }
});

