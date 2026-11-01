import '../../legacy-commands/crash.js';
import { getCommand, registerCommand } from '../../handler.js';
const commandName = 'crash';
const implementation = getCommand(commandName);
registerCommand({ name: commandName, aliases: ['testeerro'], role: 'dono', async execute(ctx) { switch(ctx.command) { case commandName: if(!implementation) throw new Error('Implementação de diagnóstico não encontrada.'); return implementation.execute(ctx); default: return ctx.reply('Comando não reconhecido.'); } } });
