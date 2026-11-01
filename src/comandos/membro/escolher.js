import '../../legacy-commands/fun.js';
import { getCommand, registerCommand } from '../../handler.js';

const commandName = "escolher";
const implementation = getCommand(commandName);

registerCommand({
  name: commandName,
  aliases: ["choose"],
  role: "membro",
  async execute(ctx) {
    switch (ctx.command) {
      case commandName:
        if (!implementation) throw new Error('Implementação não encontrada: ' + commandName);
        return implementation.execute(ctx);
      default:
        return ctx.reply('Comando não reconhecido neste arquivo.');
    }
  },
});
