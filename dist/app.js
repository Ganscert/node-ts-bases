"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_service_1 = require("./services/heroes.service");
const hero = (0, heroes_service_1.findheroe)(1);
console.log(hero?.name ?? 'no hero found');
