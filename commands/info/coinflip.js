module.exports = {
    name: "coinflip",
    category: "fun",
  description: "Flips a coin",
  usage: "[command]",
  run: async ({client, message, args}) => {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  {
  var msg2 = Array(2);
          msg2[1] = "`Heads`";
          msg2[2] = "`Tails`";
          var x = getRandomInt(0, 8);
          if (x < 4){
              message.channel.send(`${message.author} has flipped an it's ${msg2[1]}`)
          }
          else{
              message.channel.send(`${message.author}  has flipped an it's ${msg2[2]}`)
          }
      }
          
  }
  };