import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not defined in the environment variables.');
}

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('hello world'));
bot.launch();
