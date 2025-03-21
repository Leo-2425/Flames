/**
 * @fuego v1.0.0
 * @author painfuego (www.codes-for.fun)
 * @copyright 2024 1sT - Services | CC BY-NC-SA 4.0
 */

import _ from 'lodash';
import { paginator } from '../../utils/paginator.js';
import { Context } from '../../interfaces/context.js';
import { ExtendedClient } from '../../classes/client.js';
import { Command } from '../../classes/abstract/command.js';
import { ExtendedEmbedBuilder } from '../../classes/embed.js';

export default class Queue extends Command {
  override playing = true;
  override inSameVC = true;
  override aliases = ['q'];
  override description = 'Get player queue';

  override execute = async (client: ExtendedClient, ctx: Context) => {
    const player = client.getPlayer(ctx);

    const previous = player!.queue.previous.map(
      (t, i) =>
        `${i} • ${t.title.substring(0, 30)} - ${
          t.isStream ? '◉ LIVE' : client.formatDuration(t.length!)
        }\n`,
    );

    const upcoming = player!.queue.map(
      (t, i) =>
        `${i + player!.queue.previous.length + 1} • ${t.title.substring(0, 30)} - ${
          t.isStream ? '◉ LIVE' : client.formatDuration(t.length!)
        }\n`,
    );

    const current = `${player?.queue.previous.length} • ${player!.queue.current!.title.substring(0, 25)} - ${
      player!.queue.current!.isStream ?
        '◉ LIVE'
      : client.formatDuration(player!.queue.current!.length!)
    } ${client.emoji.check}\n`;

    const queuedSongs = [...previous, current, ...upcoming];

    const mapping = _.chunk(queuedSongs, 10);
    const descriptions = mapping.map((s) => s.join(''));

    const pages: ExtendedEmbedBuilder[] = [];

    for (let i = 0; i < descriptions.length; i++) {
      const embed = client.embed().desc(`${descriptions[i]}`);
      pages.push(embed);
    }

    await paginator(ctx, pages, Math.floor(previous.length / 10) || 0);
  };
}

/**@codeStyle - https://google.github.io/styleguide/tsguide.html */
