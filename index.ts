import {Quotes} from "./backend/quotes";
import express from 'express';
const app = express();

const port:number = 8080;

const server = new Quotes(app);
server.start(port);