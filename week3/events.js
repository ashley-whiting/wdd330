function doSomething(){
    console.log('Something Happened!');
}

//this will call the callback function:
function doSomething(event){
    console.log(event.type);
}

//adding an EVENT TARGET will tell us which node was clicked on:
function doSomething(event){
    console.log(event.target);
}

//Finding the Coordinates
//this will tell us 'where' on the screen the event happened:
function doSomething(event){
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

//if we remove everything above with this:
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );
//we will see all three events fire in order:
//mousedown
//mouseup
//click

//dbclick event will occur when the user doubleclicks:
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
function highlight(event){
    event.target.classList.toggle('highlight');
}

//the mouseover event occurs whent he mouse ponter is placed over the element:
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
//the mousemove event occurs whenever the mouse moves over the applied element:
mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

//Removing Event Listeners
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

//Stopping Default Behavior
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

// capturing
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
// bubbling
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );

//Stopping the Bubbling Phase
liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation(); }, false);




addEventListener('click', doSomething);