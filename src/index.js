import _ from 'lodash';
import './style.css';
import Icon from './image.jpg';
import Image1 from './image1.jpg';
function component() {
    return;
}

function component2() {
    const element2 = document.createElement('div');
    element2.classList.add('images');

    const myIcon = new Image();
    myIcon.src = Icon;
    element2.appendChild(myIcon);

    const myImage1 = new Image();
    myImage1.src = Image1;
    element2.appendChild(myImage1);
    return element2;
  }
  
  component();
  document.body.appendChild(component2());