const questions = [
    {
        question: "who is the most beautiful girl in class?",
        answers: [
            { text: "Justolo", correct: false},
            { text: "Dami dot", correct: true},
            { text: "Jessy baby", correct: false},
            { text: "Oye baby", correct: false},
        ]
    },
    {
        question: "who is the most handsome boy in class?",
        answers: [
            { text: "Dipo", correct: false},
            { text: "Kerich Ode", correct: false},
            { text: "Badman", correct: false},
            { text: "Mushin", correct: true},
        ]
    },
    {
        question: "who is more of a stenographer in class?",
        answers: [
            { text: "Temitope", correct: false},
            { text: "Dami dot", correct: false},
            { text: "Abismart", correct: false},
            { text: "Zite", correct: true},
        ]
    },
    {
        question: "who is likely to come late to his/her wedding?",
        answers: [
            { text: "Jessy baby", correct: false},
            { text: "Mushin", correct: false},
            { text: "Dipo", correct: true},
            { text: "Tosin", correct: false},
        ]
    },
    {
        question: "who is the most talented",
        answers: [
            { text: "Daniel", correct: false},
            { text: "Apata", correct: false},
            { text: "Badman", correct: false},
            { text: "Simeon", correct: true},
        ]
    },
    {
        question: "which ship is likely to sink before we all leave",
        answers: [
            { text: "Eunice n Badman", correct: false},
            { text: "Benefit boy n Nike", correct: false},
            { text: "All of the above", correct: true},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "who is likely to be the next multimillionaire",
        answers: [
            { text: "Apata", correct: false},
            { text: "benefit boy", correct: false},
            { text: "simeon", correct: false},
            { text: "badman", correct: false},
        ]
    },
    {
        question: "who is more of a talkative",
        answers: [
            { text: "Iya amoke", correct: false},
            { text: "Blessing", correct: false},
            { text: "Dipo", correct: false},
            { text: "All of the above", correct: true},
        ]
    },
    {
        question: "the most gentle",
        answers: [
            { text: "Zite", correct: true},
            { text: "Alhaja", correct: false},
            { text: "Christaina", correct: false},
            { text: "Lydia", correct: false},
        ]
    },
    {
        question: "husband material",
        answers: [
            { text: "Daniel", correct: false},
            { text: "Mushin", correct: false},
            { text: "Badman", correct: false},
            { text: "none of the above", correct: true},
        ]
    },
    {
        question: "wife material",
        answers: [
            { text: "oye baby", correct: true},
            { text: "Justolo", correct: false},
            { text: "Dami dot", correct: false},
            { text: "Temitope", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "inline-block";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    
    const shuffledAnswers = shuffleArray(currentQuestion.answers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    answerButtons.innerHTML = ""; 
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function endQuiz() {
    questionElement.innerHTML = "Quiz Completed! Your Score: " + score + "/" + questions.length;
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
}


function shuffleArray(array) {
    const shuffledArray = array.slice(); 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

startQuiz();