export const createMouse = (mouse) => {
    return `
    <img src="${mouse.url}" class="mouse-img">
    <button class="get-cat">Get Cat</button>
    `
}

export const createCat = (cat) => {
    return `
    <img src="${cat.url}" class="cat-img">
    <button class="get-mouse">Get Mouse</button>
    `
}