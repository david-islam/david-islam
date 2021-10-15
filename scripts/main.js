let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let heading = "Hiking in Cypress Provincial Park";

myImage.onclick = function() {
 let mySrc = myImage.getAttribute('src');
 if (mySrc === 'images/mountain-trail.jpeg') {
  myImage.setAttribute('src', 'images/bowen-lookout.jpeg');
 } else {
  myImage.setAttribute('src', 'images/mountain-trail.jpeg');
 }
}

function setUserName() {
 let myName = prompt('Please enter your name.');
 if (!myName || myName === '') {
  setUserName();
 } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = heading + ' with ' + myName;
 }
}

myButton.onclick = function() {
 setUserName();
}

if (!localStorage.getItem('name')) {
 setUserName();
} else {
 let storedName = localStorage.getItem('name');
 myHeading.textContent = heading + ' with ' + storedName;
}