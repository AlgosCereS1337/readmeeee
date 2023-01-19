const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('PURPLE')
.setAuthor(" Babalar CHECK ",client.user.avatarURL())
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
.setTimestamp()
.addField('> +bansay ',' Bütün banları gösterir.')
.addField('> +kullanıcıbilgi ',' Etiketlediğiniz Kişiyi Süreli Susturmanızı Sağlar.')
.addField('> +üyedurum ',' Sunucuda Kaç Kişi Olduğunu Gösterir')
.addField('> +kanalid ',' Etiketlediğiniz Kanalın İdsini Gösterir')
.addField('> +botbilgi ','Botun anlık yönetici tarafından düzenlenen bilgilerini gösterir.')
.addField('> +ping ',' Botun anlık ping değerini gösterir.')
.addField('> +nuke ',' Kanalın kopyasını oluşturur ve kanalı siler.')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setFooter(" Babalar CHECK ")
.setImage("https://cdn.discordapp.com/attachments/1043326036366082049/1043331714308640778/standard_4.gif")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help', 'y'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};