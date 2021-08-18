localStorage.setItem("tags", JSON.stringify(["tag1", "tag2", "tag3"]));
let list = document.getElementById("tagsList");

let input = document.querySelector("input");
let button = document.querySelector("button");

function addTag() {
  let val = input.value.trim();
  if (!val) return;

  console.log(`adding ${val} to storage...`);
  let st = JSON.parse(localStorage.getItem("tags"));
  st.push(val);
  localStorage.setItem("tags", JSON.stringify(st));
  reloadPage();
}

window.onload = reloadPage();

function reloadPage() {
  list.innerHTML = null;
  JSON.parse(localStorage.getItem("tags")).forEach((item) => {
    let cross = document.createElement("i");
    cross.innerHTML = "";
    cross.onclick = function () {
      removeItem(item);
    };
    let li = document.createElement("li");
    li.innerText = item;
    li.appendChild(cross);
    list.appendChild(li);
  });
  input.value = null;
}

function removeItem(value) {
  console.log(`removing ${value} from storage`);
  let st = JSON.parse(localStorage.getItem("tags"));
  st.splice(st.indexOf(value), 1);
  localStorage.setItem("tags", JSON.stringify(st));
  reloadPage();
}

function termsChanged(termsCheckBox) {
  if (termsCheckBox.checked) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}
