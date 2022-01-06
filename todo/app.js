"use strict";

// 1.extract dom elements
let inputItem = document.querySelector(".form-control");
let submitBtn = document.querySelector(".btn-submit");
let inputBar = document.querySelector(".input-group");
let clearBtn = document.querySelector(".btn-clear");
let editFlag = false;
let changeId = null;
let storedIds = [];

// 2. Generating HTML
const itemStr = (value, numID) => {
  return `<div class='item' id=${numID}>
<p>${value}</p>
<div>
<button type="button" class="btn btn-outline-light btn-item">
<i class="bi bi-pencil-square"></i>
</button>
<button type="button" class="btn btn-outline-light btn-item ">
 <i class="bi bi-trash-fill"></i>
</button>
</div>
</div>`;
};

let alertStr = `<div class='alert-msg'><p>Please enter a valid value! </p></div>`;

// 3.helper functions
const addItem = (value) => {
  let num = new Date();
  let numID = num.getTime();
  inputBar.insertAdjacentHTML("afterend", itemStr(value, numID));
  addToLocalStorage(numID, itemStr(value, numID));
  storedIds.push(numID);
  addToLocalStorage("list", JSON.stringify(storedIds));
};

const blankItem = () => {
  inputBar.insertAdjacentHTML("beforebegin", alertStr);
  setTimeout(() => {
    let alertMsg = document.querySelector(".alert-msg");
    alertMsg.remove();
  }, 1000);
};

const editItem = (value, id) => {
  let editElement = document.getElementById(id);
  console.log(`editing : ${editElement.outerHTML}`);
  editElement.getElementsByTagName("P")[0].innerHTML = value;
  let editStr = itemStr(value, id);
  addToLocalStorage(id, editStr);
};

const renderStorage = () => {
  let storedItems = JSON.parse(localStorage.getItem("list"));
  // console.log(storedItems);
  if (storedItems) {
    storedItems.forEach((item) => {
      // console.log(item);
      let renderId = item;
      let renderItem = localStorage.getItem(String(renderId));
      inputBar.insertAdjacentHTML("afterend", renderItem);
      clearBtn.classList.remove("hide");
    });
  }
};

const repopulateList = () => {
  let savedList = JSON.parse(localStorage.getItem("list"));
  if (savedList) {
    savedList.forEach((item) => {
      storedIds.push(item);
    });
  }
};

// 4.event handlers
window.addEventListener("load", () => {
  clearBtn.classList.add("hide");
  repopulateList();
  renderStorage();
  console.log("page loaded");
});

// submit-edit btn
submitBtn.addEventListener("click", () => {
  let newItem = inputItem.value;
  if (editFlag === false) {
    if (newItem === "") {
      blankItem();
    } else {
      addItem(newItem);
      inputItem.value = "";
      clearBtn.classList.remove("hide");
    }
  } else {
    console.log(`${changeId} from the edit branch`);
    editItem(newItem, changeId);
    inputItem.value = "";
    editFlag = false;
    submitBtn.textContent = "Submit";
    inputItem.classList.remove("highlight");
  }
});

// clear btn
clearBtn.addEventListener("click", () => {
  let listItems = document.querySelectorAll(".item");
  listItems.forEach((item) => {
    item.classList.add("hide");
  });
  clearBtn.classList.add("hide");
  localStorage.clear();
  storedIds = [];
});

// delete btn
document.addEventListener("click", (e) => {
  let element = e.target;
  let elementItem = element.parentNode.parentNode.parentNode;
  let elementItemId = elementItem.id;
  if (element.classList.contains("bi-trash-fill")) {
    elementItem.remove();
    removeFromLocalStorage(elementItemId);
    const indexOfId = storedIds.indexOf(Number(elementItemId));
    if (indexOfId > -1) {
      storedIds.splice(indexOfId, 1);
    }
    addToLocalStorage("list", JSON.stringify(storedIds));
    if (!document.querySelector(".item")) {
      clearBtn.classList.add("hide");
    }
  }
});

// edit btn
document.addEventListener("click", (e) => {
  let element = e.target;
  if (element.classList.contains("bi-pencil-square")) {
    editFlag = true;
    submitBtn.textContent = "Edit";
    let elementItem = element.parentNode.parentNode.parentNode;
    let editContent = elementItem.getElementsByTagName("P")[0].innerHTML;
    inputItem.value = editContent;
    inputItem.classList.add("highlight");
    changeId = elementItem.id;
  }
});

// 5.using local storage
const addToLocalStorage = (id, value) => {
  localStorage.setItem(id, value);
};
const removeFromLocalStorage = (id) => {
  localStorage.removeItem(id);
};

// rendering the saved data on page load
