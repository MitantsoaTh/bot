module.exports = {
  config: {
    name: "pv",
    aliases: ["privatemessage","pm"],
    version: "1.0",
    author: "Aesther",
    countDown: 1,
    role: 0,
    shortDescription: {
      en: "message Anonime pour les PV et se faire accepter par le 𝗕𝗢𝗧☂️"
    },
    longDescription: {
      en: "Envoyer des messages par le bot"
    },
    category: "𝗔𝗖𝗖𝘀",
    guide:{
      en: "{p}𝗣𝗩 𝗨𝗜𝗗 text"
    }
  },
  onStart: async function ({ api, event, args }) {
    if (args.length < 2) {
      return api.sendMessage(
        "Syntax error, use: anon ID_BOX [message]",
        event.threadID,
        event.messageID
      );
    }

    const idBox = args[0];
    const message = args.slice(1).join(" ");

    api.sendMessage({
      body: message,
      mentions: [{
        tag: "@pm",
        id: event.senderID
      }]
    }, idBox, () => {
      api.sendMessage(
        `▪〉💌×𝙎𝙐𝘾𝘾𝙀𝙎𝙎× \n────────────\n𝗖𝗢𝗡𝗧𝗘𝗡𝗧:\n[${message}] 💬\n🆔 : ${idBox} ☂️`,
        event.threadID
      );
    });
  }
};
