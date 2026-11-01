// Personalize estes dados antes de conectar o bot ao WhatsApp.
export const config = {
  name: "Nyx Bot",
  ownerName: "Seu nome",
  ownerNumber: "", // DDI + DDD + número, somente dígitos. Ex.: 5511999999999
  prefix: "!",
  sessionDir: "sessions",
  pairingCode: true,
  piperModel: "", // Caminho do modelo Piper .onnx; opcional.
  piperBin: "piper",
  ffmpegBin: "ffmpeg",
};

export function validateConfig() {
  config.ownerNumber = String(config.ownerNumber ?? "").replace(/\D/g, "");
  config.ownerName = String(config.ownerName ?? "").trim();
  config.name = String(config.name ?? "").trim();
  config.prefix = String(config.prefix ?? "").trim();

  if (!config.ownerNumber) throw new Error("Configure config.ownerNumber em src/config.js com DDI + DDD + número, somente dígitos.");
  if (config.ownerNumber.length < 10 || config.ownerNumber.length > 15) throw new Error("config.ownerNumber parece inválido. Use o número completo com código do país.");
  if (!config.ownerName || config.ownerName === "Seu nome") throw new Error("Configure config.ownerName em src/config.js com o nome do proprietário.");
  if (!config.name) throw new Error("Configure config.name em src/config.js.");
  if (!config.prefix) throw new Error("Configure config.prefix em src/config.js.");
}
