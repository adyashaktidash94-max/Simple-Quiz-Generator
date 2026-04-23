import {getUsers,saveUsers,setSession} from "./storage.js";

const r=document.getElementById("registerForm");
if(r){
r.addEventListener("submit",e=>{
e.preventDefault();
let u=document.getElementById("username").value;
let em=document.getElementById("email").value;
let p=document.getElementById("password").value;
let users=getUsers();
if(users.find(x=>x.email===em)){alert("User exists");return;}
users.push({username:u,email:em,password:p});
saveUsers(users);
window.location.href="index.html";
});
}

const l=document.getElementById("loginForm");
if(l){
l.addEventListener("submit",e=>{
e.preventDefault();
let em=document.getElementById("email").value;
let p=document.getElementById("password").value;
let users=getUsers();
let user=users.find(x=>x.email===em&&x.password===p);
if(!user){alert("Invalid");return;}
setSession(em);
window.location.href="dashboard.html";
});
}