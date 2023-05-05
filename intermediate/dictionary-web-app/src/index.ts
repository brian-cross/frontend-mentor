import { gsap } from "gsap";

let fontListHidden = true;

const currentFont = document.getElementById("current-font");
const fontList = document.getElementById("font-list");
const fontListArrow = document.getElementById("font-list-arrow");
const fontListOptions = document.querySelectorAll("#font-list li");
const fontClasses = ["font-sans", "font-serif", "font-mono"];

gsap.set(fontList, { autoAlpha: 0 });

const handleFontListDropdown = e => {
  console.log(e.target);
  if (fontListHidden) {
    gsap.set(fontListOptions, { autoAlpha: 0, xPercent: 75 });
    gsap.to(fontList, { autoAlpha: 1, duration: 0.3 });
    gsap.to(fontListOptions, {
      autoAlpha: 1,
      ease: "power2.in",
      duration: 0.8,
      stagger: { each: 0.1 },
    });
    gsap.to(fontListOptions, {
      xPercent: 0,
      ease: "power2.out",
      duration: 0.9,
      stagger: { each: 0.1 },
    });
    fontListHidden = false;
  } else {
    gsap.to(fontList, { autoAlpha: 0, duration: 0.5 });
    fontListHidden = true;
  }
};

const changeFont = e => {
  const root = document.documentElement;
  const font = e.target.dataset.fontOption;

  fontClasses.forEach(className => root.classList.remove(className));
  root.classList.add(font);

  if (currentFont) currentFont.textContent = e.target.textContent;
};

[currentFont, fontListArrow, ...fontListOptions].forEach(node => {
  if (node !== null) node.addEventListener("click", handleFontListDropdown);
});

fontListOptions.forEach(node => node.addEventListener("click", changeFont));
