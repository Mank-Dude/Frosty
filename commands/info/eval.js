const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')


module.exports = {
    name: "eval",
    category: "owner",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {

        const None = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Invalid\n')
        .setDescription('Please enter in values')
        .setTimestamp()
        .setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });

        try {
            const code = args.join(" ");
            if (!code) {
               return message.channel.send({ embeds: [None] })
            }
            
            let evaled = eval(code);
    
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
    
              let embed = new MessageEmbed()
              .setAuthor({ name: `Eval`, iconURL: `${message.author.avatarURL()}` })
              .addField("Input", `\`\`\`${code}\`\`\``)
              .addField("Output", `\`\`\`${evaled}\`\`\``)
              .setColor("GREEN")
              .setTimestamp()
              //.setFooter({ text: 'Lemonade', iconURL: 'https://lemonade.ga/noods/ApplicationFrameHost_ULyyoL2sv1.png' });
    
            message.channel.send({embeds: [embed]});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
          }
        
    }
}