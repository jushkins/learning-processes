import { Context as DefaultContext, SessionFlavor } from "grammy";
import { SessionData } from "./session";
import { Conversation, ConversationFlavor } from "@grammyjs/conversations";

export type MyContext = DefaultContext & SessionFlavor<SessionData> & ConversationFlavor;

export type MyConversation = Conversation<MyContext>;
