document.addEventListener("DOMContentLoaded", main);

function main() {
 addTodo();
  // user input
  const add = document.getElementById("add-btn");
  const txtInput = document.querySelector(".txt-input");
  add.addEventListener("click", function () {
    const item = txtInput.value.trim();
    if (item) {
      txtInput.value = "";
      const todos = !localStorage.getItem("todos") ? [] : JSON.parse(localStorage.getItem("todos"));
      const currentTodo = { item, isCompleted: false, };
      addTodo([currentTodo]);
      //push new todos to array
      todos.push(currentTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    
  });
  // add new item using ENTER key
  txtInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      add.click();
    }
  });
  // filtering items (all, active, complete)
  document.querySelector(".filter").addEventListener("click", function (e) {
    const id = e.target.id;
    if (id) {
      document.querySelector(".on").classList.remove("on");
      document.getElementById(id).classList.add("on");
      document.querySelector(".todos").className = `todos ${id}`;
    }
  });
  
}

//get todos from locatStorage, use splice to delete one todo, setting newloclSotrage
function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//gett todos from local storage, update isCompleted, set todos back to local storage
function stateTodo(index, completed) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  todos[index].isCompleted = completed;
  localStorage.setItem("todos", JSON.stringify(todos));
}


//allows users to create new list items
function addTodo(todos = JSON.parse(localStorage.getItem("todos"))) {
  if (!todos) {
    return null;
  }
  //how many active items left
  const itemsLeft = document.getElementById("items-left");
 
  //for each todo:
  todos.forEach(function (todo) {
    //create html elements
    const card = document.createElement("li");
    const cbContainer = document.createElement("div");
    const cbInput = document.createElement("input");
    const check = document.createElement("span");
    const item = document.createElement("p");
    const button = document.createElement("button");
    const img = document.createElement("img");
   

    // classes
    card.classList.add("card");
    button.classList.add("delete");
    cbContainer.classList.add("cb-container");
    cbInput.classList.add("cb-input");
    item.classList.add("item");
    check.classList.add("check");
    button.classList.add("delete");

    //  attributes
    img.setAttribute("src", "images/cross.svg");
    img.setAttribute("alt", "Delete");
    cbInput.setAttribute("type", "checkbox");

    // new todo item
    item.textContent = todo.item;
    // if completed:
    if (todo.isCompleted) {
      card.classList.add("checked");
      cbInput.setAttribute("checked", "checked");
    }
   
    //checkbox click listener
    cbInput.addEventListener("click", function () {
      const correspondingCard = this.parentElement.parentElement;
      const checked = this.checked;
      //todos in localstorage
      stateTodo(
        [...document.querySelectorAll(".todos .card")].indexOf(
          correspondingCard
        ),
        checked
      );
      //updated class
      checked ? correspondingCard.classList.add("checked") : correspondingCard.classList.remove("checked");
        //update itemsLeft
      itemsLeft.textContent = document.querySelectorAll(
        ".todos .card:not(.checked)"
      ).length;
    });
    // Add click listener to delete button
    button.addEventListener("click", function () {
      const correspondingCard = this.parentElement;
      //animation class
      correspondingCard.classList.add("swipe");
      //remove todo from localoStorage
      removeTodo(
        [...document.querySelectorAll(".todos .card")].indexOf(
          correspondingCard
        )
      );
      //update itemsLeft
      correspondingCard.addEventListener("animationend", function () {
        setTimeout(function () {
          correspondingCard.remove();
          itemsLeft.textContent = document.querySelectorAll(
            ".todos .card:not(.checked)"
          ).length;
        }, 100);
      });
    });
    
//append children
    button.appendChild(img);
    cbContainer.appendChild(cbInput);
    cbContainer.appendChild(check);
    card.appendChild(cbContainer);
    card.appendChild(item);
    card.appendChild(button);
    document.querySelector(".todos").appendChild(card);
  });
  //update itemsLeft on start
  itemsLeft.textContent = document.querySelectorAll(
    ".todos .card:not(.checked)"
  ).length;
}

