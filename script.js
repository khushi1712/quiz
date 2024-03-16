const questions = [
    {
        question: "What is the capital of India?",
        options: ["Paris", "New Delhi", "Berlin", "Madrid"],
        answer: "New Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("scoreValue");
const resultElement = document.getElementById("result");

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    if (selectedAnswer === question.answer) {
        score++;
        scoreElement.textContent = score;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let resultText = "";
    let gifSrc = "";
    if (score >= 2) {
        resultText = "Congratulations! You are a winner!";
        gifSrc = "https://clipart-library.com/new_gallery/congratulations-clipart-56.gif";
    } else {
        resultText = "Better luck next time!";
        gifSrc = "https://media1.tenor.com/m/NUC6WS9g8UoAAAAC/shrug-idk.gif";
    }

    resultElement.innerHTML = `<p>${resultText}</p><img src="${gifSrc}" alt="Result GIF">`;
}

showQuestion();