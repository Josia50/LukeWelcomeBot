const Discord = require('discord.js')
const client = new Discord.Client();
const fs = require('fs');
const config = require("./scripts/config.json")
const cc = require("./scripts/files/CC.json")

client.on('message', (msg) => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "addc") {    
    const sayMessage = args.join(" ");
    JSON.parse(fs.readFileSync('./scripts/files/CC.json', 'utf-8'))
    var obj = [];
    //var username = msg.author.tag.slice(0, -5)
    obj.push(`${sayMessage}`)
    Array.prototype.push.apply(obj)
    fs.writeFileSync('./scripts/files/CC.json', JSON.stringify(obj, null, 4))
    }
})


client.login(config.token)