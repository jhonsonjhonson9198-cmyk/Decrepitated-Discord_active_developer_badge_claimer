const Discord = require("discord.js")
const bot = new Discord.Client({intents : 0})
const config = require("./config")
const loadCommands = require("./loader/loadCommands")
const loadEvents = require("./loader/loadEvents")


bot.commands = new Discord.Collection()

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)