import { Injectable, signal } from '@angular/core'
import { Socket, io } from 'socket.io-client'

@Injectable({
	providedIn: 'root'
})
export class SocketService {
	#socketClient?: Socket

	msg = signal<any[]>([])

	constructor() {}

	connect() {
		this.#socketClient = io('http://localhost:3333')

		this.#socketClient.on('connect', () => {
			console.log(`connected ${this.#socketClient?.id}`)
		})

		this.addListener()
	}

	addListener() {
		if (this.#socketClient) {
			this.#socketClient.on('onMessage', (msg: any) => {
				console.log(msg)
				msg.id = msg.id === this.#socketClient?.id ? 'You' : msg.id
				this.msg.mutate(list => list.push(msg))
			})
		}
	}

	sendMessage(msg: string) {
		if (this.#socketClient) {
			const data = {
				msg: msg,
				id: this.#socketClient.id
			}
			this.#socketClient.emit('events', data)
		} else {
			this.connect()
		}
	}
}
