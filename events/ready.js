const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
".gg/babalarcheck"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);//LISTENING=DİNLİYOR //STREAMING=İZLİYOR//GAMING=OYNUYOR
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'PLAYING' ,  url: 'https://www.youtube.com/watch?v=HH_MefyPQu0' })
}, 5000);
    console.log(`samrole`);
}