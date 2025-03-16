/**
 * @fuego v1.0.0
 * @author painfuego (www.codes-for.fun)
 * @copyright 2024 1sT - Services | CC BY-NC-SA 4.0
 */
import { connect247 } from '../../functions/connect247.js';
const event = 'playerDestroy';
export default class PlayerDetsroy {
    constructor() {
        this.name = event;
    }
    async execute(client, player) {
        await player.data
            .get('playEmbed')
            ?.edit({
            embeds: [
                client
                    .embed()
                    .desc(`**Enjoying Music with me ?**\n` +
                    `If yes, consider [reffering me](${client.invite.admin()}).`)
                    .setAuthor({
                    iconURL: client.user.displayAvatarURL(),
                    name: client.user.username,
                })
                    .thumb(client.user.displayAvatarURL()),
            ],
            components: [],
        })
            .catch(() => null);
        await client.sleep(1.5);
        if (await client.db.twoFourSeven.has(player.guildId))
            await connect247(client, player.guildId);
    }
}
/**@codeStyle - https://google.github.io/styleguide/tsguide.html */
