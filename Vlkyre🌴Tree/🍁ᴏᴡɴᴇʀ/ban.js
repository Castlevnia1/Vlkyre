("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
require("../../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Vlkyre🖋️Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Vlkyre👒Hat/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Vlkyre🧭Compass/Group_Only");
let { Image_Button } = require("../../Vlkyre👒Hat/Image_Button");
let { Video_Button } = require("../../Vlkyre👒Hat/Video_Button");
let { Bot_Not_Admin } = require("../../Vlkyre🧭Compass/Bot_Not_Admin");
let userBanCheck = require("../../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
let { Sender_Not_Admin } = require("../../Vlkyre🧭Compass/Sender_Not_Admin");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Vlkyre👒Hat/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.ban = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
) => {
if (!Vlyre.fromMe && !isSenderTUF) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlyre,
`*❌ERROR:* Owner & Mod only command!

*⚡USAGE:* ${prefix}${Final_Name} _reply to person to ban_
${prefix}${Final_Name} _don't reply to anyone and group will be banned_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Vlyre.mentionByReply) {
let repliedPerson =
Vlyre.mtype == "extendedTextMessage" &&
Vlyre.message.extendedTextMessage.contextInfo != null
? Vlyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
let repliedPersonNum = repliedPerson.substring(
0,
repliedPerson.length - 15
);
await userBanCheck.findOne(
{
ID: repliedPerson,
},
async (error, userBan) => {
if (error) return console.log(error);
if (!userBan) {
let newUser = new userBanCheck({
ID: repliedPerson,
});
await newUser.save();
return await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
Vlyre.chatID,
{
contextInfo: { mentionedJid: [Vlyre.sender, repliedPerson] },
image: { url: "./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png" },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ɴᴀᴍᴇ:* ${Vlyre.pushName || "No_Name"}
║ *⚡ɪᴅ:* ${Vlyre.chatID.split("@")[0]}
╚═══════╝


*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} Has Been Banned and Bot won't Respond to that dumbo!`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlyre,
}
);
} else {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlyre,
Vlyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png",
`*❌𝗘𝗿𝗿𝗼𝗿:* That Person Is Already banned!`
);
}
}
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else if (!Vlyre.mentionByReply) {
await userBanCheck.findOne(
{
ID: Vlyre.chatID,
},
async (error, userBan) => {
if (error) return console.log(error);
if (!userBan) {
let newUser = new userBanCheck({
ID: Vlyre.chatID,
});
await newUser.save();
return await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
Vlyre.chatID,
{
image: { url: "./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png" },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ɴᴀᴍᴇ:* ${Vlyre.pushName || "No_Name"}
║ *⚡ɪᴅ:* ${Vlyre.chatID.split("@")[0]}
╚═══════╝


*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${Vlyre.groupMetadata.subject} Group Has Been Banned!`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlyre,
}
);
} else {
return await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlyre,
Vlyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Matte.png",
`*❌𝗘𝗿𝗿𝗼𝗿:* ${Vlyre.groupMetadata.subject} is Already Banned!`
);
}
}
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
Vlyre,
`*⚡USAGE:* ${prefix}${Final_Name} _reply to person to ban_
${prefix}${Final_Name}* _don't reply to anyone and group will be banned_`
);
}
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
