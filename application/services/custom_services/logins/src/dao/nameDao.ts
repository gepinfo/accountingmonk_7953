import * as mongoose from 'mongoose';
import nameModel from '../models/daomodels/name';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class nameDao {
    private name = nameModel;
    constructor() { }
    
    public async GpCreate(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpCreate');

    let temp = new nameModel(nameData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.name.aggregate(([
                        { $match: { $and: [{ created_by: nameData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}