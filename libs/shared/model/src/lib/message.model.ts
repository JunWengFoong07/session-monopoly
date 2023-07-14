import { User } from "./user.model"

export interface Message {
  user: User
  timeSent: string
  message: string
  roomName: string
}
