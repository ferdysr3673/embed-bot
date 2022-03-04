const simplydjs = require('simply-djs') //import simplydjs
const { Discord } = require("discord.js") //import djs

module.exports = {
  name: "embedcreate",
  run: async (client, message) => {
    simplydjs.embedCreate(message)

  }
}