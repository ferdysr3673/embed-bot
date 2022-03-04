const Discord = require('discord.js')
const simplydjs = require("simply-djs")
module.exports = {
    name: 'ticket',
    category: "tickets",
    description: 'Creates Tickets',
    usage: 'w?ticket',
    run : async (client, message, args) => {
     

simplydjs.ticketSystem(message, message.channel, {
     embedDesc: 'Click The Button To Make Ticket', // default: '🎫 Create a ticket by clicking the button 🎫'
    embedColor: '', // default: #075FFFF
    embedFoot: 'Tutorial By DiegoBot#1739', // default: message.guild.name
    emoji: '', // default:, 🎫
    color: '', // default: blurple
})
}
}