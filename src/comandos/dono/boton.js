import { setBotPaused } from "../../store.js";

export default {
  name: "boton",
  description: "Retoma as respostas aos comandos para todos.",
  commands: ["boton"],
  usage: "!boton",
  async handle({ reply }) {
    const paused = await setBotPaused(false);
    await reply(!paused
      ? "▶️ Bot reativado. Os comandos estão liberados novamente."
      : "ℹ️ O bot já estava ativo.");
  }
};
