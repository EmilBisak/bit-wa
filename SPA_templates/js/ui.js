import {createMouse,createCat} from './templates.js';
const container = document.querySelector('.container');

export const displayMouse = mouse => {
    container.innerHTML = "";
    const mouseHTML = createMouse(mouse);
    const mouseElement = document.createElement('div');
    mouseElement.classList.add('mouse');
    mouseElement.innerHTML = mouseHTML;
    container.appendChild(mouseElement);
}
export const displayCat = cat => {
    container.innerHTML = "";
    const catHTML = createCat(cat);
    const catElement = document.createElement('div');
    catElement.classList.add('cat');
    catElement.innerHTML = catHTML;
    container.appendChild(catElement);
}