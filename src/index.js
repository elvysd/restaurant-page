import _ from 'lodash';
import './style.css';
import Icon from './image.jpg';
import Image1 from './image1.jpg';
import Image2 from './image2.jpg';
function component() {
    const element = document.createElement('div');
    element.classList.add('images');
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}
function addAbout() {
    const element = document.createElement('h3');
    element.classList.add('aboutHead');
    element.setAttribute("id", "about");
    element.innerHTML = "ABOUT US";
    return element;
}
function addAboutInfo() {
    const element = document.createElement('p');
    element.classList.add('aboutInfo');
    element.innerHTML = "Welcome to Quarterslice, your number one source for all things pizza. We're dedicated to providing you the very best of pizza, with an emphasis on fresh ingridients, perfectly cooked meals and, an all-around family friendly service. <br/> <br/> Founded in 2021, Quarterslice has come a long way from its beginnings in Oakland, California now with over 100 resturants nationwide! <br/> <br/> We hope you enjoy our prodcuts as much as we enjoy offering them to you. If you have any questions or comments, please don't heitate to contact us.";
    return element;
}
function component2() {
    const element2 = document.createElement('div');
    element2.classList.add('images');
    const myImage1 = new Image();
    myImage1.src = Image1;
    element2.appendChild(myImage1);
    return element2;
}
  function addMenu() {
    const element = document.createElement('h3');
    element.classList.add('menuHead');
    element.innerHTML = "MENU";
    element.setAttribute("id", "menu");
    return element;
}
function addMenuInfo() {
    const element = document.createElement('p');
    element.classList.add('menuInfo');
    element.innerHTML = "Pizza slice of the day <br/> <br/> $5";
    return element;
}
function component3() {
    const element = document.createElement('div');
    element.classList.add('images');
    const myImage2 = new Image();
    myImage2.src = Image2;
    element.appendChild(myImage2);
    return element;
}
function addContact() {
    const element = document.createElement('h3');
    element.classList.add('contactHead');
    element.setAttribute("id", "contact");
    element.innerHTML = "CONTACT US";
    return element;
}
function addContactInfo() {
    const element = document.createElement('p');
    element.classList.add('contactInfo');
    element.innerHTML = "Quarterslice Pizza <br/> <br/> 329805 Pizza Lane, Oakland, California 94612 <br/> <br/> (510) 123-4567";
    return element;
}
  
  document.body.appendChild(component());
  document.body.appendChild(addAbout());
  document.body.appendChild(addAboutInfo());
  document.body.appendChild(component2());
  document.body.appendChild(addMenu());
  document.body.appendChild(addMenuInfo());
  document.body.appendChild(component3());
  document.body.appendChild(addContact());
  document.body.appendChild(addContactInfo());