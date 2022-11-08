//aempty variables that will store user input in order to calculate
let displayValue = "";
let storedValue = "";
let storedOperator = "";

//functions to display buttons on click
function display1() {
  displayValue += "1";
  document.querySelector("#displayBar").innerText = displayValue;
}
function display2() {
  displayValue += "2";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display3() {
  displayValue += "3";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display4() {
  displayValue += "4";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display5() {
  displayValue += "5";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display6() {
  displayValue += "6";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display7() {
  displayValue += "7";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display8() {
  displayValue += "8";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display9() {
  displayValue += "9";
  document.querySelector("#displayBar").innerText = displayValue;
}

function display0() {
  displayValue += "0";
  document.querySelector("#displayBar").innerText = displayValue;
}
function equals() {
  let displayValueNumber = parseInt(displayValue);
  let storedValueNumber = parseInt(storedValue);
  let displayValueAnswer = `${displayValueNumber + storedValueNumber}`;
  alert(displayValueAnswer);
  document.querySelector("#displaybar").textContent = "";
  document.querySelector("#displaybar").textContent = displayValueNumber;
}

function add() {
  storedValue = displayValue;
  displayValue = "";
  storedOperator = "+";
}

/*function equals() {
  let displayValueNumber = parseInt(displayValue);
  let storedValueNumber = parseInt(storedValue);
  let displayValueAnswer = `${displayValueNumber + storedValueNumber}`;
  alert(displayValueAnswer);
  document.querySelector("#displaybar").innerText = `${displayValueAnswer}`;
}*/

//operator buttons
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", () => add());

let equalsBtn = document.querySelector("#equalsButton");
equalsBtn.addEventListener("click", () => equals());

//number buttons
let button1 = document.querySelector("#button1");
button1.addEventListener("click", () => display1());

let button2 = document.querySelector("#button2");
button2.addEventListener("click", () => display2());

let button3 = document.querySelector("#button3");
button3.addEventListener("click", () => display3());

let button4 = document.querySelector("#button4");
button4.addEventListener("click", () => display4());

let button5 = document.querySelector("#button5");
button5.addEventListener("click", () => display5());

let button6 = document.querySelector("#button6");
button6.addEventListener("click", () => display6());

let button7 = document.querySelector("#button7");
button7.addEventListener("click", () => display7());

let button8 = document.querySelector("#button8");
button8.addEventListener("click", () => display8());

let button9 = document.querySelector("#button9");
button9.addEventListener("click", () => display9());

let button0 = document.querySelector("#button0");
button0.addEventListener("click", () => display0());

//adding event listener to number buttons and operaton buttons (aside from =)
//let numberBtn = document.querySelectorAll("button");

/*for (let i in numberBtn) {
  numberBtn[i].addEventListener("click", displayInput);

  function displayInput() {
    console.log(numberBtn[i].value);
    if (numberBtn[i].value == "+") {
      storedOperator = "+";
    } else if (numberBtn[i].value == "-") {
    } else if (numberBtn[i].value == "X") {
    } else if (numberBtn[i].value == "/") {
    } else if (numberBtn[i].value == "=") {
      operate(displayValue, storedValue, storedOperator);
    } else {
      displayValue += numberBtn[i].value;

      document.querySelector("#displayBar").innerText = displayValue;
    }

    if (displayValue != null) {
      storedValue = displayValue;
      displayValue = "";
    }
  }
}*/
