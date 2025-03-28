import { Message } from "./message.entity";

 
export interface MessageRepository {
  findById(id: string): Promise<Message | null>;
  save(Me: Message): Promise<Message>;
}
