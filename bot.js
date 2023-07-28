const Discord = require('discord.js');
const client = new Discord.Client();
const BOT_TOKEN = 'MTExOTA5ODAxNzU0NzU1MDcyMg.GOwmbg.czudBm34nE6GDVARhuGnFXMxAUJ53OeCM_KGfs';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    // console.log('Hello. I am bot.');
    // Handle messages and implement your bot's functionality here
});

client.login(BOT_TOKEN).catch((error) => {
    console.error('An error occurred while logging in:', error);
  });

  