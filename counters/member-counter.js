module.exports = async (client) =>{
    const guild = client.guilds.cache.get('933575867668496454');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('933904049512804402')
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 5000);
}
