document.querySelector('main').innerHTML = "";

let sourceText = "Dreaming of Electric Sheep";
let sourceLetters;
let lettersRandom;

let xPos = 0;
let yPos = 0;
let cols = 6;
let rows = 5;

let dmMono;
let textWidth;
let textHeight;
let borderLeft;
let borderTop;
let currentLetter = 0;

let currentFrame = 0;
let changeFrame = 4;

let rightLetters = 0;
let letterCounter = 0;
let addLetter = 20;

function preload() {
  dmMono = loadFont('font/DM_Mono/DMMono-Regular.ttf');
}

function setup() {
  // pixelDensity(1);
  sourceLetters = split(sourceText, '');
  lettersRandom = newWords(sourceLetters);
  createCanvas(windowWidth, windowHeight);
  textWidth = (width / cols);
  textHeight = (height / rows);
  borderLeft = textWidth / 3;
  borderTop = textHeight / 3;
  textFont(dmMono);
  textSize(width / (cols * 3));
  textAlign(CENTER, CENTER);
  setSizes();
}

function draw() {
  strokeWeight(1);
  stroke(0, 255, 0);
  noFill();
  background(0);
  // fill(0, 255, 0);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (currentLetter < lettersRandom.length) {
        text(lettersRandom[currentLetter], borderLeft + (j * textWidth), borderTop + ((i * textHeight)));
        currentLetter++;
      }
    }
  }
  if (currentLetter >= lettersRandom.length) {
    currentLetter = 0;
    currentFrame++;
    if (currentFrame > changeFrame) {
      lettersRandom = newWords(sourceLetters);
      currentFrame = 0;
      letterCounter++;
      if (letterCounter > addLetter) {
        rightLetters++;
        letterCounter = 0;
      }
      if (rightLetters > sourceLetters.length + 5) {
        rightLetters = 0;
      }
    }
  }
}

function newWords(letters) {
  let newWord = shuffle(letters);
  for (let i = 0; i < rightLetters; i++) {
    if (i < sourceLetters.length) {
      newWord[i] = sourceLetters[i];
    }
  }
  return newWord;
}

function setSizes() {
  if ((width / height) > 1) {
    cols = 6;
    rows = 5;
  } else if ((width / height) > 0.5) {
    cols = 5;
    rows = 6;
  } else {
    cols = 4;
    rows = 7;
  }
  textWidth = (width / cols);
  textHeight = (height / rows);
  borderLeft = textWidth / 4;
  borderTop = textHeight / 4;
  textSize(width / (cols * 3));
  console.log(width / height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setSizes();
}

setSizes();