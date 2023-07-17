import { OnModuleInit } from '@nestjs/common'
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'
@WebSocketGateway({
	cors: {
		origin: 'http://localhost:4200'
	}
})
export class EventsGateway implements OnModuleInit {
	@WebSocketServer()
	server: Server

	onModuleInit() {
		this.server.on('connection', (socket) => {
			console.log(`${socket.id} connected`)
		})
	}

	@SubscribeMessage('events')
	handleEvent(@MessageBody() data: any) {
		this.server.emit('onMessage', data)
		console.log(data)
	}
}
