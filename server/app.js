//Require express 
import express from 'express';

import routes from './routes';

const app = express();

app.use('/api', routes)
//This is our app so we export our app
export default app