import { Composer } from "grammy";
import type { MyContext } from "../types/context";
import { registerKeyboard } from "../keyboards/register";
import { arizaYuborishKeyboard } from "../keyboards/application";

export const composer = new Composer<MyContext>();

composer.command("start", async (ctx: MyContext) => {
  await ctx.reply(
    `<b>Assalomu alaykum, ${ctx.from?.first_name}!</b>
Iltimos, botdan foydalanish uchun kontaktingizni ulashing 👇`,
    { reply_markup: registerKeyboard, parse_mode: "HTML" }
  );
});

composer.on(":contact", async (ctx: MyContext) => {
  const contact = ctx.msg?.contact;
  if (!contact) return;
  await ctx.reply(
    `<b>Tabriklaymiz! Ro'yhatdan muvafaqiyatli o'tdingiz</b>
Iltimos, davom ettirish uchun menudan tanlang 👇`,
    { reply_markup: { keyboard: arizaYuborishKeyboard, resize_keyboard: true }, parse_mode: "HTML" }
  );
});
