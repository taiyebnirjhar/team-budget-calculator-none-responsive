/**************************/

// log
function log(input) {
  console.log(input);
}
/**************************/

// get elements
let selectPlayers = document.querySelectorAll(".select");
let unselectPlayers = document.querySelectorAll(".unselect");
let listParent = document.querySelector("ol");
let blogTitle = document.querySelector(".blog-title");
let perPlayer = document.querySelector("#perPlayer");
let onCalculate = document.querySelector("#onCalculate");
let playerExpenses = document.querySelector("#playerExpenses");
let manager = document.querySelector("#manager");
let coach = document.querySelector("#coach");
let total = document.querySelector("#total");
let amount = document.querySelector("#amount");

/**************************/
// add values
perPlayer.value = 0;
manager.value = 0;
coach.value = 0;

/**************************/
// functions and checkings

/****/
function select(e) {
  /*DELECT PLACE HOLDER*/
  if (listParent.children[0].innerText === "Nothing Selected") {
    listParent.children[0].remove();
  }
  //append && checking
  if (listParent.childElementCount < 5) {
    /***/
    let element = e.target;
    let sibling = e.target.nextElementSibling;
    let parent = e.target.parentElement;
    element.setAttribute("disabled", true);
    sibling.removeAttribute("disabled");
    /***/
    element.style.backgroundColor = "white";
    element.style.border = "black";
    element.style.color = "grey";
    /***/
    sibling.style.backgroundColor = "#002b5b";
    sibling.style.border = "1px solid #002b5b";
    sibling.style.color = "rgba(245, 245, 245, 0.936)";
    /***/
    let selected = parent.childNodes[1].innerText;
    // create element
    let li = document.createElement("li");
    li.innerText = selected;
    listParent.appendChild(li);
  } else {
    alert(`you've already selected 5 players `);
  }
}
function unselect(e) {
  let element = e.target;
  let sibling = e.target.previousElementSibling;
  let parent = e.target.parentElement;

  element.setAttribute("disabled", true);
  sibling.removeAttribute("disabled");
  /***/
  element.style.backgroundColor = "white";
  element.style.border = "black";
  element.style.color = "grey";
  /***/
  sibling.style.backgroundColor = "#002b5b";
  sibling.style.border = "1px solid #002b5b";
  sibling.style.color = " rgba(245, 245, 245, 0.936)";
  /***/
  let unselected = parent.childNodes[1].innerText;
  for (let item of listParent.children) {
    if (item.innerText === unselected) {
      item.remove();
    }
  }
  if (listParent.children[0] === undefined) {
    let defaulLi = document.createElement("li");
    defaulLi.innerText = "Nothing Selected";
    listParent.appendChild(defaulLi);
  }
}
/****/
function emptyValue() {
  if (listParent.children[0].innerText === "Nothing Selected") {
    alert("please select some players ");
  }
}
function budgetForEachPlayer(e) {
  /**Checking For Empty value**/
  let totalPlayerExpenses = playerExpenses.innerText;
  totalPlayerExpenses =
    Math.round(perPlayer.value) * listParent.childElementCount;
  //add value
  playerExpenses.innerText = totalPlayerExpenses;
}
function totalExpense() {
  let total =
    parseInt(playerExpenses.innerText) +
    parseInt(manager.value) +
    parseInt(coach.value);
  //
  if (perPlayer.value === "" || manager.value === "" || coach.value === "") {
    if (perPlayer.value === "") {
      perPlayer.value = 0;
    } else if (manager.value === "") {
      manager.value = 0;
    } else if (coach.value === "") {
      coach.value = 0;
    }
    amount.innerText =
      parseInt(playerExpenses.innerText) +
      parseInt(manager.value) +
      parseInt(coach.value);

    log(amount.innerText);
  } else {
    amount.innerText = total;
  }
}

/**************************/

// loops & event listner
for (let player of selectPlayers) {
  player.addEventListener("click", function (e) {
    select(e);
  });
}
for (let player of unselectPlayers) {
  player.addEventListener("click", function (e) {
    unselect(e);
  });
}

perPlayer.addEventListener("click", function () {
  emptyValue();
});
onCalculate.addEventListener("click", function (e) {
  emptyValue();
  budgetForEachPlayer(e);
});

manager.addEventListener("click", function () {
  emptyValue();
});
coach.addEventListener("click", function () {
  emptyValue();
});
total.addEventListener("click", function () {
  emptyValue();
  totalExpense();
});
