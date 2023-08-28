import type { MyContext, MyConversation } from "../types/context";
import { Composer } from "grammy";
import bot from "../index";
import { createConversation } from "@grammyjs/conversations";

const questions = [
  "What is your name?",
  "Why are you applying for this job?",
  "What relevant experience do you have?",
  "How do you handle challenges in a team?",
  "What are your future career goals?",
];

export const composer = new Composer<MyContext>();

composer.hears("📤 Ariza yuborish", async (ctx: MyContext) => {
  await ctx.conversation.enter("interview");
});
/** Defines the conversation */
async function interview(conversation: MyConversation, ctx: MyContext) {
  await ctx.reply(`1. ${questions[0]}`);
  const answer1 = await conversation.wait();
  await ctx.reply(`2. ${questions[1]}`);
  const answer2 = await conversation.wait();
  await ctx.reply(`3. ${questions[2]}`);
  const answer3 = await conversation.wait();
  await ctx.reply(`4. ${questions[3]}`);
  const answer4 = await conversation.wait();
  await ctx.reply(`5. ${questions[4]}`);
  const answer5 = await conversation.wait();
  await ctx.reply("Thank you for your interest! We will contact you soon.");
  return;
}

export default interview;
