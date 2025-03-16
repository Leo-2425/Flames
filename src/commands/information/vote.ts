/**
 * @fuego v1.0.0
 * @author painfuego (www.codes-for.fun)
 * @copyright 2024 1sT - Services | CC BY-NC-SA 4.0
 */

import { ActionRowBuilder } from 'discord.js';
import { Context } from '../../interfaces/context.js';
import { ExtendedClient } from '../../classes/client.js';
import { Command } from '../../classes/abstract/command.js';
import { ExtendedButtonBuilder } from '../../classes/button.js';

export default class Vote extends Command {
  description = 'Shows vote link';

  execute = async (client: ExtendedClient, ctx: Context) => {
    await ctx.reply({
      components: [
        new ActionRowBuilder<ExtendedButtonBuilder>().addComponents([
          client
            .button()
            .link('ㅤVote me(DBL)ㅤ', `https://youtu.be/u1f0MWuX55g`),
        ]),
      ],
    });
  };
}

/**@codeStyle - https://google.github.io/styleguide/tsguide.html */
