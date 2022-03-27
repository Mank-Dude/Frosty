const Levels = require('discord-xp');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "lvl",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        let member = message.mentions.users.first() || message.author

        const target = message.mentions.users.first() || message.author; // Grab the target.

        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.

        const exampleEmbed = new MessageEmbed()
            
        .setColor('RANDOM')
        .setTitle('Level')
        .setDescription(`${member.username} is ` + "level"  +  user.level)
        .setImage(' https://cdna.artstation.com/p/assets/images/images/028/785/032/original/jasmina-kloss-ggr-xp-icon-turnaround-kloss.gif?1595502408')
       
        message.channel.send({ embeds: [exampleEmbed] });


    }
}