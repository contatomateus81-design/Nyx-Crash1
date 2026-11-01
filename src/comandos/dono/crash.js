export default {
  name: "crash",
  description: "Executa um diagnóstico seguro do tratamento de erros.",
  commands: ["crash", "testeerro"],
  usage: "!crash [erro]",
  async handle({ reply, args }) {
    if (String(args?.[0] ?? "").toLowerCase() === "erro") throw new Error("Falha simulada pelo comando crash.");
    await reply("🧪 Teste seguro concluído!\n\n✅ O comando foi carregado e executado.\n🛡️ Nenhuma mensagem pesada foi enviada e o bot não foi travado.\n\nPara testar o tratamento de erros, use crash erro.");
  }
};
