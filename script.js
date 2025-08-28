// Part 1: Basics
const askNameBtn = document.getElementById('askName');
askNameBtn.addEventListener('click', () => {
  let name = prompt('Enter your name:');
  if (name) {
    document.getElementById('greeting').textContent = `Hello, ${name}! Welcome.`;
  } else {
    document.getElementById('greeting').textContent = 'You did not enter a name.';
  }
});

// Part 2: Functions
function calculateTotal(a, b) {
  return a + b;
}

function formatString(str) {
  return str.toUpperCase();
}

document.getElementById('calcTotal').addEventListener('click', () => {
  let result = calculateTotal(10, 20);
  document.getElementById('totalResult').textContent = `Total: ${result}`;
});

document.getElementById('formatText').addEventListener('click', () => {
  let result = formatString('hello world');
  document.getElementById('formatResult').textContent = result;
});

// Part 3: Loops
const showNumbersBtn = document.getElementById('showNumbers');
showNumbersBtn.addEventListener('click', () => {
  const numberList = document.getElementById('numberList');
  numberList.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    numberList.appendChild(li);
  }
});

const countdownBtn = document.getElementById('countdown');
countdownBtn.addEventListener('click', () => {
  let count = 5;
  const result = document.getElementById('countdownResult');
  result.textContent = '';
  while (count > 0) {
    result.textContent += count + '... ';
    count--;
  }
  result.textContent += 'Go!';
});

// Part 4: DOM Manipulation
const changeTextBtn = document.getElementById('changeText');
changeTextBtn.addEventListener('click', () => {
  document.getElementById('textTarget').textContent = 'The text has been changed!';
});

const toggleModeBtn = document.getElementById('toggleMode');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const addItemBtn = document.getElementById('addItem');
addItemBtn.addEventListener('click', () => {
  const list = document.getElementById('dynamicList');
  const li = document.createElement('li');
  li.textContent = 'New List Item';
  list.appendChild(li);
});