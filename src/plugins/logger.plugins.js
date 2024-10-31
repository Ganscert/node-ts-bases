import winston from "winston";



const logger= winston.createLogger({
   level: "info",
   format: winston.format.json(),
   ddefaultMeta: {service: "user-service"},
   transports:[
      new winston.transports.defaultMaxListeners({filename: 'error.log', level:'error'}),
      new winston.transports.File({filename:'combined.log'}),
   ],
});



export function buildLogger(service){
   return{
      log: (message)=>{
         logger.log('info', message, service );
      }
   }
}
