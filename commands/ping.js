const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
		await wait(4000);
		await interaction.editReply('Pong!');
		await interaction.followUp({ content: 'Pong again!', ephemeral: true });
		// const locales = {
		// 	pl: 'Witaj Świecie!',
		// 	de: 'Hallo Welt!',
		// };
		// interaction.reply(locales[interaction.locale] ?? 'Hello World (default is english)');

	},
};
