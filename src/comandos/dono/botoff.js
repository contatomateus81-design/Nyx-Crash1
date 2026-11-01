import { setBotPaused } from "../../store.js";

export default {
  name: "botoff",
  description: "Pausa as respostas aos comandos para membros e administradores.",
  commands: ["botoff"],
  usage: "!botoff",
  async handle({ reply }) {
    const paused = await setBotPaused(true);
    await reply(paused
      ? "⏸️ Bot pausado. Apenas o dono poderá continuar usando os comandos."
      : "ℹ️ O bot já estava pausado.");
  }
};
