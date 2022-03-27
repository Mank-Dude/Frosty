const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "roleselect",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below").setColor("RANDOM")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-933577930104246342").setStyle("PRIMARY").setLabel("Members"),
                    new MessageButton().setCustomId("role-933735562173620274").setStyle("PRIMARY").setLabel("Moderator"),
                    
                ])
            ]
        })
    }
}