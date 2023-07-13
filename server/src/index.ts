import express from 'express'
import dotenv from 'dotenv'
import { createServer } from 'http';

dotenv.config()

import './core/connectDB';
import createRoutes from './core/routes';
import createSocket from './core/socket';

const app = express()
const server = createServer(app);
const io = createSocket(server);

createRoutes(app, io);

server.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`)
})