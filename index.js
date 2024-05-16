const tmi = require('tmi.js'),
    { channel, username, password } = require('./config.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

// CONNECT TO TWITCH
const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `${username}, connected on ${channel}!`);
});

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == 'hello') {
        client.say(channel, `Hello! @${user.username}`);
    }

    if(message == '!socials') {
        client.say(channel, `All My Socials on my website: https://hamado1018.free.nf/?i=1 `);
    }

    if(message == '!discord') {
        client.say(channel, `${user.usernamme}, Join the Discord here: https://discord.gg/UA62ZMYwB4`);
    }

    if(message == '!roblox') {
        client.say(channel, `Profile: https://www.roblox.com/users/190246953/profile`);
    }

    if(message.includes("awesome")) {
        client.say(channel, `If you enjoyed the content, make sure you follow! <3`);
    }

});
