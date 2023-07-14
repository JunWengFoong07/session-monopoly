import { Message } from "./message.model";
import { User } from "./user.model";

export interface ServerToClientEvents {
  chat: (e: Message) => void
}

export interface ClientToServerEvents {
  chat: (e: Message) => void
  join_room: (e: { user: User; roomName: string }) => void
}
