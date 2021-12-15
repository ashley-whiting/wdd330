document.addEventListener("DOMContentLoaded", main);

function main() {
 addEntry();
  // user input
  const add = document.getElementById("add-btn");
  const txtInput = document.querySelector('.txt-input');

  const titleInput = document.querySelector('.title-input');
  let date = new Date();
  let n = date.toDateString();
  let time = date.toLocaleTimeString();

 

 
  add.addEventListener("click", function () {
    const item = titleInput.value +  "\n" + txtInput.value + "\n" + n + "  " + time;
  
    if (item){
      const entries = !localStorage.getItem("entries") ? [] : JSON.parse(localStorage.getItem("entries"));
      const currentEntry = { item, isCompleted: false, };
   
      addEntry([currentEntry]);
      //push new entries to array
      entries.push(currentEntry);
      localStorage.setItem("entries", JSON.stringify(entries));
    }


  });
  // add new item using ENTER key
  txtInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      add.click();
    }
  });
  
  
}

//get entries from localStorage, use splice to delete one Entry, setting newlocalSotrage
function removeEntry(index) {
  const entries = JSON.parse(localStorage.getItem("entries"));
  entries.splice(index, 1);
  localStorage.setItem("entries", JSON.stringify(entries));
}


//allows users to create new list items
function addEntry(entries = JSON.parse(localStorage.getItem("entries"))) {
  if (!entries) {
    return null;
  }

 
 
  entries.forEach(function (Entry) {
    //create html elements
    const card = document.createElement("li");
    const cbContainer = document.createElement("div");
    const entryTitle = document.createElement('h3');
    const cbInput = document.createElement("textarea");
    const date = document.createElement("span");
    const item = document.createElement("p");
    const button = document.createElement("button");
    const img = document.createElement("img");
   

    // classes
    card.classList.add("card");
    button.classList.add("delete");
    cbContainer.classList.add("cb-container");
    entryTitle.className = 'title';
    cbInput.classList.add("cb-input");
    item.classList.add("item");
    date.classList.add("date");
    button.classList.add("delete");

    img.setAttribute("src", "images/cross.svg");
    img.setAttribute("alt", "Delete");
    // cbInput.setAttribute("type", "checkbox");
    item.textContent = Entry.item;
    
  

      // Add click listener to delete button
      button.addEventListener("click", function () {
        const correspondingCard = this.parentElement;
        //animation class
        correspondingCard.classList.add("swipe");
        //remove Entry from localoStorage
        removeEntry(
          [...document.querySelectorAll(".entries .card")].indexOf(
            correspondingCard
          )
        );
        correspondingCard.addEventListener("animationend", function () {
          setTimeout(function () {
            correspondingCard.remove();
            itemsLeft.textContent = document.querySelectorAll(
              ".entries "
            ).length;
          }, 100);
        });
    });

    
    
//append children
    button.appendChild(img);
    cbContainer.appendChild(entryTitle);
    cbContainer.appendChild(cbInput);
    cbContainer.appendChild(date);
    card.appendChild(cbContainer);
    card.appendChild(item);
    card.appendChild(button);
    document.querySelector(".entries").appendChild(card);
  });
 
}



