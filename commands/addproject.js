const addproject = async function (message) {
    if (message.content.startsWith(".addproject")) {
        await message.delete()
        const messageContent = message.content;
        const messageTrimmed = messageContent.split(",");
        // Schema: .addproject, project name, project description
        const cat = new message.server.categories({})
        (await client.servers.fetch(process.env.SERVER_ID)).categories({
            name: "Test Cat",
        })
        await (await client.servers.fetch(process.env.SERVER_ID)).createChannel({
            name: messageTrimmed[1],
            nsfw: false,
            description: messageTrimmed[2]

        }).then(m => {
            this.server.createChannel({
                name: "Informations",
                nsfw: false,
                description: "In this channel you can find all Information's about the" + messageTrimmed[2] + " Project"
            })
        }).then(() => {
            message.server.createChannel({
                name: "Status",
                nsfw: false,
                description: "Here you will get notified if there are Maintenance planned or there are currently some outages ongoing"
            })
        }).then(() => {
            message.server.createChannel({
                name: "Updates",
                nsfw: false,
                description: "Get notified about new Updates about the " + messageTrimmed[1] + " Project"
            })
        }).then(() => {
            message.server.createChannel({
                name: "Help",
                description: "You need help? No worry we got you, get help from our Community and team!"
            })
        }).then(() => {
            message.server.createChannel({
                name: "General",
                description: "Just talk with our Project Developers"
            }).then(channel => {
                channel.defaultPermissions({
                    d: 1048576
                })
                channel.setPermissions("01HTD32D199A9X2D18SCDT39FZ", {
                    deny: 1048576
                });

            })
        }).then(() => {
            message.server.createChannel({
                name: "Error Reports",
            })
        }).then(() => {
            message.server.createChannel({
                name: "Security"
            }).then(channel => {
                channel.defaultPermissions({
                    d: 1048576
                })
                channel.setPermissions("01HTD32D199A9X2D18SCDT39FZ", {
                    deny: 1048576
                });

            })
        }).catch(e => {
            e.message.reply("There was an error creating the Channels!");
            console.log(e.toString());
        })
        console.log(messageTrimmed);
    }
}

module.exports = addproject;