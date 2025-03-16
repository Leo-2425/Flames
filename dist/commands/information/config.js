/**
 * @fuego v1.0.0
 * @author painfuego (www.codes-for.fun)
 * @copyright 2024 1sT - Services | CC BY-NC-SA 4.0
 */
import { Command } from '../../classes/abstract/command.js';
export default class Config extends Command {
    constructor() {
        super(...arguments);
        this.aliases = ['cnf'];
        this.description = 'Shows server config';
        this.execute = async (client, ctx) => {
            const twoFourSeven = await client.db.twoFourSeven.get(ctx.guild?.id);
            await ctx.reply({
                embeds: [
                    client
                        .embed()
                        .setAuthor({
                        name: 'Configuration overview',
                        iconURL: ctx.guild.iconURL({ size: 4096 }) || client.user.displayAvatarURL(),
                    })
                        .desc(`${client.emoji.check} **My prefix for this server is ${client.config.prefix}**\n\n` +
                        `${client.emoji[twoFourSeven ? 'check' : 'cross']} **24/7 status :** ${twoFourSeven ? `Enabled` : 'Disabled'}\n\n` +
                        `${client.emoji[twoFourSeven ? 'info' : 'warn']} **247/ TextChannel :** ${twoFourSeven?.textId ? `<#${twoFourSeven.textId}>` : 'Disabled'}\n` +
                        `${client.emoji[twoFourSeven ? 'info' : 'warn']} **24/7 VoiceChannel :** ${twoFourSeven?.voiceId ? `<#${twoFourSeven.voiceId}>` : 'Disabled'}\n` +
                        `${twoFourSeven ? `` : `${client.emoji.info} made by Reo & have fun!`}`),
                ],
            });
        };
    }
}
/**@codeStyle - https://google.github.io/styleguide/tsguide.html */
