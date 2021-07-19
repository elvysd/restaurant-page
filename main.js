import _ from 'lodash';
import './style.css';
import Icon from './image1.jpg';

console.log("wqeqweqw");


 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = "Hello webpack";

  element.classList.add('hello');


  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);



   return element;
 }

 document.body.appendChild(component());