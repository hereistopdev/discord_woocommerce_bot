const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);

const TOKEN = config.botToken
const prefix = config.prefix

client.login(TOKEN)
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    const args = message.content.slice(prefix.lenght).split(/ +/)
    const command = args[1].toLowerCase()
    console.log(args)
    // Command test!
})

client.once('ready', () => {
    console.log("Discord bot online")
});