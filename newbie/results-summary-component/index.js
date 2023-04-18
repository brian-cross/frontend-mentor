const getData = async () => {
  const res = await fetch("./data.json");
  return await res.json();
};

const updateDOM = data => {
  const icons = document.querySelectorAll(".summary-category-image");
  const categories = document.querySelectorAll(".summary-category-title");
  const scores = document.querySelectorAll(".summary-category-score");

  icons.forEach((node, i) => {
    const img = document.createElement("img");
    img.setAttribute("src", data[i].icon);
    img.setAttribute("alt", "");
    node.appendChild(img);
  });

  categories.forEach((node, i) => {
    node.textContent = data[i].category;
  });

  scores.forEach((node, i) => {
    const firstSpan = document.createElement("span");
    const secondSpan = document.createElement("span");

    firstSpan.textContent = data[i].score;
    secondSpan.textContent = " / 100";

    node.appendChild(firstSpan);
    node.appendChild(secondSpan);
  });
};

getData().then(updateDOM);
