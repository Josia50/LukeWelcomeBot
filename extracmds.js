const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const config = require("./config.json");
const fs = require('fs')

client.on('ready', () => {
    console.log('Extra Commands are reggie like my body!');
})

client.on("message", async message => {
    if (message.guild === null) return;
    var guildid = message.guild.id
    const configa = require(`./configs/${guildid}.json`)
    if(message.content.indexOf(configa.prefix) !== 0) return;
    const args = message.content.slice(configa.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "+r34") {
        message.channel.sendFile('https://rule34.xxx/index.php?page=post&s=list&tags='+args.join(" "),'hentai.png')};

})