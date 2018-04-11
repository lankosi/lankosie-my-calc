const btns = document.querySelectorAll('.digit')
document.querySelector('#ce').addEventListener('click', clearEntry)
const ac = document.querySelector('#ac').addEventListener('click', clearAll)
const equals = document.querySelector('#equals').addEventListener('click', calculate)
const dot = document.querySelector('#dot').addEventListener('click', dotPressed)
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', buttonPressed);
}



const screenMain = document.querySelector('#screenOne')
const screenCalc = document.querySelector('#screenTwo')
const opps = document.querySelectorAll('.opp')
//sean
for (var i = 0; i < opps.length; i++) {
  opps[i].addEventListener('click', oppPressed)
}

let calcValue = '';
let operators = '';
let currentN = '';
let previous = '0';
//sean
function buttonPressed() {
  if (currentN == '0') {
    currentN = this.innerHTML;
  } else {
    currentN += this.innerHTML;
  }
  show(currentN);
}



function oppPressed() {
  let val = this.innerHTML;
  if (!currentN && previous) {
    currentN = previous;
  }

  if (currentN[currentN.length - 1] == '.') {
    currentN = currentN.slice(0, -1)
  }

  if (currentN) {
    calcValue += '' + currentN + '' + val;
    currentN = '';
  } else {
    calcaValue = calcValue.slice(0, -1) + val;
  }
  show(calcValue)
}

function calculate() {
  let answer = calculate + currentN;
  answer = answer.replace('x', '*').replace('÷', '/')
  answer = eval(answer);
  showMain(answer)
  calcValue += '' + currentN + ' =' + answer
  show(calcValue)
  previous = answer + '';
  currentN = '';
  calcValue = '';
}

function dotPressed() {
  if (currentN == '' || currentN == '0') {
    currentN = '0.'
  } else if (!/\./.test(currentN)) {
    currentN += '.';
  }
  showMain(currentN);

}

function clearEntry() {
  currentN = '';
  showMain('0');
}


function clearAll() {
  currentN = '';
  showMain('0');
  screenCalc('');

}

function showMain(text) {
  screenMain.innerHTML = text;
}

function show(message) {
  screenCalc.innerHTML = message;
}
