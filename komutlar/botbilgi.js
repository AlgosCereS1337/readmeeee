const Discord = require("discord.js");

exports.run = async (client, message) => {
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`SamRole`, client.user.avatarURL())
    .setTitle(``)
    .setColor("PURPLE")
    .setImage("https://cdn.discordapp.com/attachments/1043326036366082049/1043331714308640778/standard_4.gif")
    .setDescription(
      `• Babalar  CHECK  `
    )
    .addField(
      "**Bot Verileri**",
      `• **Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n • **Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n • **Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "**Sahip Bilgi**",
      "• \`SamRole#7950 - carder#1337\`** | Geliştirici.** \n\n"
    )
    .addField(
      "**Sürümler**",
      `• **Discord.js Sürümü** **|**  \`v${Discord.version}\` \n •  **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "**Gecikmeler**",
      `• | \`${client.ws.ping}\` **MS**`,
      true
    )
    
  
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["SamRole" , "batuhan"],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: "botbilgi"
};
