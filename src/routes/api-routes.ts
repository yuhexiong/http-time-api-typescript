// routes/api-routes.ts
import  express, { Router, Request, Response, NextFunction } from 'express';
import { ApiControllers } from '../controllers/api-controllers';

const apiControllers = new ApiControllers;

export class ApiRouter {
  router: Router;
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/time', apiControllers.getTimePage);
    this.router.post('/time', apiControllers.postTimePage);
    this.router.put('/timezone', apiControllers.putTimezonePage);
    this.router.delete('/timezone', apiControllers.deleteTimezonePage)
  }
}