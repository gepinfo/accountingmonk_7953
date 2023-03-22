import { Request, Response } from 'express';
import { nameService } from '../service/nameService';
import { CustomLogger } from '../config/Logger'
let name = new nameService();

export class nameController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpGetNounCreatedBy');
    })}


}