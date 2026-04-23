export function getUsers(){return JSON.parse(localStorage.getItem("users"))||[];}
export function saveUsers(users){localStorage.setItem("users",JSON.stringify(users));}
export function setSession(email){localStorage.setItem("isLoggedIn","true");localStorage.setItem("currentUser",email);}
export function logout(){localStorage.clear();}
export function isLoggedIn(){return localStorage.getItem("isLoggedIn")==="true";}
export function saveScore(score){localStorage.setItem("score",score);}
export function getScore(){return localStorage.getItem("score");}