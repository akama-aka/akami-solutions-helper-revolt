# Akami Solutions Helper (Revolt)

A Revolt chatbot for the Akami Solutions Revolt Server. The bot is designed to help simplify moderation, task creation
and more.

## How to use

Rename the `.example.env` to `.env` and change the respective environment data.

| Env Value | Description                                                |
|-----------|------------------------------------------------------------|
| BOT_TOKEN | Den Bot Token von deinem Bot                               |
| SERVER_ID | Die ID von deinem Server worauf der Bot funktionieren soll |
| LOGS_ID   | Die Channel ID von deinem Revolt Logs Channel              |
| Owner ID  | Die ID von dem Bot Inhaber                                 |

## How to start

To start the bot, execute the following commands:

`npm i`

`npm start`

## How to add commands

To fill the bot with your own commands, it is advisable to follow the current structure.

All commands are saved in the `commands` folder at the current time. A new command file can look like this:

commands/example.js

```js
const exampleCommand = async function (message) {
    if (message.content.startsWith(".example")) {
        [...]
    }
}

module.exports = exampleCommand;
```

system.js

```js
const exampleCommand = require("./commands/example");
[...]
client.on("messageCreate", async (message) => {
    module.exports = await message;
    await exampleCommand(message);
})
    [
...]
```

