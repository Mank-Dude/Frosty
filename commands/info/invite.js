const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'invite',
    permissions: [],
    run: async ({ message }) => {
        const user = message.mentions.users.first() || message.author 
        const exampleEmbed = new MessageEmbed()


        .setThumbnail('https://i.imgur.com/GNLTSgw.png')
            .setTitle(`Invite me to your server!`)
            .setFields(
                { name: `Bot Invite:`,value: `[Click here](invitelink)`, inline: true},
                { name: `Server Invite:`,value: `[Click here](https://discord.com/invite/T7mUbxFE)`,  inline: true })

            .setColor('#0099ff')
            //.setFooter({ text: 'Aesthetic', iconURL: 'https://cdn.discordapp.com/avatars/268914030528299008/a_682cfd72756ac796e0b33ae02e37bbf7.gif' })
            .setFooter({ text: user.username, iconURL: user.displayAvatarURL({ dynamic: true }) })
        message.reply({ embeds: [exampleEmbed] });
    }
}