const malScraper = require('mal-scraper');
const { MessageEmbed } = require("discord.js")


module.exports = {
    name: 'anime',
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({ message, args }) => {

        const type = 'anime'
        const name = `${args.join(' ')}`
        //Character limitor DO NOT CHANGE ANY OF THE VALUES HERE
        trimString = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
        //_____________________________________________________


        malScraper.getInfoFromName(name, type).then(async Danime => {

            const exampleEmbed = new MessageEmbed()

                .setTitle(`Anime Searcher`)
                .addFields(
                    { name: `Anime:`,value: `${Danime.title}`,  inline: true },
                    { name: `Release Date:`,value: `${Danime.aired}`,  inline: true },
                    { name: `Score:`,value: `${Danime.score}`,  inline: true },
                    { name: `Type:`,value: `${Danime.type}`,  inline: true },
                    { name: `Episodes:`,value: `${Danime.episodes}`,  inline: true },
                    { name: `Status:`,value: `${Danime.status}`,  inline: true },
                    //Change Character limit values here aka the 200 <---(Character limit)
                    { name: `Synopsis:`,value: trimString(`${Danime.synopsis}`, 200),  inline: false },
                    { name: `Link:`,value: `${Danime.url}`,  inline: false },
                )
                .setThumbnail(Danime.picture)
                .setColor(0x00AE86)
            message.reply({ embeds: [exampleEmbed] });

        }).catch(err => {
            console.log(err)
        })

    }
}