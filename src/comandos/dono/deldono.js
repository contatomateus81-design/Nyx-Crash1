import '../../legacy-commands/owner.js';
import { getCommand, registerCommand } from '../../handler.js';
const commandName = 'deldono';
const implementation = getCommand(commandName);
registerCommand({ name: commandName, aliases: ['delowner','removerdono'], role: 'dono', async execute(ctx) { switch(ctx.command) { case commandName: if(!implementation) throw new Error('Implementação não encontrada: '+commandName); return implementation.execute(ctx); default: return ctx.reply('Comando não reconhecido.'); } } });
