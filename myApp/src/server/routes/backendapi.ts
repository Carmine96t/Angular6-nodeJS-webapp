import * as express from 'express';

export class BackendApi {
  public test(req: express.Request, res: express.Response) {
    res.json('Hello World');
    // Catch all other routes and return the index file 

  }



}