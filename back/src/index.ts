import 'reflect-metadata';
import express from 'express';
import * as http from 'http';
import * as path from 'path';
import cors from 'cors';
import { connect } from 'mongoose';
// import { useContainer, useExpressServer } from 'routing-controllers';
// import { Container } from 'typedi';
// useContainer(Container);

declare const process: any;

const app = express();
const server = http.createServer(app);

connect('mongodb://localhost/new-start');

app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

const port = process.env.PORT || 3033;
server.listen(port, () => console.log(`Logging on port ${port}`));