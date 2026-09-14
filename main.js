let code = document.getElementById('code');
let inp1 = document.getElementById('inp1');
let timer = document.getElementById('timer');
let small2 = document.getElementById('small2');
let x = Number(timer.innerText);
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let small3 = document.getElementById('small3');
let music = document.getElementById('music');
let sound = document.getElementById('sound')
let coin = 0;
let tiem;
let img3 = document.getElementById('img3')
const programmingSnippets = [
    "const app = document.getElementById('app');",
    "function calculateSum(a, b) { return a + b; }",
    "import React, { useState, useEffect } from 'react';",
    "git commit -m 'Initial commit and project setup'",
    "SELECT * FROM users WHERE active = 1 ORDER BY created_at DESC;",
    "async function fetchData(url) { const res = await fetch(url); return res.json(); }",
    "npm install express cors dotenv mongoose",
    "display: flex; justify-content: center; align-items: center;",
    "const [state, setState] = useState(0);",
    "if (x > 10 && y < 5) { console.log('Valid conditions met'); }",
    "db.collection('users').doc(userId).get();",
    "docker-compose up --build -d",
    "router.get('/api/v1/users', authenticateToken, getUsers);",
    "localStorage.setItem('user', JSON.stringify(userData));",
    "window.addEventListener('resize', () => console.log(window.innerWidth));"
  ];
  window.onload = function(){
    Selectingawordatrandom();
}
function ul(){
    tiem = setInterval(() => {
        x--;
        timer.innerText = x;
        if(x <= 0){
            clearInterval(tiem)
            Verifyingtheresult()
        }
    }, 1000);
}
ul()
inp1.oninput = function(){
    if(inp1.value === code.innerText){
        small2.innerText = "Your Win";
        small2.style.color = 'green'
        inp1.disabled = true;
        timer.innerText = 0;
        timer.style.display = 'none'
        btn1.style.display = 'block'
        clearInterval(tiem)
        coin+= 5;
        small3.innerText = coin;
    }
}
function Verifyingtheresult(){
    if(x <= 0){
        if(inp1.value === code.innerText){
            small2.innerText = "Your Win";
            small2.style.color = 'green'
            btn1.style.display = 'block'
            inp1.disabled = true;
            timer.innerText = 0;

        }else{
            small2.innerText = 'your lose'
            small2.style.color = 'red'
            timer.innerText = 0;
            btn2.style.display = 'block'
            coin-= 5;
            small3.innerText = coin;
        }
    }
}
function Selectingawordatrandom(){
    let randomIndex = Math.floor(Math.random() * programmingSnippets.length);
    let randomword = programmingSnippets[randomIndex]
    code.innerText = randomword;
}
btn1.onclick = function(){
    Selectingawordatrandom();
    btn1.style.display = 'none'
    inp1.value = '';
    inp1.disabled = false;
    small2.innerText = '';
    x = 30;
    timer.innerText = x;
    timer.style.display = 'block';
    small2.innerText = '';
    ul();
}
btn2.onclick = function(){
    location.reload();
}
music.onclick = function(){
    sound.play()
    music.style.display = 'none';
    img3.style.display = 'block'
}
img3.onclick = function(){
    sound.pause()
    music.style.display = 'block';
    img3.style.display = 'none'
}