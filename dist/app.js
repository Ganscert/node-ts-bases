"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: 'ironman',
        owner: 'marvel'
    },
    {
        id: 2,
        name: 'spiderman',
        owner: 'marvel'
    },
    {
        id: 3,
        name: 'batman',
        owner: 'dc'
    }
];
const findheroe = (id) => {
    return heroes.find(heroe => heroe.id === id);
};
const hero = findheroe(1);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'no hero found');
