import config from "../../config";
import { MessageService } from "./messages/MessagesService";

export const DOCUMENTDB_URL = `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.host}?retryWrites=true&w=majority`;

export const messageService = new MessageService();
