("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
let ᴋᴏʟᴏʀ = require("chalk");
let ʏᴛꜱ = require("yt-search");
let ɴᴏᴅᴇꜰᴇᴛᴄʜ = require("node-fetch");
let ɢᴇᴛᴠɪᴅᴇᴏɪᴅ = require("get-video-id");
let { yta } = require("../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/y2mate");
let { getBuffer } = require(`../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let { yta_var } = require("../Ѷ𝖑𝐤𝐲𝖗𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/letiableServers");
// let ᴄʀᴏɴ = require("node-cron");
// ᴄʀᴏɴ.schedule("*/30 * * * * *", async () => {
// await ᴘᴏᴡ();
// });
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.ᴋʀᴀᴋɪɴᴢʟᴀʙʀᴀᴅɪᴏ = async (Ѷ𝖑𝐤𝐲𝖗𝖊, 𝖍𝖆𝖜ӄ) => {
console.log(
ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("🍯𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐀𝐭: "), ᴋᴏʟᴏʀ.bgYellow(new Date()))
);
try {
let ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ = 15;
let ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ = false;
let ᴍᴀɪɴᴜʀʟ = "";
let ᴄᴏʀᴇꜰᴇᴛᴄʜ;
if (typeof window === "undefined") {
ᴄᴏʀᴇꜰᴇᴛᴄʜ = ɴᴏᴅᴇꜰᴇᴛᴄʜ;
} else {
ᴄᴏʀᴇꜰᴇᴛᴄʜ = fetch;
}
let playlists = [
{
name: "most-viewed",
id: "PL15B1E77BB5708555",
max: 543,
},
{
name: "billboard",
id: "PL55713C70BA91BD6E",
max: 200,
},
{
name: "latest",
id: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
max: 100,
},
{
name: "popular-music-videos",
id: "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
max: 200,
},
{
name: "top-hits-this-week",
id: "PLw-VjHDlEOgvWPpRBs9FRGgJcKpDimTqf",
max: 130,
},
];
let app = {
playlist: {},
index: null,
baseURL: "https://www.youtube.com/embed/?list={0}&index={1}",
queryStrings:
"&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=1&amp;wadsworth=1",
iframeSrc: "",
};
String.prototype.format = function () {
let string = this;
for (let i = 0; i < arguments.length; i++) {
let regexp = new RegExp("\\{" + i + "\\}", "gi");
string = string.replace(regexp, arguments[i]);
}
return string;
};
function ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(num) {
return Math.floor(Math.random() * num);
}
function ɢᴇᴛᴘʟᴀʏʟɪꜱᴛ() {
let loc = ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(playlists.length);
return playlists[loc];
}
function ɢᴇᴛᴇᴍʙᴇᴅᴍᴜꜱɪᴄᴠɪᴅᴇᴏᴜʀʟ() {
let playlist = ɢᴇᴛᴘʟᴀʏʟɪꜱᴛ();
let index = ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(playlist.max);
return app.baseURL.format(playlist.id, index) + app.queryStrings;
}
async function getMainSiteYoutubeMusicVideoUrl(embedUrl) {
if (embedUrl == null) {
throw new Error("embedUrl is null");
}
let res = await ᴄᴏʀᴇꜰᴇᴛᴄʜ(embedUrl);
let txt = await res.text();
let realUrlStartIdx = txt.indexOf("https://www.youtube.com/watch?v=");
if (realUrlStartIdx === -1) {
return embedUrl;
}
let realUrlEndIdx = txt.indexOf("'", realUrlStartIdx);
if (realUrlEndIdx === -1) {
return embedUrl;
}
return txt.substring(realUrlStartIdx, realUrlEndIdx);
}
async function ʀꜰᴏᴜɴᴅ(preventEmbedded) {
while (ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ > 0) {
ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ--;
let embedUrl = ɢᴇᴛᴇᴍʙᴇᴅᴍᴜꜱɪᴄᴠɪᴅᴇᴏᴜʀʟ();
ᴍᴀɪɴᴜʀʟ = await getMainSiteYoutubeMusicVideoUrl(embedUrl);
ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ =
ᴍᴀɪɴᴜʀʟ.indexOf("https://www.youtube.com/embed/?list=") !== -1;
if (!ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ) {
return ᴍᴀɪɴᴜʀʟ;
}
}
if (preventEmbedded && ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ) {
return null;
}
return ᴍᴀɪɴᴜʀʟ;
}

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let ᴛᴜʙᴇʟ = await ʀꜰᴏᴜɴᴅ();
let { id } = ɢᴇᴛᴠɪᴅᴇᴏɪᴅ(ᴛᴜʙᴇʟ);
if (!id) return;
let ꜰꜰᴏᴜɴᴅ = await ʏᴛꜱ(id);
let ᴛꜰᴏᴜɴᴅ = ꜰꜰᴏᴜɴᴅ.videos.slice(0, 1);
if (!ᴛꜰᴏᴜɴᴅ) return;
if (!ꜰꜰᴏᴜɴᴅ) return;
ᴛꜰᴏᴜɴᴅ.forEach(async function (ᴛᴜʙᴇ) {
console.log(
ᴋᴏʟᴏʀ.black(
ᴋᴏʟᴏʀ.bgWhite("🐙𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐫𝐞𝐝 𝐀𝐭: "),
ᴋᴏʟᴏʀ.bgMagenta(new Date())
)
);
console.log(`𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™

🍻𝐓𝐢𝐭𝐥𝐞: ${ᴛᴜʙᴇ.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${ᴛᴜʙᴇ.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${ᴛᴜʙᴇ.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${ᴛᴜʙᴇ.author.name}
🔗𝐋𝐢𝐧𝐤: ${ᴛᴜʙᴇ.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${ᴛᴜʙᴇ.description}`);
try {
let { DLoader } = await yta_var(ᴛᴜʙᴇ.url, "en136");
return await 𝖍𝖆𝖜ӄ.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
audio: { url: DLoader },
contextInfo: {
externalAdReply: {
title: `🍻𝐓𝐢𝐭𝐥𝐞: ${ᴛᴜʙᴇ.title}`,
body: `ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ⭕ʀᴀᴅɪᴏ`,
mediaType: 2,
thumbnail: await getBuffer(ᴛᴜʙᴇ.thumbnail),
mediaUrl: ᴛᴜʙᴇ.thumbnail,
},
},
mimetype: `audio/mpeg`,
fileName: `${ᴛᴜʙᴇ.title}.mp3`,
},
{ quoted: Ѷ𝖑𝐤𝐲𝖗𝖊 }
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} catch (𝕰𝖗𝖗𝖔𝖗) {
console.log(
ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("⚠️𝕰𝖗𝖗𝖔𝖗: "), ᴋᴏʟᴏʀ.bgRed(𝕰𝖗𝖗𝖔𝖗))
);
let ᴍᴇᴅɪᴀ = await yta(ᴛᴜʙᴇ.url, "128kbps");
return await 𝖍𝖆𝖜ӄ.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
audio: { url: ᴍᴇᴅɪᴀ.DLoader },
contextInfo: {
externalAdReply: {
title: `🍻𝐓𝐢𝐭𝐥𝐞: ${ᴛᴜʙᴇ.title}`,
body: `ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ⭕ʀᴀᴅɪᴏ`,
mediaType: 2,
thumbnail: await getBuffer(ᴛᴜʙᴇ.thumbnail),
mediaUrl: ᴛᴜʙᴇ.thumbnail,
},
},
mimetype: `audio/mpeg`,
fileName: `${ᴛᴜʙᴇ.title}.mp3`,
},
{ quoted: Ѷ𝖑𝐤𝐲𝖗𝖊 }
);
}
});
} catch (𝕰𝖗𝖗𝖔𝖗) {
console.log(ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("⚠️𝕰𝖗𝖗𝖔𝖗: "), ᴋᴏʟᴏʀ.bgRed(𝕰𝖗𝖗𝖔𝖗)));
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");