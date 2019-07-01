//Require express 
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/reddit', () =>{
    console.log('connected to mongodb...');
});

const app = express();

//middleware 

//This is how we get our routes
app.use('/api', routes)
//This is our app so we export our app
export default app