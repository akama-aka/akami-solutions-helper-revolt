const {Client, API} = require('revolt.js');
const addproject = require("./commands/addproject");
require('dotenv').config();
let client = new Client();

client.on('ready', async () => {
    console.info("Delete all test Channels...");
    (await client.servers.fetch(process.env.SERVER_ID)).channels.forEach(a => {
        if (a.name === "test") {
            a.delete();
        }
    })
    console.log(`Logged in as ${client.user.username}`);
})

client.on("messageCreate", async (message) => {
    module.exports = await message;
    await addproject(message);
    if (message.server.id !== process.env.SERVER_ID) {
        return (await client.servers.fetch(message.server.id)).delete(true);
    }
})

client.on("channelCreate", async (channel) => {
    await client.channels.fetch(process.env.LOGS_ID).then(channelData => {
        console.log(channel.userId);
        channelData.sendMessage(`[${channel.createdAt}] **\`${channel.ownerId}\`** Channel **\`${channel.name}\`** _\`<${channel.id}>\`_`)
    })
})
client.on("channelDelete", async (channel) => {
    await client.channels.fetch(process.env.LOGS_ID).then(logChannel => {
        console.log(this.channel)
        logChannel.sendMessage(`\`${channel.userId}\` deleted **\`${channel.name}\`** _\`<${channel.id}>\`_`)
    })
})

client.loginBot(process.env.BOT_TOKEN).then(r => {
    console.log("Logged in with Bot credentials")
}).catch(e => {
    console.error(`There was an error logging into the Bot with the given credentials:\n${e}`);
});


module.exports = {
    client
}