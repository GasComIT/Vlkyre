`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const UserPrivate = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
import { MessageType } from "../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
const BanPerson = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const NsfwList = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanGroup = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Bagde = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`../𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
const Downloader = require(`nodejs-file-downloader`);
const VOID = require(`../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
import Client from "../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/TUF";
import ʟᴀʏᴏᴜᴛ from "../𝐕𝐥𝐤𝐲𝐫𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import Kolor from "chalk";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const participants_update = async (update: any, ӄ𝖗𝖞ӄ𝖓𝖟: any): Promise<void> => {
const Latest___ = update.participants[0];
let client: Client = new Client(ӄ𝖗𝖞ӄ𝖓𝖟);
let 𝐏𝐩𝐢𝐜: any;
for (let i of update.participants) {
try {
𝐏𝐩𝐢𝐜 = await ӄ𝖗𝖞ӄ𝖓𝖟.profilePictureUrl(i, "image");
} catch {
𝐏𝐩𝐢𝐜 = "./𝐕𝐥𝐤𝐲𝐫𝐞👜𝐁𝐚𝐠/Vʟӄʏʀɛ.png";
}
}
const GroupMemData = await ӄ𝖗𝖞ӄ𝖓𝖟.groupMetadata(update.id);
const GroupMemG = GroupMemData.participants.length;
const ᴘᴘᴡᴇʟᴄᴏᴍᴇ = Latest___.replace(/[^\d-]/g, "");
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (update.action === "add") {
await Welcome.findOne(
{
ID: update.id,
},
async (error: any, userWel: any) => {
if (error) console.log(error);
if (!userWel) return;
await client
.sendMessage(
update.id,
{
contextInfo: { mentionedJid: [Latest___, update.participants] },
timestamp: Date(),
image: { url: 𝐏𝐩𝐢𝐜 },
caption: `「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢® 」
┌─「 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 」
├• @${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}
└────────────◇
┌─「 𝐌𝐞𝐦𝐛𝐞𝐫 」
├• ${GroupMemG}
└────────────◇
┌─「 𝐆𝐫𝐨𝐮𝐩 」
├• ${GroupMemData.subject}
└────────────◇


${userWel.message}`,
footer: `⦓ 𝐕𝐥𝐤𝐲𝐫𝐞 ⦔`,
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}rules` },
type: 1,
},
],
headerType: 4,
},
MessageType.buttonsMessage
)
.catch((error: any) => console.log(error));
}
);
} else if (update.action === "remove") {
return;
}
};
export = {
participants_update: participants_update,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
