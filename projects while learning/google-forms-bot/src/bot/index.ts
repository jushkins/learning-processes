import { Bot, Keyboard, Context, session } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { composer as startCommand } from "./commands/start";
import interview, { composer as startInterview } from "./commands/interview";
import type { MyContext, MyConversation } from "./types/context";
import { initial } from "./types/session";
import { config } from "dotenv";
config();

const TOKEN = process.env.TOKEN as string;
const bot = new Bot<MyContext>(TOKEN);

// Setting Commands
bot.api.setMyCommands([
  { command: "start", description: "Boshlash" },
  { command: "help", description: "Yordam" },
]);

//Middleware
bot.use(session({ initial }));
bot.use(conversations());
bot.use(createConversation(interview));

//Commands
// bot.use(createConversation(interview));
bot.use(startCommand);
bot.use(startInterview);

// Message handler

bot.catch((error) => {
  console.error("Error inserting data:", error);
});

export default bot;


