import { Server, Socket } from "socket.io";
import { Message } from "../../models/message.model";
import { messageService } from "../database";

export class SocketService {
  private io: Server;

  constructor(server: Server) {
    this.io = server;
    this.setupSocket();
  }

  private setupSocket() {
    this.io.on("connection", (socket: Socket) => {
      console.log(`${socket.id} connected.`);

      socket.on("chat message", this.handleChatMessage.bind(this));

      socket.on("disconnect", () => () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }

  private handleChatMessage({
    userName,
    message,
  }: {
    userName: string;
    message: string;
  }) {
    const oMessage = Message.create(userName, message);
    messageService.saveMessage(oMessage).then(() => {
      this.io.emit("chat message", { userName, message });
      console.log("Received message:", { userName, message });
    });
  }
}
