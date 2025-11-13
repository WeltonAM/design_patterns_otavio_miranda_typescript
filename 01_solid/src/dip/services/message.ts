import { MessageProtocol } from "../entities/interfaces/messaging-protocol";

export class Message implements MessageProtocol {
  send(message: string): void {
    console.log(message);
  }
}
