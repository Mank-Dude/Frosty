const { MessageEmbed } = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "waifu",
    category: "anime",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const type = message.channel.nsfw ? "nsfw" : "sfw"; //lewd if the channel is NSFW

        const { url } = await fetch(
            `https://waifu.pics/api/${type}/waifu`
        ).then((res) => res.json());
        
                
            const HugEmbed = new MessageEmbed()

                .setTitle("Waifu")
                .setImage(url)
                .setColor("RANDOM")
                .setTimestamp()
                message.channel.send({ embeds: [HugEmbed] });
            }

           
        
    }