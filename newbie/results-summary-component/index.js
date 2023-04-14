const getData = async () => {
  const res = await fetch("./data.json");
  return await res.json();
};

getData().then(console.log);

const summaryCategories = document.querySelectorAll(".summary-category");

console.log(summaryCategories);
