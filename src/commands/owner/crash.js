export default {
  name: "crash",
  description: "Executa um diagnóstico seguro do carregamento e do tratamento de erros.",
  commands: ["crash", "testeerro"],
  usage: "!crash [erro]",
  async handle({ reply, args }) {
    const mode = String(args?.[0] ?? "teste").toLowerCase();
    if (mode === "erro") {
      // Falha simulada e controlada: o handler captura o erro e responde sem travar o processo.
      throw new Error("Falha simulada pelo comando crash.");
    }
    await reply(
      "🧪 Teste seguro da Nyx concluído!\n\n" +
      "✅ O comando crash.js foi carregado e executado.\n" +
      "🛡️ Nenhuma mensagem pesada foi enviada e o bot não foi travado.\n\n" +
      "Para testar o tratamento de erros, use o comando crash erro."
    );
  }
};
