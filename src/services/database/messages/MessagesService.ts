import { Collection, Filter, MongoClient } from "mongodb";
import config from "../../../config";
import { Message } from "src/models/message.model";
import { DOCUMENTDB_URL } from "..";

export class MessageService {
  private client: MongoClient;

  private collection: Collection<Message>;

  private database = config.db.database;

  constructor() {
    this.client = new MongoClient(DOCUMENTDB_URL, { retryWrites: false }); // todo: change this for database url
    const db = this.client.db(this.database);
    this.collection = db.collection("messages");
  }

  private async connect() {
    return this.client.connect();
  }

  private async close() {
    return this.client.close();
  }

  async saveMessage(message: Message) {
    try {
      await this.connect();
      await this.collection.insertOne(message);
      await this.close();
    } catch (error) {
      console.log("Error saving message:", error);
    }
  }
}
