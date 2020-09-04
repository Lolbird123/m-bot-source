//m best letter
//libs + define client
const Discord = require('discord.js');
const client = new Discord.Client();
//define constant vars that are important
const prefix = 'm ';
const defaultstatus = 'm. | m help';
const mgodid = '546768454427082785';
const token = require('./token.json');

//shit for eval
const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
};

//run if and when bot goes online
client.once('ready', () => {
    console.log('m is ready.\n');
    client.user.setActivity(defaultstatus);
});

client.on('message', msg => {
    if(msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if(msg.content.startsWith(prefix)){
        switch (cmd) {
            case 'help':
                var embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setColor('#00FF00')
                .setDescription(`Format: ${prefix}(command)`)
                .addField('help', 'Display this.')
                .addField('ping','check if the bot is working (prob not tbh)')
                .addField('m', 'm')
                .addField('bigm','big m')
                .addField('pic','m picture')
                .addField('membed','m but in embed')
                .addField('say', 'say somthin')
                msg.channel.send({embed:embed});
            break;
            case 'ping':
                var embed = new Discord.MessageEmbed()
                .setTitle('Yes, m is here.')
                .setColor('#00FF00');
                msg.channel.send({embed:embed});
            break;
            case 'm':
                msg.channel.send('m');
            break;
            case 'bigm':
                msg.channel.send(':m:');
            break;
            case 'pic':
                var embed = new Discord.MessageEmbed()
                .setTitle('m picture')
                .setColor('#00FF00')
                .setImage('https://cdn.discordapp.com/attachments/692844705297465484/732276454662078544/Untitled.png');
                msg.channel.send({embed:embed});
            break;      
            case 'membed':
                var embed = new Discord.MessageEmbed()
                .setTitle('m')
                .setColor('#00FF00');
                msg.channel.send({embed:embed});
            break;
            case 'say':
                msg.channel.send(args.join(' '));
                console.log(`${msg.author.tag} used say for ${args.join(' ')}`);
            break;
            case 'eval':
                //i have -1% of an idea of how this works.
                if(msg.author.id !== mgodid){
                    var embed = new Discord.MessageEmbed()
                    .setTitle('Not for you.')
                    .setColor('#FF0000');
                    msg.channel.send({embed:embed});
                    return;
                } else {
                    try {
                        const code = args.join(" ");
                        let evaled = eval(code);
                        
                        if (typeof evaled !== "string")
                          evaled = require("util").inspect(evaled);
               
                        msg.channel.send(clean(evaled), {code:"xl"});
                      } catch (err) {
                        msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
                    };
                };
            break;
        };
    } else {
        if(msg.content.startsWith('m') && msg.content.endsWith('m') || msg.content.startsWith('M') && msg.content.endsWith('M')) {
            msg.channel.send('m');
        };
        if(msg.content.startsWith('n') && msg.content.endsWith('n') || msg.content.startsWith('N') && msg.content.endsWith('N')) {
            msg.channel.send('n is bad letter m is much better');
        };
        if(msg.content.startsWith('H') && msg.content.endsWith('H') || msg.content.startsWith('h') && msg.content.endsWith('h')) {
            msg.channel.send('h is bad letter m is much better');
        };
    };
});

client.login(token.token); 