import { buildLogger } from "./plugins/index.js";

// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')


const logger =buildLogger('app.js')

logger.log('ocurrido en app.js')






// getPokemonById(4)
//   .then( ( pokemon ) => console.log({ pokemon }) )
//   .catch( ( err ) => console.error( err ) )
//   .finally( () => console.log('Finalmente') );



// token de acceso
// Publicas


// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = makePerson( obj );

// console.log({ john });

