import {quizData} from "./data.js";
import {saveScore,isLoggedIn} from "./storage.js";

if(!isLoggedIn())window.location.href="index.html";

let i=0,s=0;
const q=document.getElementById("question");
const o=document.getElementById("options");
const n=document.getElementById("next");
const p=document.getElementById("progress");

function load(){
p.innerText=`Question ${i+1}/${quizData.length}`;
q.innerText=quizData[i].question;
o.innerHTML="";
quizData[i].options.forEach(opt=>{
let b=document.createElement("button");
b.innerText=opt;
b.onclick=()=>select(opt);
o.appendChild(b);
});
}

function select(ans){
if(ans===quizData[i].correct)s++;
n.style.display="block";
}

n.onclick=()=>{
i++;
if(i<quizData.length){
load();
n.style.display="none";
}else{
saveScore(s);
window.location.href="result.html";
}
};

load();