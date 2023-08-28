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

// bot.on("message:contact", (ctx) => {
//   phone_number = ctx.message.contact.phone_number;
//   // const userName = ctx.message.contact.first_name;
//   ctx.reply("Rahmat, Ariza qoldirish uchun Ariza qoldirish tugmasini bosing", {
//     reply_markup: {
//       keyboard: [["Ariza qoldirish"]],
//       resize_keyboard: true,
//     },
//   });
// });

// interface UserData {
//   phoneNumber?: string;
//   name?: string;
//   reason?: string;
//   questions: string[];
//   currentQuestion: number;
// }

// const userData: { [userId: number]: UserData } = {};

// const questions = [
//   "What is your name?",
//   "Why are you applying for this job?",
//   "What relevant experience do you have?",
//   "How do you handle challenges in a team?",
//   "What are your future career goals?",
// ];

// bot.on("message", async (ctx) => {
//   const userId = ctx.from.id;
//   const userResponse = ctx.message.text!;
//   const userName = ctx.from.first_name;

//   if (userResponse === "Ariza qoldirish" && !userData[userId]?.questions) {
//     userData[userId] = { questions: [], currentQuestion: 0 }; // Initialize user data

//     await ctx.reply(`Great! Let's start with the first question: ${questions[0]}`);
//   } else if (userData[userId]?.questions && userData[userId]?.currentQuestion < questions.length) {
//     userData[userId].questions.push(userResponse);
//     userData[userId].currentQuestion++;

//     const questionNumber = userData[userId].currentQuestion + 1;
//     const nextQuestionText = questions[userData[userId].currentQuestion];

//     await ctx.reply(`Question ${questionNumber}: ${nextQuestionText}`);

//     if (questionNumber === questions.length) {
//       // Save data to MySQL database

//       await ctx.reply("Thank you for your interest! We will contact you soon.");

//       // Clear user data
//       delete userData[userId];
//     }
//   }
// });
