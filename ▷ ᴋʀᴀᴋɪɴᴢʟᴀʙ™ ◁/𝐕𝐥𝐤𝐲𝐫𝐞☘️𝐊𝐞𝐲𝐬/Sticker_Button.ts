`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import { MessageType } from "../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import ʟᴀʏᴏᴜᴛ from "../𝐕𝐥𝐤𝐲𝐫𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
const Sticker_Button = async (
TUF: any,
Fox: any,
Vʟӄʏʀɛ: any,
ǟʀɢʊʍɛռȶ: any,
caption: any,
media: any
): Promise<void> => {
try {
if (ǟʀɢʊʍɛռȶ[0] && ǟʀɢʊʍɛռȶ[0].startsWith("@")) {
let TagPerson: any = ǟʀɢʊʍɛռȶ[0].replace(/[^0-9]/g, "");
let TagMention: any = TagPerson + "@s.whatsapp.net";
await TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
{
quoted: Fox,
timestamp: Date(),
gifPlayback: true,
contextInfo: { mentionedJid: [Vʟӄʏʀɛ.sender, TagMention] },
video: { url: media },
mimetype: "video/mp4",
caption: caption,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐞𝐭𝐚❗ ⦔*",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}support`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}support` },
type: 1,
}
],
headerType: 5,
},
MessageType.buttonsMessage
);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
} else if (Vʟӄʏʀɛ.isTextReply) {
let Receiver: any =
Fox.message.extendedTextMessage.contextInfo.participant;
let քɛʀֆօռɢօȶռʊʍ: any = Receiver.substring(0, Receiver.length - 15);
await TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
{
quoted: Fox,
timestamp: Date(),
gifPlayback: true,
contextInfo: { mentionedJid: [Vʟӄʏʀɛ.sender, Receiver] },
video: { url: media },
mimetype: "video/mp4",
caption: caption,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐞𝐭𝐚❗ ⦔*",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu` },
type: 1,
},
],
headerType: 5,
},
MessageType.buttonsMessage
);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
} else {
await TUF.sendMessage(
Vʟӄʏʀɛ.chatId,
{
quoted: Fox,
timestamp: Date(),
gifPlayback: true,
contextInfo: { mentionedJid: [Vʟӄʏʀɛ.sender] },
video: { url: media },
mimetype: "video/mp4",
caption: caption,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 𝐁𝐞𝐭𝐚❗ ⦔*",
buttons: [
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}help`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}help` },
type: 1,
},
{
buttonId: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu`,
buttonText: { displayText: `${ʟᴀʏᴏᴜᴛ.MuveOn}menu` },
type: 1,
},
],
headerType: 5,
},
MessageType.buttonsMessage
);
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
} catch (error) {
console.log(error);
}
};
export = {
VSbt: Sticker_Button,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
