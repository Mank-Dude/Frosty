const choices = ['rock', 'paper', 'scissors'];
const win = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock'
}

module.exports = {
  name: "rsp",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({client, message, args}) => {
    if (args.length === 0) {
      return message.reply(`You should use the command like\n \`./rock-paper-scissors [${choices}]\``);
    } else if (!choices.includes(args[0])) {
      return message.reply(`Thats not one of the possible options. Try any of this \`[${choices}]\``);
    }
    
    const playerChoice = args[0];
    const botChoice = choices[Math.floor(Math.random() * 3)];

    if (win[playerChoice] === botChoice) {
      message.reply(`I got ${botChoice}. Congratulations, you win!!`);
    } else if (win[botChoice] === playerChoice) {
      message.reply(`I got ${botChoice}. Sorry, you lose...`);
    } else {
      message.reply(`I got ${botChoice}. Its a draw!!`);
    }
  }
}