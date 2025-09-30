const Discord = require("discord.js")

module.exports = {
    name: "enable",
    description: "Allows you to renew your Discord active developer badge for one month (or activate it).",
    permission: "0",
    dm: true,
    category:'Badge',
    async run(bot, interaction) {
        await interaction.reply(`✅​ Updated.`)
    }
}