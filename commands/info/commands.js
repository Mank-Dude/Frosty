const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cmds',
    description: "Embeds!",
    run: async ({client, message, args}) => {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#008bff')
        .setTitle('Commands')
        .setDescription('Some commands may not work as they are made for Mods only!')
        .setThumbnail('https://i.imgur.com/X5rEeVu.png')
        .addFields(
            {name: '8ball', value: 'Ask a yes or no question', inline: true}, 
            {name: 'anime', value: 'Search any existing anime', inline: true},
            {name: 'avatar', value: 'Shows the avatar of a user in the server', inline: true},
            {name: 'ban', value: 'Bans a user', inline: true},
            {name: 'clear', value: 'Clears channel messages', inline: true},
            {name: 'ping', value: 'Measures your ping in the server', inline: true},
            {name: 'image', value: 'Search any image requested', inline: true},
            {name: 'invite', value: 'Gives a link to the server', inline: true},
            {name: 'kick', value: 'Kicks a user', inline: true},
            {name: 'meme', value: 'Shows a random meme', inline: true},
            {name: 'mute', value: 'timeouts a user', inline: true},
            {name: 'fact', value: 'Gives a random fact', inline: true},
            {name: 'nuke', value: 'Nukes a channel (deletes all messages)', inline: true},
            {name: 'slogan', value: 'Repeats the servers slogan', inline: true},
            {name: 'spank', value: 'Spanks any user in the server', inline: true},
            {name: 'ttt', value: 'Play Tic Tac Toe with anyone in the server', inline: true},
            {name: 'translate', value: 'Translates any language to your current used language', inline: true},
            {name: 'unban', value: 'Revoke a users ban (must have users id)', inline: true},
            {name: 'weather', value: 'Shows the weather (must include location)', inline: true},
            {name: 'rw', value: 'Gives random wallpaper (may inculde inapporipiate content)', inline: true},
            {name: 'botinfo', value: 'Shows the servers bot stats', inline: true},
            {name: 'rsp', value: 'rock-paper-scissors', inline: true},
            {name: 'coinflip', value: 'flips a coin', inline: true},
            {name: 'whois', value: 'Shows a users stats', inline: true},
            
        )
        
	    .setFooter({ text: 'Use "?" to execute these commands', iconURL: 'https://i.imgur.com/X5rEeVu.png' });

       message.channel.send({ embeds: [newEmbed] }) 



    }
}