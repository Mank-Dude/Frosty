const weather = require('weather-js');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "weather",
    description: "shows the current weather in a specified location",

    run: async ({client, message, args, Discord}) =>{
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Please specify a location!')

            if(result === undefined || result.length === 0) return message.channel.send('**invlaid** location!!')

            var current = result[0].current;
            var location = result[0].location;

            const exampleEmbed = new MessageEmbed()

            .setColor("RANDOM")
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('TimeZone', `UTC ${location.timezone}`, true)
            .addField('Degree Type', 'Celcius', true)
            .addField('Temperature', `${current.temperature}°`, true) 
            .addField('Wind', `${current.winddisplay}`, true)
            .addField('Feels Like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)

             message.reply({ embeds: [exampleEmbed] });
        })
    }
}