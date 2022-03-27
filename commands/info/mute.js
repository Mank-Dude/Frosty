const ms = require("ms");

module.exports = {
    name: "mute",
    category: "mod",
    permissions: ["MANAGE_MESSAGES"],
    devOnly: false,
    run: async ({ client, message, args }) => {
        const target = message.mentions.users.first();
        if(!target) return message.channel.send("Couldn't timeout member.")
        if (!args[1]) return message.channel.send("Couldn't find time amount, please try again.")
        const memberTarget = message.guild.members.cache.get(target.id);
        const time = ms(args[1])
        const reason = args[2] || null
        memberTarget.timeout(time, reason);
        message.channel.send(`${target} LOLLLL bro's been timed out ${ms(time, { long: true })}`);

    }
}