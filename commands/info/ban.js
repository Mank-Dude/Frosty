module.exports = {
    name: 'ban',
    description: "ban",
    run: async ({client, message, args, Discord}) => {

        let role = message.guild.roles.cache.find(r => r.name === "Mod");


         const member = message.mentions.users.first();

        
         if (message.member.roles.cache.some(r => r.name === "Mod")) {

            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send("LOL imagine being banned");
            } else {
                message.channel.send("this member doesnt exist you idiot");
            }

         }else {
            message.channel.send('You cant do that bozo');
        }


        
    }
}