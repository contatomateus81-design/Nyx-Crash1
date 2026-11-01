import { config } from "../../config.js";
export default {
  name: "escolher",
  description: "Escolhe uma opção aleatória.",
  commands: ["escolher", "choose"],
  usage: "!escolher opção 1 | opção 2",
  async handle({ reply, args }) {
    const options = args.join(" ").split("|").map(item => item.trim()).filter(Boolean);
    if (options.length < 2) return reply(`Uso: ${config.prefix}escolher opção 1 | opção 2`);
    await reply(`🎲 Minha escolha: *${options[Math.floor(Math.random() * options.length)]}*`);
  }
};
