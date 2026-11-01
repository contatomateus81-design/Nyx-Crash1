# Nyx Crash 💜

Projeto independente de bot para WhatsApp em Node.js com Baileys. Os comandos podem ser criados como módulos individuais e carregados automaticamente por categoria.

## Criar um novo comando

Não é necessário editar `index.js`, `handler.js` ou registrar o comando manualmente.

1. Escolha a pasta de permissão:
   - `src/commands/member/`: qualquer pessoa que possa usar o bot.
   - `src/commands/admin/`: administradores do grupo.
   - `src/commands/owner/`: dono oficial ou dono adicional autorizado.
2. Crie um arquivo terminado em `.js`, por exemplo `meucomando.js`.
3. Use este modelo:

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

4. Salve o arquivo e reinicie o bot. O carregador encontra o módulo e registra o comando e seus aliases automaticamente.

A propriedade `commands` contém todos os nomes que acionam o mesmo comando. O campo `name` é o nome principal. A função `handle` recebe o contexto do comando, incluindo `sock`, `message`, `args`, `reply`, `senderJid`, `chatJid`, `isGroup` e informações de permissão.

**Importante:** comandos colocados em `admin` e `owner` recebem validação de permissão pelo próprio sistema. Não remova verificações adicionais necessárias para a ação específica (por exemplo, confirmar que o bot também é administrador antes de alterar configurações do grupo).

O carregador percorre subpastas, ignora arquivos cujo nome começa com `_` e registra erros de importação sem impedir o carregamento dos demais módulos.

## Instalação no Termux

Atualize os pacotes e instale Node.js e Git:

```bash
pkg update && pkg upgrade
pkg install nodejs git
```

Baixe o projeto, instale as dependências e configure o arquivo `.env`:

```bash
cd ~
git clone https://github.com/contatomateus81-design/Nyx-Crash1.git
cd Nyx-Crash1
npm install
cp .env.example .env
nano .env
npm run check
npm start
```

Na primeira execução, preencha e salve o arquivo `.env` antes de continuar. Se `npm run check` apontar erros, corrija-os antes de iniciar o bot.

## Configuração do arquivo .env

O arquivo `.env` guarda configurações privadas da sua instalação. Ele não é enviado ao GitHub. O repositório fornece um modelo chamado `.env.example`.

| Variável | O que colocar |
| --- | --- |
| `OWNER_NUMBER` | Seu número de WhatsApp com código do país e DDD, somente dígitos. No Brasil: `55 + DDD + número`. |
| `BOT_PREFIX` | Prefixo dos comandos. O padrão é `!`. |
| `BOT_NAME` | Nome exibido para o bot. O padrão é `Nyx Bot`. |
| `GEMINI_API_KEY` | Chave da API Gemini, caso utilize a integração correspondente. Deixe vazia se não usar. |
| `GEMINI_MODEL` | Modelo Gemini configurado para a integração, se utilizada. |

Exemplo de número fictício: `5554991234567`. Substitua pelo seu número real; não inclua `+`, espaços ou traços.

Salve no nano com `Ctrl + O`, confirme com Enter e saia com `Ctrl + X`. Siga as instruções exibidas no terminal para conectar o WhatsApp em **Aparelhos conectados**. Nunca compartilhe seu código de pareamento.

## Atualizar o bot

Dentro da pasta do projeto:

```bash
git pull origin main
npm install
npm run check
npm start
```

Se houver alterações locais que impeçam o `git pull`, faça backup do que deseja preservar antes de descartar ou substituir arquivos.

## Sessão, dados e segurança

- A sessão do WhatsApp é armazenada localmente em `sessions/`.
- Configurações, avisos e notas ficam em `data/`.
- **Não envie o arquivo `.env`, a pasta `sessions/` ou credenciais para o GitHub.**
- Não compartilhe códigos de pareamento, chaves de API ou arquivos de sessão.
- Se apagar a pasta do projeto, faça uma cópia segura do `.env` e da sessão antes. O GitHub não guarda esses arquivos privados.

## Verificação

Execute `npm run check` para validar a sintaxe JavaScript. O GitHub Actions também executa a checagem em pushes e pull requests. Isso não substitui um teste real de conexão com o WhatsApp.
