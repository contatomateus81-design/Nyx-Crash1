# Nyx Crash 💜

Bot independente para WhatsApp, desenvolvido com Node.js e Baileys.

## Configuração

As configurações ficam em **`src/config.js`**. Não é necessário criar arquivo `.env`.

Edite os campos no início do arquivo:

- `name`: nome do bot.
- `ownerName`: nome do proprietário.
- `ownerNumber`: número do proprietário com DDI e DDD, somente dígitos.
- `prefix`: prefixo dos comandos.
- `piperModel`, `piperBin` e `ffmpegBin`: configurações opcionais de voz e mídia.

Exemplo de número brasileiro: `5511999999999`. Substitua pelo número correto da sua instalação. Não publique dados pessoais ao compartilhar capturas de tela ou cópias personalizadas do arquivo.

## Estrutura dos comandos

Os comandos novos ficam em:

```text
src/
└── comandos/
    ├── membro/
    ├── admin/
    └── dono/
```

Cada comando independente usa este formato:

```js
export default {
  name: "meucomando",
  description: "Descrição do comando",
  commands: ["meucomando", "mc"],
  usage: "!meucomando",

  async handle({ sock, message, args, reply }) {
    await reply("Meu primeiro comando personalizado!");
  }
};
```

O carregador percorre as três categorias ao iniciar. A pasta define a permissão: `membro` para usuários, `admin` para administradores do grupo e `dono` para o proprietário. Depois de criar um módulo, reinicie o bot para carregá-lo.

**Migração em andamento:** alguns comandos antigos ainda usam módulos de compatibilidade. Eles serão convertidos para o formato independente antes de remover completamente essa camada.

## Instalação no Termux

```bash
pkg update && pkg upgrade
pkg install nodejs git
git clone https://github.com/contatomateus81-design/Nyx-Crash1.git
cd Nyx-Crash1
npm install
```

Depois, edite `src/config.js` e execute:

```bash
npm run check
npm start
```

## Atualizar

```bash
Ctrl + C
git pull origin main
npm install
npm run check
npm start
```

## Dados locais e segurança

- A sessão do WhatsApp fica em `sessions/`.
- Dados de grupos e usuários ficam em `data/`.
- Não compartilhe a pasta `sessions/` nem cópias personalizadas de `src/config.js` que contenham dados pessoais.
- Nunca publique códigos de pareamento ou credenciais.
