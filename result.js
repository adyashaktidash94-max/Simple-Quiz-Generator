import {getScore} from "./storage.js";
import {quizData} from "./data.js";

let s=getScore();
document.getElementById("score").innerText=
`Total: ${quizData.length}
Correct: ${s}
Score: ${s}/${quizData.length}`;

document.getElementById("restart").onclick=()=>{
window.location.href="quiz.html";
};