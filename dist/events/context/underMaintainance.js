/**
 * @fuego v1.0.0
 * @author painfuego (www.codes-for.fun)
 * @copyright 2024 1sT - Services | CC BY-NC-SA 4.0
 */
const event = 'underMaintenance';
export default class UnderMaintainance {
    constructor() {
        this.name = event;
        this.execute = async (client, ctx) => {
            await ctx.reply({
                embeds: [
                    client
                        .embed()
                        .desc(`ㅤㅤㅤㅤ **Maintenance Break** ㅤㅤㅤ\n\n` +
                        `${client.emoji.cross} This action's temporarily unavailable.\n` +
                        `${client.emoji.info} Sorry for any & all inconvenience/(s).\n` +
                        `${client.emoji.info} All service/(s) will be resumed soon.\n` +
                        `${client.emoji.info} Join my **[Support Server](${client.config.links.support})** for updates.\n`),
                ],
            });
        };
    }
}
/**@codeStyle - https://google.github.io/styleguide/tsguide.html */
