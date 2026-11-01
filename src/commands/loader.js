import { readdir } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import { pathToFileURL } from "node:url";
import { registerCommand } from "../handler.js";

const COMMANDS_DIR = new URL("./", import.meta.url);
const ALLOWED_CATEGORIES = new Set(["member", "admin", "owner"]);

async function findCommandFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue;
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findCommandFiles(fullPath));
    else if (entry.isFile() && extname(entry.name) === ".js" && entry.name !== "loader.js") files.push(fullPath);
  }
  return files;
}

export async function loadCommands() {
  const root = COMMANDS_DIR.pathname;
  let loaded = 0;
  const categories = await readdir(root, { withFileTypes: true });

  for (const category of categories) {
    if (!category.isDirectory() || !ALLOWED_CATEGORIES.has(category.name)) continue;
    const categoryPath = join(root, category.name);
    const files = await findCommandFiles(categoryPath);

    for (const filePath of files) {
      try {
        const imported = await import(pathToFileURL(filePath).href);
        const command = imported.default ?? imported;
        if (!command || typeof command.handle !== "function" || !command.name || !Array.isArray(command.commands)) {
          throw new TypeError('O módulo precisa exportar default com name, commands[] e handle().');
        }
        registerCommand({ ...command, role: category.name });
        loaded += 1;
        console.log(`[commands] ${category.name}/${relative(root, filePath)} carregado: ${command.name}`);
      } catch (error) {
        console.error(`[commands] Falha ao carregar ${relative(root, filePath)}:`, error?.message ?? error);
      }
    }
  }
  console.log(`[commands] ${loaded} comando(s) modular(es) carregado(s).`);
  return loaded;
}
