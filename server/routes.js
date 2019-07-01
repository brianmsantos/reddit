import express from 'express';

//Controller Imports
import basicController from './controllers/basicController';
import userController from './controllers/userController';

const routes = express();

//Basic routes
routes.get('/', basicController.get) 

//User routes
routes.post('/signup', userController.post);

export default routes;