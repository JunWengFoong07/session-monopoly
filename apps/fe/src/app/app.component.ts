import { Component, OnInit, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SocketService } from './socket.service'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
	standalone: true,
	imports: [RouterModule, FormsModule, CommonModule],
	selector: 'session-monopoly-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	#socketService = inject(SocketService)

	msg = ''
	msgList = this.#socketService.msg

	ngOnInit(): void {
		this.#socketService.connect()
	}

	sendMessage() {
		this.#socketService.sendMessage(this.msg)
		this.msg = ''
	}


}
