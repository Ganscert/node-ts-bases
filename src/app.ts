const heroes=[
   {
      id:1,
      name: 'ironman',
      owner: 'marvel'
   },
   {
      id:2,
      name: 'spiderman',
      owner:'marvel'
   },
   {
      id:3,
      name:'batman',
      owner:'dc'
   }
]

const findheroe=(id:number)=>{
   return heroes.find(heroe => heroe.id===id)
}

const hero=findheroe(1)

console.log(hero?.name ?? 'no hero found')