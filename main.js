const display = document.getElementById("display");
const youranswer = document.getElementById('YourAnswer');
const CorOrWro = document.getElementById("CorrectOrWrong");
let score = document.getElementById("score");
const timer = document.getElementById("timer");
let num1 = document.querySelectorAll('.num1');
let num2 = document.querySelectorAll('.num2');
//const popUp = document.getElementById('popUp').textContent = core;

let done = false;
let core = 0;
let startGame = false;
let count = 30;
let intervalId;

function closeAlert() {
  document.getElementById('myModal').style.display = 'none';
  core = 0;
  score.innerText = core;
}

function STart() {
  startGame = true;
  Change();
  num1.forEach(num1 => {
    num1.disabled = false;
  });
  num2.forEach(num2 => {
    num2.disabled = false;
  })
    document.getElementById('equal').disabled = false;
  document.getElementById('startbutton').disabled = true;
  
  intervalId = setInterval(() => {
    document.getElementById('countdown').textContent = count;
    count--;
    if (count < 0) {
      clearInterval(intervalId);
      console.log('Time is up!');
      startGame = false;
      num1.forEach(num1 => {
        num1.disabled = true;
      });
      num2.forEach(num2 => {
        num2.disabled = true;
      })
      document.getElementById('equal').disabled = true;
      CorOrWro.value = "";
      youranswer.value = "";
      display.value = "";
      document.getElementById('popUp').textContent = "Your score is " + core + "! Nice!";
      count = 30;
      document.getElementById("myModal").style.display = 'block';
      document.getElementById('startbutton').disabled = false;
    }
  }, 1000);
}

function input(input) {
  if (done == true) {
    youranswer.value = "";
    CorOrWro.value = "";
    done.value = false;
  }
  else if (done === false) {
    youranswer.value += input;
    CorOrWro.value = "";
  }
}

function dElete() {
  if (youranswer.value.length === 1) {
    youranswer.value = "";
  }
  else {
    youranswer.value = youranswer.value.slice(0, -1);
  } 
}

function Change() {
  var num1 = Math.floor(Math.random() * 90) + 10;
  var num2 = Math.floor(Math.random() * 90) + 10;
  var operations = ['+', '*'];
  var selectedOper = Math.floor(Math.random() * operations.length);
  
  display.value = num1 + (" ") + operations[selectedOper] + (" ") + num2;
  
}
function calculate() {
  if (youranswer.value == eval(display.value)) {
    CorOrWro.value = "Your Correct";
    youranswer.value = "";
    done.value = true;
    core++;
    score.innerText = core;
    Change();
    count = 30;
  }
  else if (youranswer.value != eval(display.value)) {
    CorOrWro.value = "Your Wrong";
    youranswer.value = "";
    done.value = true;
  }
}