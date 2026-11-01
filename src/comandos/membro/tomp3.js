import '../../legacy-commands/tomp3.js';
import { getCommand, registerCommand } from '../../handler.js';
const commandName = "tomp3";
const implementation = getCommand(commandName);
registerCommand({ name: commandName, aliases: ["mp3","videomp3","audiomp3"], role: "membro", async execute(ctx) {
  switch (ctx.command) {
    case commandName:
      if (!implementation) throw new Error('Implementação não encontrada: ' + commandName);
      return implementation.execute(ctx);
    default:
      return ctx.reply('Comando não reconhecido neste arquivo.');
  }
} });
