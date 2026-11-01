import { readdir } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import { pathToFileURL } from "node:url";
import { registerCommand } from "../handler.js";

const COMMANDS_DIR = new URL("../comandos/", import.meta.url);
const CATEGORY_ROLES = new Map([["membro", "member"], ["admin", "admin"], ["dono", "owner"]]);

async function findCommandFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue;
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findCommandFiles(fullPath));
    else if (entry.isFile() && extname(entry.name) === ".js" && entry.name !== "loader.js" && entry.name !== "index.js") files.push(fullPath);
  }
  return files;
}

export async function loadCommands() {
  const root = COMMANDS_DIR.pathname;
  let loaded = 0;
  for (const category of await readdir(root, { withFileTypes: true })) {
    const role = CATEGORY_ROLES.get(category.name);
    if (!category.isDirectory() || !role) continue;
    for (const filePath of await findCommandFiles(join(root, category.name))) {
      try {
        const imported = await import(pathToFileURL(filePath).href);
        const command = imported.default;
        if (!command || typeof command.handle !== "function" || !command.name || !Array.isArray(command.commands)) {
          throw new TypeError("O módulo precisa exportar default com name, commands[] e handle().");
        }
        registerCommand({ ...command, role });
        loaded++;
        console.log(`[comandos] ${category.name}/${relative(root, filePath)} carregado: ${command.name}`);
      } catch (error) {
        console.error(`[comandos] Falha ao carregar ${relative(root, filePath)}:`, error?.message ?? error);
      }
    }
  }
  console.log(`[comandos] ${loaded} comando(s) modular(es) carregado(s).`);
  return loaded;
}
