import { config } from "../../config.js";
const answers = ["Com certeza! ✨","Parece promissor.","Melhor não contar com isso.","Pergunte novamente mais tarde.","As chances são boas!","Não parece provável.","Confie na sua intuição."];
export default {
  name: "bola8",
  description: "Responde a uma pergunta de forma divertida.",
  commands: ["bola8", "8ball"],
  usage: "!bola8 sua pergunta",
  async handle({ reply, args }) {
    if (!args.length) return reply(`Faça uma pergunta. Ex.: ${config.prefix}bola8 vou ter sorte hoje?`);
    await reply(`🎱 ${answers[Math.floor(Math.random() * answers.length)]}`);
  }
};
