`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import * as fs from "fs";
const util = require(`util`);
import { Transform } from "stream";
import ffmpeg from "fluent-ffmpeg";
import { writeFile } from "fs/promises";
const Oops = require(`../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
const VOID = require(`../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const { Sticker } = require("wa-sticker-formatter");
import Image_Button from "../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Image_Button";
const { TelegraPh } = require(`../𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/uploader`);
import { MessageType } from "../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/message-type";
import { downloadContentFromMessage } from "@adiwajshing/baileys";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const DMedia = async (
TUF: any,
Fox: any,
ǟʀɢʊʍɛռȶ: any,
Vʟӄʏʀɛ: any,
FileID: string,
FileSocket: { message: any; type: any }
): Promise<void> => {
try {
const FileName: string = "./𝐕𝐥𝐤𝐲𝐫𝐞🐞𝐁𝐞𝐞𝐭𝐥𝐞/" + FileID + ".png";
const FileStream: Transform = await downloadContentFromMessage(
FileSocket.message,
FileSocket.type
);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const saveBuffer = async (
FileName: string,
FileStream: Transform
): Promise<void> => {
let buffer = Buffer.from([]);
for await (const chunk of FileStream) {
buffer = Buffer.concat([buffer, chunk]);
}
await writeFile(FileName, buffer);
};
await saveBuffer(FileName, FileStream);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
if (Vʟӄʏʀɛ.type === "image" || Vʟӄʏʀɛ.isReplyImage) {
console.log("Image Received");
let gotTgh = await TelegraPh(FileName);
await Image_Button.VImg(
TUF,
Fox,
Vʟӄʏʀɛ,
`🔗𝐔𝐫𝐥: ${util.format(gotTgh)}`,
FileName
);
return await VOID.VOID(FileName);
}
} catch (error) {
console.log(error);
}
};
export = {
VDmed: DMedia,
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
