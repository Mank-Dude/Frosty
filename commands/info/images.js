const img = require('images-scraper')
const { MessageEmbed } = require('discord.js');

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
    name: "image",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const invalid = new MessageEmbed()
            .setTitle("Invalid")
            .setColor('RANDOM')
            .setDescription("Please enter a search query")

        const query = args.join(" ")
        if(!query) return message.channel.send({ embeds: [invalid] });

        const results = await google.scrape(query, 1)

        const embed = new MessageEmbed()
            .setTitle("Result")
            .setColor('#57F287')
            .setImage(results[0].url)
            // .setDescription("OPTIONAL")


        message.channel.send({ embeds: [embed] });
        
    }
}