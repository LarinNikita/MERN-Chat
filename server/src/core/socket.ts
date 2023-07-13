import http from 'http';
import { Server, Socket } from 'socket.io';

export default (server: http.Server) => {
    const io = new Server(server, { cors: { origin: '*' } });
    io.on('connection', function (socket: Socket) {

    });

    return io;
}
