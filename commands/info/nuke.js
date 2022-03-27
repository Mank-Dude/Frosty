require('discord.js')

module.exports = {
    name: "nuke",
    category: "server",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) =>{

        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        

        message.channel.clone().then((ch) =>{
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position)
            message.channel.delete();

            ch.send('Gawdamn channel Nuked X.X')
            .then(message =>{
                message.delete(10000)
            })
        })
    }
}