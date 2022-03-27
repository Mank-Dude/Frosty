const { MessageEmbed } = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: "fact",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

       const GIF = await neko.sfw.fact()
       const HugEmbed = new MessageEmbed()


       .setTitle("Fact")
       .setDescription(GIF.fact)
       message.channel.send({ embeds: [HugEmbed] });
    }


}