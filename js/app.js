const select = document.querySelector("select");
select.addEventListener("change", changeURLLanguage);
const lengAll = ["en", "ru"];

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash.substring(1);

  if (!lengAll.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }

  select.value = hash;

  for (let key in language) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = language[key][hash];
    }
  }
}

changeLanguage();
