"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findheroe = void 0;
const heroes_1 = require("../data/heroes");
const findheroe = (id) => {
    return heroes_1.heroes.find(heroe => heroe.id === id);
};
exports.findheroe = findheroe;
