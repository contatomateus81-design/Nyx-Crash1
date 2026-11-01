export default {
  name: "ping",
  description: "Testa a resposta da Nyx.",
  commands: ["ping"],
  usage: "!ping",
  async handle({ reply }) { await reply("Pong! 🏓 Nyx está online."); }
};
