("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let animals = require(`../../Ѷ𝖑𝐤𝐲𝖗𝖊❗𝕵𝖘𝖔𝖓/animals.json`);
let Zoology = require(`../../Ѷ𝖑𝐤𝐲𝖗𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/zoo`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
let Economy = require(`../../Ѷ𝖑𝐤𝐲𝖗𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let { Video_Button } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
let { Bot_Not_Admin } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.zoo = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
mentionByTag,
mentionByReply
) => {
await Economy.findOne(
{
ID: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊, Èrrðr);
if (!userEco) {
let newUser = new Economy({
ID: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊, Èrrðr));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
"./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_DB.png",
`╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
◇ *Type:* _Just Bought A Zoo!_`
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
await Zoology.findOne(
{
ID: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
},
async (Èrrðr, userZoo) => {
if (Èrrðr) return Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊, Èrrðr);
if (!userZoo) {
let newUser = new Zoology({
ID: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
zoodone: Date.now(),
zootimeout: 1800000,
});
await newUser
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊, Èrrðr));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
"./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_Forest.png",
`╔◇══════════◇╗
┊  𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════◇╝

🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
◇ *Type:* _Nothing Found_`
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
let time = ms(
userZoo.zootimeout - (Date.now() - userZoo.zoodone)
);
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
"./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_Forest.png",
`╔◇══════════◇╗
┊  𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
let zooID = Math.floor(Math.random() * 10) + 1;
let rarity;
if (zooID < 5) rarity = `small`;
else if (zooID < 8) rarity = `medium`;
else if (zooID < 9) rarity = `big`;
else if (zooID < 10) rarity = `large`;
else rarity = `legendary`;
let anim = animals[rarity];
let worth =
Math.floor(Math.random() * (anim.max - anim.min + 1)) +
anim.min;
userEco.money = userEco.money + worth;
userZoo.zoodone = Date.now();
userZoo.zootimeout = 1800000;
await userZoo
.save()
.catch((Èrrðr) => Caught(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊, Èrrðr));
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
"./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_Forest.png",
`╔◇══════════◇╗
┊  𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════◇╝

🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`
);
}
}
}
);
}
}
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
