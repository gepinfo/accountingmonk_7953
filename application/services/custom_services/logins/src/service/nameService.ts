import { Request, Response } from 'express';
import {nameDao} from '../dao/nameDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let name = new nameDao();

export class nameService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpCreate')
     let  nameData = req.body;
     name.GpCreate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpGetNounCreatedBy')
     let  nameData = { created_by: req.query.createdby };
     name.GpGetNounCreatedBy(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}