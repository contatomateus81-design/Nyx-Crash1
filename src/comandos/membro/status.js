import '../../legacy-commands/status.js';
import { getCommand, registerCommand } from '../../handler.js';
const commandName = "status";
const implementation = getCommand(commandName);
registerCommand({ name: commandName, aliases: ["estado","botstatus"], role: "membro", async execute(ctx) {
  switch (ctx.command) {
    case commandName:
      if (!implementation) throw new Error('Implementação não encontrada: ' + commandName);
      return implementation.execute(ctx);
    default:
      return ctx.reply('Comando não reconhecido neste arquivo.');
  }
} });
