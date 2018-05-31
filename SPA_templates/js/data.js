import Cat from './entities/Cat.js';
import Mouse from './entities/Mouse.js';
const mice = [
    "https://i.ebayimg.com/images/g/lUUAAOSwopRYiRFo/s-l300.jpg",
    "https://i.ebayimg.com/images/g/LIQAAOSw8GtZO~pk/s-l300.jpg",
    "https://i.ebayimg.com/images/g/LIQAAOSw8GtZO~pk/s-l300.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ874hgmsvUrBjqtHw9wSx-kCaiY4qOTAYB_ro-yAiJQZdbIyo6g",
    "https://www.dyslexic.com/wp-content/uploads/2016/05/Bierley_Colour_Mouse_300_04164.1407153079.1280.1280__20649.png",
    "https://i1.wp.com/www.olistars.com/inc/uploads/2018/04/havit-mouse-11.jpg?resize=300%2C300&ssl=1",
    "https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/JBPATTMSE3_.jpg/resize?size=300&auth=MjA5OTcwODkwMg__",
    "http://iameco.com/wp-content/uploads/2013/09/iameco_ash_mice_2.png",
    "http://www.squishable.com/user_gallery/opensquish_mouse_18648/360s/opensquish_mouse_18648_side.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/21Qydsl8IQL.jpg"
];
const cats = [
    "http://r.ddmcdn.com/s_f/o_1/cx_0/cy_0/cw_300/ch_300/w_300/APL/uploads/2014/10/kitten-cuteness300.jpg",
    "https://www.northeastanimalshelter.org/wp-content/uploads/2018/03/Joy.115497.2-300x300.jpg",
    "https://pbs.twimg.com/profile_images/602729491916435458/hSu0UjMC_400x400.jpg",
    "https://www.cat-world.com.au/wp-content/uploads/2018/02/tuxedo2-300x300.jpg",
    "https://i1.wp.com/persiancatcenter.com/wp-content/uploads/2-cat-rub-1024x1024.jpg?resize=300%2C300",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcR8urRg0YatHoge6UUjfSpBdja7nbsHnktGqeECzdXNpEGZi",
    "https://www.cat-world.com.au/wp-content/uploads/2018/02/blue3-300x300.jpg",
    "https://www.petplace.com/wp-content/uploads/2018/03/AdobeStock_81993293-300x300.jpeg",
    "http://img4.zergnet.com/2708027_300.jpg",
    "http://www.readersdigest.ca/wp-content/uploads/2016/05/3-kittens.jpg"
]
export const fetchMouse = () => {
    const rand = Math.floor(Math.random()*10);
    const url = mice[rand];
    const mouse = new Mouse(url);
    return new Promise((resolve, reject) => {
        resolve(mouse);
    })
}
export const fetchCat = () => {
    const rand = Math.floor(Math.random()*10);
    const url = cats[rand];
    const cat = new Cat(url);
    return new Promise((resolve, reject) => {
        resolve(cat);
    })
}

