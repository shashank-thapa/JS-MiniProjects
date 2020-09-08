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
        a: 'Custom Style Sheet',
        b: 'Cascading Style Sheet',
        c: 'Cool Style Sheet',
        d: 'Compartmentalization Sacrilegiousnesses Semiprofessionally',
        correct: 'b',
    }
]

let questionEl = document.getElementById('question');
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
let submitBtn = document.getElementById('submit-bttn');


let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    let currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        alert('You completed the quiz!');
    }
})