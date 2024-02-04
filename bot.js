const {Client, IntentsBitField, ActivityType, messageLink, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
    client.user.setActivity({
    name: 'M1.bot | /help',
    type: ActivityType.Playing,
    });
});

client.login('BotToken');
