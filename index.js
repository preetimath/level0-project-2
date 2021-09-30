      // Quiz on KGF Chapter 1 movie
//welcome part
var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readlineSync.question("Hi, What's your name? \n ");
console.log();
console.log(chalk.green("Welcome " + userName.toUpperCase() + " to play Quiz on KGF Chapter 1 movie "));

console.log();

var userScore = 0;
var totalscore = 6;

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("you are right"));
    userScore++;
  }
  else{
    console.log(chalk.red("you are wrong"));
    console.log(chalk.green("Correct answer is " + answer));
  }
  console.log(chalk.yellow("Your score is " + userScore + " / " + totalscore + " now"));
}

//array of objects
var questions = [{
  question: "What is KGF movie full form? \n (a)Kashmir Gold Fields (b)Kolar Gold Fields (c)Karnataka Gold Fiels (d)Kolkata Gold Farm \n ",
  answer: "b"
},{
  question: "In the film Who was in the lead role as Rocky? \n (a)Darshan (b)Shahrukh Khan (c)Yash (d)Hrithik Roshan \n ",
  answer: "c"
},{
  question: "who directed the film? \n (a)Prashanth Neel (b)Yash Chopra (c)Vishal Bhardwaj (d)Upendra \n ",
  answer: "a"
},{
  question: "when was the year KGF Chapter 1 movie released? \n (a)2017 (b)2019 (c)2018 (d)2021 \n ",
  answer: "c"
},{
  question: "Which Actress played the female lead role? \n (a)Rachita Ram (b)Deepika Padukone (c)Kriti Sanon (d)Srinidhi Shetty \n ",
  answer: "d"
},{
  question: "In how many languages movie was dubbed? \n (a)3 (b)5 (c)6 (d)8 \n ",
  answer: "b"
}];

//loop
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log("******");
  console.log();
}

console.log("-------------");

var allScores = [{
  name : "Ram",
  score : 6
},{
  name : "Krish",
  score : 5
}];

finalScore();

function finalScore(){
  console.log();
  console.log("##########");
  console.log(chalk.green.bold("Your final score is: " + userScore + " / " + totalscore));
  console.log("##########");
  console.log();

  for(var i=0;i<allScores.length;i++){
    var currentScore = allScores[i];

    if(userScore > currentScore.score){
      console.log("$$*** --  ***$$");
      console.log(chalk.green("Congratulation! " + userName.toUpperCase() + " ==> Your score is one of the highest score"));
      console.log(chalk.green("Send me the screenshot to update your name and score in the Quiz"));
      console.log("$$*** --  ***$$");
      console.log();
    }
  }
  
  for(var i=0;i<allScores.length;i++){
    var currentScore = allScores[i];
    console.log(currentScore.name + " has scored: " + currentScore.score + " / " +totalscore);
  }
}

console.log();
console.log("------END-------");