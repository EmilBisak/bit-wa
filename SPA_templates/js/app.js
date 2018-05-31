import * as data from './data.js';
import * as ui from './ui.js';

const setMouseEventListeners = () => {
    const getCatButton = document.querySelector('.get-cat');
    getCatButton.addEventListener('click',goToCatHandler);
}


const setCatEventListeners = () => {
    const getMouseButton = document.querySelector('.get-mouse');
    getMouseButton.addEventListener('click',goToMouseHandler);
}

const goToCatHandler = () => {
    data.fetchCat()
    .then(cat => {
        ui.displayCat(cat);
        setCatEventListeners();
    })
}

const goToMouseHandler = () => {
    data.fetchMouse()
    .then(mouse => {
        ui.displayMouse(mouse);
        setMouseEventListeners();
    })
}

export const initHomepage = () => {
    data.fetchMouse()
    .then(mouse => {
        ui.displayMouse(mouse);
        setMouseEventListeners();
    })
};