module.exports = {
    name: 'kick',
    description: "kick",
    run: async ({client, message, args, Discord}) => {

        let role = message.guild.roles.cache.find(r => r.name === "Mod");


         const member = message.mentions.users.first();


       if (message.member.roles.cache.has("933735562173620274")) {

            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("dang imagine getting kicked tho");
            } else {
                message.channel.send("member doesnt exist you idiot");
            }

         }else {
            message.channel.send('You cant do that bozo');
        }



    }
}