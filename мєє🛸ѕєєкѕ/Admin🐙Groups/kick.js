const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
module.exports = {
  name: `kick`,
  commandType: "Admin🐙Groups",
  description: `Use this command to kick people from a group by tagging them  *${ꜱɪɢɴ.Mee6IX}kick @<person-to-kick>*  or replying to them  *${ꜱɪɢɴ.Mee6IX}kick*${ꜱɪɢɴ.Mee6IX}`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (!ᴍᴇᴇ6.isSenderGroupAdmin) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴄᴏᴍᴍᴀɴᴅ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    if (!ᴍᴇᴇ6.isGroup) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `command only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    let owner = ᴍᴇᴇ6.chatId.split(`-`)[0];
    if (ᴍᴇᴇ6.isReply) {
      let PersonToRemove =
        chat.message.extendedTextMessage.contextInfo.participant;
      if (PersonToRemove === owner + `@s.whatsapp.net`) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*` + owner + ` is the owner of the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        return;
      }
      if (PersonToRemove === ᴍᴇᴇ6.owner) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Why man, why?! Why would you use my powers to kick myself from the group?!🥺\n*Request Rejected.* 😤`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        return;
      }
      var isMember = async (chatId, groupMembers) => {
        var isMember = false;
        if (!(chatId === undefined)) {
          for (const index in groupMembers) {
            if (chatId == groupMembers[index].jid.split(`@`)[0]) {
              isMember = true;
            }
          }
          return isMember;
        } else {
          return isMember;
        }
      };
      if (!isMember) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*person is not in the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
      }
      try {
        if (PersonToRemove) {
          υℓтяσηℓιєηт
            .groupRemove(ᴍᴇᴇ6.chatId, [PersonToRemove])
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          return;
        }
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
      return;
    }
    if (!Arc[0]) {
      υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ꜱɪɢɴ.Mee6IX}kick @<person-to-kick>*  or reply using  *${ꜱɪɢɴ.Mee6IX}kick*${ꜱɪɢɴ.Mee6IX}`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (Arc[0][0] == `@`) {
      const number = Arc[0].substring(1);
      if (isNaN(number)) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ꜱɪɢɴ.Mee6IX}kick @<person-to-kick>*  or reply using  *${ꜱɪɢɴ.Mee6IX}kick*${ꜱɪɢɴ.Mee6IX}`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        return;
      }

      if (number + `@s.whatsapp.net` === ᴍᴇᴇ6.owner) {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Why man, why?! Why would you use my powers to kick myself from the group?!🥺\n*Request Rejected.* 😤`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        return;
      }

      if (!(number === owner)) {
        υℓтяσηℓιєηт
          .groupRemove(ᴍᴇᴇ6.chatId, [number + `@s.whatsapp.net`])
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        return;
      } else {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `*` + owner + ` is the owner of the group*`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
          });
        return;
      }
    }
    υℓтяσηℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        `Reply to the person you want to kick or tag them.\n\nFor instance,  *${ꜱɪɢɴ.Mee6IX}kick @<person-to-kick>*  or reply using  *${ꜱɪɢɴ.Mee6IX}kick*${ꜱɪɢɴ.Mee6IX}`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================