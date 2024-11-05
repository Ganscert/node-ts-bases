import { findheroe } from "./services/heroes.service"




const hero=findheroe(1)

console.log(hero?.name ?? 'no hero found')