import '../../legacy-commands/fun.js';
import { getCommand, registerCommand } from '../../handler.js';
const commandName = "bola8";
const implementation = getCommand(commandName);
registerCommand({ name: commandName, aliases: ["8ball"], role: "membro", async execute(ctx) {
  switch (ctx.command) {
    case commandName:
      if (!implementation) throw new Error('Implementação não encontrada: ' + commandName);
      return implementation.execute(ctx);
    default:
      return ctx.reply('Comando não reconhecido neste arquivo.');
  }
} });
