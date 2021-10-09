
// let data = ["Week01", "Week02", "Week03"];

// let list = document.getElementById("myList");

// data.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerText = item;
//   list.appendChild(li);
// });
function createList(){

const links = [
    {label: "Week1 notes", url: "week1"},
    {label: "Week2 notes", url: "week2"},
    {label: "Week3 notes", url: "week3"},
    {label: "Week4 notes", url: "week4"},
    

]


let list = document.getElementById("myList");

for(let i=0; i< links.length; i++){
    let item = document.createElement('li');
    let a = document.createElement('a');

    var anchor = document.createTextNode(links[i].label);
    a.appendChild(anchor);
    a.href = links[i].url;
    item.appendChild(a);

    list.appendChild(item);
}

}
//document.querySelector('ol').appendChild(list);