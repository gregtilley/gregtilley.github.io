const heading = document.getElementById("heading");
let text = heading.innerHTML;
const words = text.split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = '<span>' + words[i] + '</span>';
}
text = words.join(" ");
heading.innerHTML = text;




const spans = gsap.utils.toArray("#heading span");

for (let i = 0; i < spans.length; i++) {
  let spanWidth = spans[i].getBoundingClientRect().width;
  console.log(spanWidth);
  if (i % 2 == 0) {
    gsap.set(spans[i], { x: () => window.innerWidth + spanWidth})
    gsap.to(spans[i], { 
      x: () => -((window.innerWidth * 3) - spanWidth), 
      delay: 1, 
      duration: gsap.utils.random(7, 10),
      repeat: -1,
      // yoyo: true,
      ease: 'none'
    })
  } else {
    gsap.set(spans[i], { x: -spanWidth})
    gsap.to(spans[i], { 
      x: () => window.innerWidth + spanWidth, 
      delay: 1, 
      duration: gsap.utils.random(7, 10),
      repeat: -1,
      // yoyo: true,
      ease: 'none'
    })
  }
  
}
