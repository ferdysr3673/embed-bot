/*
@NOTE: THIS WON'T WORK UNLESS YOU HAVE AN INTERACTION EVENT IN index.js FILE! [You can make a event handler and make in it aswell]
*/

/* Paste This In Index.js [If you don't have the event]
Make sure it's not pasted inside events, put it outside a event.
===============================================
const simplydjs = require("simply-djs")

client.on("interactionCreate", async interaction =>{
  simplydjs.clickBtn(interaction, {
    embedDesc: 'This Is Description',
    embedColor: '#fffff', // default: #075FFF
    closeColor: '', //default: blurple
    closeEmoji: '😃', // default: 🔒
    
    delColor: '', // default: grey
    delEmoji: '', // default: ❌
    openColor: '' , // default: green
    openEmoji: '', // default: 🔓
    timeout: true, // default: true | Needs to be boolean (true/false)
  
    cooldownMsg: 'Bruh Mate',
    categoryID: '881801380841541632',
    role: '859824835802562590' // Role which sees the ticket channel (like Support Role)
    })
})
===================================================
*/
const Discord = require('discord.js')
const simplydjs = require('simply-djs')
module.exports = {
    name: 'rr',
    category: "info",
    run : async (client, message, args, interaction) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Anything You Like")
      .setDescription("Hello World. Select your roles")
      .setFooter("You can change this embed style")
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: 'ID of role',
        label: 'name', // default: *role name*
        color: 'PRIMARY', // default: SECONDARY
        emoji: '',
      }, // etc..
      {
        role: 'ID OF ROLE',
        label: 'Name2', // default: *role name*
        color: 'SECONDARY', // default: SECONDARY
        emoji: '😃',
      }
      //Keep adding here more
    ],
  })
    }
}
