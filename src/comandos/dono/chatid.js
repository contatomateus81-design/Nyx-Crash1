export default {
  name: "chatid",
  description: "Mostra o identificador deste chat.",
  commands: ["chatid", "idchat"],
  usage: "!chatid",
  async handle({ reply, chatJid }) { await reply(`ID deste chat: ${chatJid}`); }
};
