const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const akaneko = require(`akaneko`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `ass`,
  commandType: "Nsfw🔞",
  description: `ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    var Sender = ᴍᴇᴇ6.sender;
    var personsending = Sender.substring(0, Sender.length - 15);
    const ᴍᴇᴇgit = require("simple-git")();
    await ᴍᴇᴇgit.fetch();
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      console.log(ɴᴇᴡᴍᴇᴇ6);
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.logGroup,
          `*⦿𝐌𝐞𝐞𝟔™   ⬡••••••••⬡*
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } else {
      console.log("No commits to pull");
    }
    if (ᴍᴇᴇ6.chatId === "120363022474862829@g.us") {
      return await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: await akaneko.nsfw.ass(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            contextInfo: {
              mentionedJid: [ᴍᴇᴇ6.sender],
            },
            caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*⬡ 👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙 ⬡*

Nsfw Topic: *Ass*
Asked By? @${personsending} (admin)`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us" && !ᴍᴇᴇ6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*⬡ 👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙 ⬡*

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [ᴍᴇᴇ6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    } else {
      if (ᴍᴇᴇ6.isGroup && !ᴍᴇᴇ6.isSenderGroupAdmin) {
        return await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.ERROR,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: `
  ⚠️𝗘𝗿𝗿𝗼𝗿: 
  ➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩
  
  ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
  ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴀɴʏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅꜱ ʜᴇʀᴇ..
  `,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      } else {
        return await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: await akaneko.nsfw.ass(),
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              contextInfo: {
                mentionedJid: [ᴍᴇᴇ6.sender],
              },
              caption: `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*⬡ 👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙 ⬡*

Nsfw Topic: *Ass*
Asked By? @${personsending} (admin)`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      }
    }
  },
};
