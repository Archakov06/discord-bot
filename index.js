const Discord = require('discord.js');
const client = new Discord.Client();
const configs = require('./configs');

client.on('message', message => {
  if (message.type === 'GUILD_MEMBER_JOIN') {
    const user = message.author.username;
    const discriminator = message.author.discriminator;
    message.channel.send(`**:wave: Добро пожаловать, @${user}! **

__Расскажи немного о себе :drujko: __

:zero:  Как зовут?

:one:  Чем занимаетесь? Учитесь или работаете?

:three:  Программируете? На каком языке? Сколько лет?`);
  }
});

client.login(configs.token);
