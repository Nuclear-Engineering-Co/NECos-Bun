/**
 * @name auditLogs.ts
 * @description Extends the BaseExtension class to create an audit log manager.
 * @author imskyyc
 * @repository https://github.com/Nuclear-Engineering-Co/NECos
 * @license AGPL3
 * @copyright Copyright (C) 2022 imskyyc (https://github.com/imskyyc)
   This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

 * @param { typeof NECos }
 */

import { BaseExtension } from "../classes/BaseExtension.js";
import { Guild as DiscordGuild, APIEmbed } from "discord.js";
import { Guild } from "../../Interfaces.js";
import { Knex } from "knex";

export default class AuditLogs extends BaseExtension {
  queue = {};
  cooldowns = {};

  constructor(NECos) {
    super(NECos);
  }

  push = async (guild: DiscordGuild, embedData: APIEmbed): Promise<void> => {
/*    const auditEmbed = this.Bot.createEmbed(embedData);
    const database: Knex = this.NECos.database;

    const guildConfig = database<Guild>("guilds")
      .select("configuration")
      .where("guild_id", guild.id)
      .first().configuration;

    const auditLogChannelId = JSON.parse(guildConfig).channels.auditLogs;
    if (!auditLogChannelId) return;

    const auditLogChannel = await guild.channels.resolve(auditLogChannelId);
    if (!auditLogChannel) return;

    await auditLogChannel.send({
      embeds: [auditEmbed],
    });*/
  };

  // Loader functions
  up = async () => {};

  down = async () => {};
}
