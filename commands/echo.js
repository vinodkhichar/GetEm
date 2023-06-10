const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')
                .setRequired(true)),
    async execute(interaction) {
		const input = interaction.options.getString('input');
        await interaction.reply(input);
        // await interaction.reply(input);

       // await interaction.reply();
		// category must be one of 'gif_funny', 'gif_meme', or 'gif_movie'
	},
};


