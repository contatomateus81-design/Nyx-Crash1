import { config } from "../../config.js";

export default {
  name: "say",
  description: "Faz a Nyx repetir uma mensagem.",
  commands: ["say", "dizer"],
  usage: "!say mensagem",
  async handle({ reply, args }) {
    if (!args.length) return reply(`Uso: ${config.prefix}say <mensagem>`);
    await reply(args.join(" "));
  }
};
