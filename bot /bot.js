import { Telegraf } from 'telegraf';
const BOT_TOKEN = '7707559744:AAGkirdGA5qsi3gLJ8HTYHiOirlMQbCfpX8';

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('hello world'));
bot.launch();
