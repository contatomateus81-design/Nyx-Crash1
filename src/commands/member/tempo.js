import { formatDuration } from "../../utils.js";

const startedAt = Date.now();

export default {
  name: "tempo",
  description: "Mostra há quanto tempo o bot está ligado.",
  commands: ["tempo", "runtime", "uptime"],
  usage: "!tempo",
  async handle({ reply }) {
    await reply(`⏱️ Tempo ligado: ${formatDuration(Date.now() - startedAt)}`);
  }
};
