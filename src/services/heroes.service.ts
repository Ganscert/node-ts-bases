import { heroes } from "../data/heroes"



export const findheroe=(id:number)=>{
   return heroes.find(heroe => heroe.id===id)
}
