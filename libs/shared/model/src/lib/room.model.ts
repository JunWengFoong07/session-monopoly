import { User } from "./user.model"

export interface Room {
  name: string
  host: User
  users: User[]
}
