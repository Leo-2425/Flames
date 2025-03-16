/**
 * @fuego v1.0.0
 * @author painfuego (www.codes-for.fun)
 * @copyright 2024 1sT - Services | CC BY-NC-SA 4.0
 */
import { ActionRowBuilder } from 'discord.js';
import { Command } from '../../classes/abstract/command.js';
export default class Vote extends Command {
    constructor() {
        super(...arguments);
        this.description = 'Shows vote link';
        this.execute = async (client, ctx) => {
            await ctx.reply({
                components: [
                    new ActionRowBuilder().addComponents([
                        client
                            .button()
                            .link('ㅤVote meㅤ', `https://youtu.be/u1f0MWuX55g`),
                    ]),
                ],
            });
        };
    }
}
/**@codeStyle - https://google.github.io/styleguide/tsguide.html */
