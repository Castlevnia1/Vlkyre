const imdb = require("imdb-api");
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ᴍᴇᴇgit = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `imdb`,
  commandType: "Fun⚡",
  description: `This command was built to find any IMDB movie/series.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await ᴍᴇᴇgit.fetch();
    var Sender = ᴍᴇᴇ6.sender;
    var ɴᴇᴡᴍᴇᴇ6 = await ᴍᴇᴇgit.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡᴍᴇᴇ6.total != 0) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.logGroup,
          `⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
*⬡ 👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙 ⬡*

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
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
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      if (arg.length === 0) {
        await ʍɛɛℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        return;
      }
      const imob = new imdb.Client({
        apiKey: ꜱɪɢɴ.IMDB,
      });
      let movie = await imob.get({
        name: arg.join(" "),
      });
      const Litol = `*💡𝐓𝐢𝐭𝐥𝐞➛*  ${movie.title.toUpperCase()}
*🕜𝐓𝐢𝐦𝐞➛*  ${movie.runtime}
*📚𝐆𝐞𝐧𝐫𝐞𝐬➛*  ${movie.genres}
*😎𝐀𝐜𝐭𝐨𝐫𝐬➛*  ${movie.actors}
*🙋🏽𝐕𝐨𝐭𝐞𝐬➛*  ${movie.votes}
*⭐𝐑𝐚𝐭𝐢𝐧𝐠➛*  ${movie.rating}
*🔩𝐓𝐲𝐩𝐞➛*  ${movie.type}
*🌐𝐂𝐨𝐮𝐧𝐭𝐫𝐲➛*  ${movie.country}
*🎥𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫➛*  ${movie.director}
*✒️𝐖𝐫𝐢𝐭𝐞𝐫➛*  ${movie.writer}
*📜𝐒𝐞𝐫𝐢𝐞𝐬➛*  ${movie.series}
*🔗𝐈𝐦𝐝𝐛𝐮𝐫𝐥➛*  ${movie.imdburl}
*❓𝐏𝐥𝐨𝐭➛*  ${movie.plot}`;
      console.log(Litol);
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: movie.poster,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: Litol,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
