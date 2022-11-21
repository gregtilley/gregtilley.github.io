const heading = document.getElementById("heading");
let text = heading.innerHTML;
const words = text.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = '<span id="span_' + i + '">' + words[i] + '</span>';
}
text = words.join(" ");
heading.innerHTML = text;




// const spans = gsap.utils.toArray("#heading span");
//const spans = document.getElementsByTagName('span');
let spans = [];
let spansX = [];
let spansY = [];
let spansSpeed = [];
let leading;
let switchThreshold = 10;

function setup() {
  noCanvas();
  spans = selectAll('span');
  leading = window.innerHeight / spans.length;
  for (let i = 0; i < spans.length; i++) {
    spans[i].x = 0;
    spans[i].y = i * leading;
    spansX[i] = spans[i].x;
    spansY[i] = spans[i].y;
    spansSpeed[i] = Math.round(random(2, 4));
  }
}

function draw() {
  for (let i = 0; i < spans.length; i++) {
    let spanWidth = spans[i].elt.getBoundingClientRect().width;
    let spanPos = (spansX[i] + spanWidth);
    if (spansX[i] < 0) {
      if (spanPos < (windowWidth - switchThreshold)) {
        spansSpeed[i] = -spansSpeed[i];
      }
    } else {
      if (spanPos > (windowWidth + switchThreshold)) {
        spansSpeed[i] = -spansSpeed[i];
      }
    }
    spans[i].position(spansX[i], spansY[i])
    spansX[i] += spansSpeed[i];
  } 
}

function windowResized() {
  leading = window.innerHeight / spans.length;
  for (let i = 0; i < spans.length; i++) {
    spans[i].y = i * leading;
  }
}