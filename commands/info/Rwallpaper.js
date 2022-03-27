const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
module.exports = {
  name: "rw",
  category: "fun",
  description: "sends random wallpaper",
  usage: "wallpaper",


  run: async ({client, message, args}) => {
    let owo = (await neko.sfw.wallpaper());
    const wallpaper = new Discord.MessageEmbed()
      .setTitle("Random Wallpaper")
      .setImage(owo.url)
      .setColor(`BLURPLE`)
      .setURL(owo.url);
      message.channel.send({ embeds: [wallpaper] })
  }
};