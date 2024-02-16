import { generateUuid } from "../utils/generateUuid";

export class Message {
  private id: string;

  private userName: string;

  private message: string;

  private createdAt: Date;

  constructor(id: string, userName: string, message: string, createdAt: Date) {
    this.id = id;
    this.userName = userName;
    this.message = message;
    this.createdAt = createdAt;
  }

  public static create(userName: string, message: string) {
    return new Message(generateUuid(), userName, message, new Date());
  }

  public getId(): string {
    return this.id;
  }

  public getUserName(): string {
    return this.userName;
  }

  public getMessage(): string {
    return this.message;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }
}
