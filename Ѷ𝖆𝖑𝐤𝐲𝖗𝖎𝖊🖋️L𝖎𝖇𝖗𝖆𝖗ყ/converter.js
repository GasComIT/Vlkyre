`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
function _0x3af2() {
const _0x460355 = [
"-vn",
"128k",
"2110212YmMXXZ",
"-b:a",
"44155iKhPhP",
"mp3",
"libopus",
"-ar",
"4NJfRKB",
"opus",
"close",
"readFile",
"220320RcAjOI",
"147uWmAZP",
"path",
"-crf",
"44100",
"child_process",
"-c:a",
"-preset",
"unlink",
"../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌",
"mp4",
"libx264",
"154664uSjmGQ",
"error",
"9IBCoPO",
"ffmpeg",
"6onyQcM",
"295696ikHRAc",
"-ac",
"1400502PyvFps",
"exports",
"join",
"-vbr",
"529700nOizfp",
"promises",
"11feWWWX",
"-ab",
"-compression_level",
"slow",
];
_0x3af2 = function () {
return _0x460355;
};
return _0x3af2();
}
const _0x12be0f = _0x24a9;
(function (_0x92b72a, _0x1fd295) {
const _0x3884f5 = _0x24a9,
_0x41afca = _0x92b72a();
while (!![]) {
try {
const _0x3aeed3 =
parseInt(_0x3884f5(0x18f)) / 0x1 +
(-parseInt(_0x3884f5(0x177)) / 0x2) *
(parseInt(_0x3884f5(0x176)) / 0x3) +
(parseInt(_0x3884f5(0x18b)) / 0x4) *
(parseInt(_0x3884f5(0x187)) / 0x5) +
-parseInt(_0x3884f5(0x179)) / 0x6 +
(-parseInt(_0x3884f5(0x190)) / 0x7) *
(-parseInt(_0x3884f5(0x172)) / 0x8) +
(parseInt(_0x3884f5(0x174)) / 0x9) *
(-parseInt(_0x3884f5(0x17d)) / 0xa) +
(parseInt(_0x3884f5(0x17f)) / 0xb) * (parseInt(_0x3884f5(0x185)) / 0xc);
if (_0x3aeed3 === _0x1fd295) break;
else _0x41afca["push"](_0x41afca["shift"]());
} catch (_0x5b0aac) {
_0x41afca["push"](_0x41afca["shift"]());
}
}
})(_0x3af2, 0x37e30);
let fs = require("fs"),
path = require(_0x12be0f(0x191)),
{ spawn } = require(_0x12be0f(0x194));
function ffmpeg(_0x5fd9f8, _0x16a529 = [], _0x17d8e6 = "", _0x7a86a8 = "") {
return new Promise(async (_0x2f9dfb, _0x1c276f) => {
const _0x1b6bd7 = _0x24a9;
try {
let _0x5e4c8f = path[_0x1b6bd7(0x17b)](
__dirname,
_0x1b6bd7(0x198),
+new Date() + "." + _0x17d8e6
),
_0x59dbce = _0x5e4c8f + "." + _0x7a86a8;
await fs["promises"]["writeFile"](_0x5e4c8f, _0x5fd9f8),
spawn(_0x1b6bd7(0x175), [
"-y",
"-i",
_0x5e4c8f,
..._0x16a529,
_0x59dbce,
])
["on"](_0x1b6bd7(0x173), _0x1c276f)
["on"](_0x1b6bd7(0x18d), async (_0x5e2db7) => {
const _0x3e4c52 = _0x1b6bd7;
try {
await fs["promises"]["unlink"](_0x5e4c8f);
if (_0x5e2db7 !== 0x0) return _0x1c276f(_0x5e2db7);
_0x2f9dfb(await fs["promises"][_0x3e4c52(0x18e)](_0x59dbce)),
await fs[_0x3e4c52(0x17e)][_0x3e4c52(0x197)](_0x59dbce);
} catch (_0x2528e4) {
_0x1c276f(_0x2528e4);
}
});
} catch (_0x5d270f) {
_0x1c276f(_0x5d270f);
}
});
}
function toAudio(_0x18ad65, _0x6736b2) {
const _0x1b1d11 = _0x12be0f;
return ffmpeg(
_0x18ad65,
[
_0x1b1d11(0x183),
_0x1b1d11(0x178),
"2",
_0x1b1d11(0x186),
"128k",
"-ar",
"44100",
"-f",
_0x1b1d11(0x188),
],
_0x6736b2,
_0x1b1d11(0x188)
);
}
function toPTT(_0xabef22, _0x2db677) {
const _0x25ab59 = _0x12be0f;
return ffmpeg(
_0xabef22,
[
_0x25ab59(0x183),
_0x25ab59(0x195),
_0x25ab59(0x189),
_0x25ab59(0x186),
_0x25ab59(0x184),
_0x25ab59(0x17c),
"on",
_0x25ab59(0x181),
"10",
],
_0x2db677,
_0x25ab59(0x18c)
);
}
function toVideo(_0x53980c, _0x2a9293) {
const _0x4bd8e6 = _0x12be0f;
return ffmpeg(
_0x53980c,
[
"-c:v",
_0x4bd8e6(0x19a),
_0x4bd8e6(0x195),
"aac",
_0x4bd8e6(0x180),
"128k",
_0x4bd8e6(0x18a),
_0x4bd8e6(0x193),
_0x4bd8e6(0x192),
"32",
_0x4bd8e6(0x196),
_0x4bd8e6(0x182),
],
_0x2a9293,
_0x4bd8e6(0x199)
);
}
function _0x24a9(_0x439539, _0x6bdb70) {
const _0x3af24e = _0x3af2();
return (
(_0x24a9 = function (_0x24a971, _0xef959a) {
_0x24a971 = _0x24a971 - 0x172;
let _0x5016d5 = _0x3af24e[_0x24a971];
return _0x5016d5;
}),
_0x24a9(_0x439539, _0x6bdb70)
);
}
module[_0x12be0f(0x17a)] = {
toAudio: toAudio,
toPTT: toPTT,
toVideo: toVideo,
ffmpeg: ffmpeg,
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;