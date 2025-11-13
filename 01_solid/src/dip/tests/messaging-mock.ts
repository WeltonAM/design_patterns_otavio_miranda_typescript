import { MessageProtocol } from "../entities/interfaces/messaging-protocol";

export class MessagingMock implements MessageProtocol {
  send(message: string): void {
    console.log(message);
  }
}
