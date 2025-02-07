import express from 'express';
// const express = require ('express');
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

//all routes in here are starting with  /users 
app.use('/users', userRoutes);

app.get('/', (req,res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
