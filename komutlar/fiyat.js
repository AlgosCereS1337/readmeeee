const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('PURPLE')
.setDescription(`**Fiyat Listesi**`)
.setTimestamp()
.addField(' Haftalık Premium ',' 35₺')
.addField(' Aylık Premium ',' 75₺')
.addField(' Yıllık Premium ',' 200₺')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setFooter(" Babalar CHECK ")
.setImage("https://cdn.discordapp.com/attachments/1043326036366082049/1043331714308640778/standard_4.gif")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['fiyat', '₺'], 
  permLevel: 0 
};

exports.help = {
  name: 'fiyat',
  description: 'Tüm fiyatları gösterir.',
  usage: 'fiyat'
};