const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Anime_Images = require(`anime-images-api`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const download = require(`download-file`);
const ffmpeg = require(`fluent-ffmpeg`);
const Kolor = require(`chalk`);
const API = new Anime_Images();
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `wink`,
  commandType: "Anime😈",
  description: `I know you like anime wink`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    const ᴍᴇᴇgit = require("simple-git")();
    await ᴍᴇᴇgit.fetch();
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      console.log(ɴᴇᴡᴍᴇᴇ6);
      var Sender = ᴍᴇᴇ6.sender;
      var personsending = Sender.substring(0, Sender.length - 15);
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.logGroup,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*⬡ 👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙 ⬡*
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } else {
      console.log("No commits to pull");
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
      const { image } = await API.sfw.wink();
      if (image === undefined || image === 301 || image === 404) {
        await ʍɛɛℓιєηт.sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: `https://i.postimg.cc/KcNwHtZt/ltr.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `Seems Like No Image Was Found.\nPlease Try Again Later!`,
          }
        );
      } else {
        console.log(image);
        download(
          image,
          {
            directory: `./ᴛᴇᴍᴘ/`,
            filename: `wink-${chat.key.id}.gif`,
          },
          function (err) {
            0;
            if (err) {
              return console.log(err);
            } else console.log(`Download Done...`);
            const FP = `./ᴛᴇᴍᴘ/wink-${chat.key.id}.gif`;
            const SP = `./ᴛᴇᴍᴘ/wink-${chat.key.id}.webp`;
            ffmpeg(FP)
              .duration(8)
              .outputOptions([
                `-y`,
                `-vcodec libwebp`,
                `-lossless 1`,
                `-qscale 1`,
                `-preset default`,
                `-loop 0`,
                `-an`,
                `-vsync 0`,
                `-s 600x600`,
              ])
              .videoFilters(
                `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,
  format=rgba,
  pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,
  setsar=1`
              )
              .save(SP)
              .on(`end`, async () => {
                await ʍɛɛℓιєηт
                  .sendMessage(
                    ᴍᴇᴇ6.chatId,
                    fs.readFileSync(SP),
                    MessageType.sticker
                  )
                  .catch((CYΣЯЯ) =>
                    ʍɛɛℓιєηт.sendMessage(
                      ᴍᴇᴇ6.chatId,
                      `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
  
  ⚠️𝗘𝗿𝗿𝗼𝗿
  • ${CYΣЯЯ}
  
  
  💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
  🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
                      MessageType.text
                    )
                  );
                fs.unlink(FP, (cᴇʀʀᴏʀ) => {
                  if (cᴇʀʀᴏʀ) {
                    console.log(Kolor.redBright(cᴇʀʀᴏʀ));
                  } else {
                    console.log(Kolor.greenBright(`Deleted> ${FP}`));
                  }
                });
                fs.unlink(SP, (cᴇʀʀᴏʀ) => {
                  if (cᴇʀʀᴏʀ) {
                    console.log(Kolor.redBright(cᴇʀʀᴏʀ));
                  } else {
                    console.log(Kolor.greenBright(`Deleted> ${SP}`));
                  }
                });
              });
          }
        );
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
