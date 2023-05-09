const borderClass = "border-fuscia";
const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const searchContainer = document.getElementById("search-container");
const searchInput = searchContainer?.querySelector("input");
const searchButton = searchContainer?.querySelector("button");

const addBorder = () => searchContainer?.classList.add(borderClass);
const removeBorder = () => searchContainer?.classList.remove(borderClass);

const handleFocusIn = () => {
  searchContainer?.removeEventListener("mouseover", addBorder);
  searchContainer?.removeEventListener("mouseout", removeBorder);
  addBorder();
};

const handleFocusOut = () => {
  searchContainer?.addEventListener("mouseover", addBorder);
  searchContainer?.addEventListener("mouseout", removeBorder);
  removeBorder();
};

searchContainer?.addEventListener("mouseover", addBorder);
searchContainer?.addEventListener("mouseout", removeBorder);

searchContainer?.addEventListener("focusin", handleFocusIn);
searchContainer?.addEventListener("focusout", handleFocusOut);

searchContainer?.addEventListener("click", () => searchInput?.focus());

const doSearch = () => {
  if (!searchInput?.value) {
    console.error("no input");
    return;
  }

  fetch(`${baseURL}${searchInput?.value}`)
    .then(res => {
      if (res.status === 404) {
        console.error("404 not found");
      }
      return res.json();
    })
    .then(data => console.log(data));
};

searchInput?.addEventListener("keypress", e => {
  if (e.key == "Enter") {
    doSearch();
  }
});
searchButton?.addEventListener("click", doSearch);
