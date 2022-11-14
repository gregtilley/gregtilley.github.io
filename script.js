const heading = document.getElementById("heading");
let text = heading.innerHTML;
const words = text.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = '<span>' + words[i] + '</span>';
}
text = words.join(" ");
heading.innerHTML = text;



let spanWidths = [];
const spans = gsap.utils.toArray("#heading span");

for (let i = 0; i < spans.length; i++) {
  spanWidths[i] = spans[i].getBoundingClientRect().width;
  if (i % 2 == 0) {
    gsap.set(spans[i], { x: () => window.innerWidth})
    gsap.to(spans[i], { 
      x: () => -((window.innerWidth * 3) - spanWidths[i]), 
      delay: 1, 
      duration: gsap.utils.random(7, 10),
      repeat: -1,
      yoyo: true,
      ease: 'none'
    })
  } else {
    gsap.set(spans[i], { x: 0 - spanWidths[i]})
    gsap.to(spans[i], { 
      x: () => window.innerWidth + spanWidths[i], 
      delay: 1, 
      duration: gsap.utils.random(7, 10),
      repeat: -1,
      yoyo: true,
      ease: 'none'
    })
  }
  
}

window.addEventListener('resize', () => {
  for (let i = 0; i < spans.length; i++) {
    spanWidths[i] = spans[i].getBoundingClientRect().width;
  }
})