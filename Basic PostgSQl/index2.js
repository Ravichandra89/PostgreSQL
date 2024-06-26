import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let quiz = [
    { country: "France", capital: "Paris" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States of America", capital: "New York" },
];

let totalCount = 0;

// middleware use
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.status("public"));


let currentQuestion = {};

// GET Home page
app.get('/', async (req, res) => {
    totalCount = 0;
    await nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", {question: currentQuestion});
});

// POST Method
app.post('/submit', (req, res) => {
    let isCorrect = false;
    let answer = req.body.answer.trim();

    if(currentQuestion.capital.toLowerCase() === answer.toLowerCase()){
        totalCount++;
        console.log(totalCount);
        isCorrect = true;
    }

    // Assgninf new question
    nextQuestion();
    res.render("index.ejs",{
        question : currentQuestion,
        wasCorrect : isCorrect,
        totalScore : totalCount,
    })
});
