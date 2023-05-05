import { gsap } from "gsap";

const currentFont = document.getElementById("current-font");
const fontList = document.getElementById("font-list");
const fontListArrow = document.getElementById("font-list-arrow");
const fontListOptions = document.querySelectorAll("#font-list li");

let fontListHidden = true;

const defaultFont = "font-sans";

const fonts = {
  "font-sans": "Sans Serif",
  "font-serif": "Serif",
  "font-mono": "Mono",
};

gsap.set(fontList, { autoAlpha: 0 });

const handleFontListDropdown = e => {
  console.log(e.target);
  if (fontListHidden) {
    gsap.set(fontListOptions, { autoAlpha: 0, yPercent: -100 });
    gsap.to(fontList, { autoAlpha: 1, duration: 0.3 });
    gsap.to(fontListOptions, {
      autoAlpha: 1,
      ease: "power2.in",
      duration: 0.5,
      stagger: { each: 0.1 },
    });
    gsap.to(fontListOptions, {
      yPercent: 0,
      ease: "power2.out",
      duration: 0.7,
      stagger: { each: 0.1 },
    });
    fontListHidden = false;
  } else {
    gsap.to(fontList, { autoAlpha: 0, duration: 0.3 });
    fontListHidden = true;
  }
};

const handleFontSelection = e => {
  const { fontOption } = e.target.dataset;
  setFont(fontOption);
};

const setFont = (fontClassName: string) => {
  const root = document.documentElement;
  Object.keys(fonts).forEach(className => root.classList.remove(className));
  root.classList.add(fontClassName);
  if (currentFont) currentFont.textContent = fonts[fontClassName];
  localStorage.setItem("font", fontClassName);
};

export const init = () => {
  const savedFont = localStorage.getItem("font");

  if (!savedFont) {
    setFont(defaultFont);
  } else {
    setFont(savedFont);
  }

  [currentFont, fontListArrow, ...fontListOptions].forEach(node => {
    if (node !== null) node.addEventListener("click", handleFontListDropdown);
  });

  fontListOptions.forEach(node =>
    node.addEventListener("click", handleFontSelection)
  );
};
