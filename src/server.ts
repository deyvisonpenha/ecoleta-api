import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import './database/connection';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);