import { config } from "../../config.js";

export default {
  name: "botname",
  description: "Mostra o nome configurado para o bot.",
  commands: ["botname", "nomebot"],
  usage: "!botname",
  async handle({ reply }) {
    await reply(`Nome configurado: ${config.name}. Para mudar, edite BOT_NAME no arquivo .env e reinicie.`);
  }
};
