const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'spank',
    description: "Spank",
    run: async ({client, message, args, Discord}) =>{

       
                
                
                
        
              

                personHugged = message.mentions.users.first() 

                const HugEmbed = new MessageEmbed()

                .setTitle(`You spanked ${personHugged.username} 🍑`)
                .setImage("https://c.tenor.com/M1MLHpGTwusAAAAC/tengen-uzui-demon-slayer.gif")
                .setTimestamp()

                message.channel.send({ embeds: [HugEmbed] });

    }
}