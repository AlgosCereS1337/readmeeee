const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("PURPLE")
     .setImage("https://cdn.discordapp.com/attachments/1043326036366082049/1043331714308640778/standard_4.gif")
   .addField("**Toplam Kullanıcı**",message.guild.memberCount )
  
    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
