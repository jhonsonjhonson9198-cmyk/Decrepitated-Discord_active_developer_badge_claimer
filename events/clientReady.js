const Discord = require("discord.js");
const loadSlashCommands = require("../loader/loadSlashCommands");

module.exports = async bot => {

    await loadSlashCommands(bot)
    console.log(`${bot.user.tag} is online.`);
    bot.user.setActivity("guns.lol/cpascarlos");
}