var questions = [{
    questions: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3

}, {
    questions: "What is the adult of a kid called?",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2

}, {
    questions: "What is the young of a Bufallo called?",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0

}, {
    questions: "What is a baby Aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2

}, {
    questions: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1

}, {
    questions: "What is a baby Hamster called?",
    choices: ["pup", "chick", "infant", "billy"],
    correctAnswer: 0

}, {
    questions: "What is a baby Hawk called?",
    choices: ["hawklett", "pup", "larva", "eyas"],
    correctAnswer: 3

}, {
    questions: "What is a baby grasshopper called?",
    choices: ["hopper", "nymph", "stick", "pup"],
    correctAnswer: 1

}, {
    questions: "What is a baby Kangaroo called?",
    choices: ["kinga", "joey", "calf", "baby"],
    correctAnswer: 1

}, {
    questions: "What is a baby Whale called?",
    choices: ["whala", "cub", "grup", "infant"],
    correctAnswer: 1

}, {
    questions: "What is a baby Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctAnswer: 0

}, {
    questions: "What is a baby Bear called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctAnswer: 0

}];

var currentQuestion=0;
var correctAnswers=0;
var quizOver=false;

$(document).ready(function () {
    displayCurrentQuestions();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if(!quizOver){
            value=$("input[type='radio']:checked").val();
            if(value==undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }
            else{
                $(document).find(".quizMessage").hide();
                if(value==questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion<questions.length){
                    displayCurrentQuestions();
                }
                else{
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver=true;
                }
            }
        }else{
            quizOver=false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestions();
            hideScore();
        }
    })
})