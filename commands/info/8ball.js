const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "8ball",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
    
        if(!args[0]) return message.reply('Ask a question')
        let replies = ["yes", "Outlook seems good", "yes", "of course", "Yes - definitely", "no", "better not tell you", "definitely no"]

        let result = Math.floor((Math.random() * replies.length))
        let question = args.slice().join(" ");

        const exampleEmbed = new MessageEmbed()
        .setTitle(`🎱 ${message.author.username}`)
        .setColor('RANDOM')
        .addField("Question", question)
        .addField('Answer', replies[result])

        message.channel.send({ embeds: [exampleEmbed] });

    }
}