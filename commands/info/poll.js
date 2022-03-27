const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "poll",
    category: "server",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args, data}) =>{
       
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("admin only")
        if(!args[0]) return message.reply("Mention a channel and text. e.g: -poll #poll this is a poll")

        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        const HugEmbed = new MessageEmbed()
        .setTitle('Poll')
        .setDescription(pollDescription)
        .setColor("YELLOW")

        let msgEmbed = await pollChannel.send({ embeds: [HugEmbed] });
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')

        
    }
}