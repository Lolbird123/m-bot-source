//m best letter
//libs + define client
const Discord = require('discord.js');
const client = new Discord.Client();
//define constant vars that are important
const prefix = 'm ';
const defaultstatus = 'm. | m help';
const mgodid = '546768454427082785';
const token = require('./token.json');
const m = 'm best letter'
let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

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
    if (!points[msg.author.tag]) points[msg.author.tag] = {points: 0};
    let userData = points[msg.author.tag];

    if(msg.content.startsWith(prefix)){
        switch (cmd) {
            case 'help':
                var embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setColor('#00FF00')
                .setThumbnail('https://cdn.discordapp.com/attachments/692844705297465484/732276454662078544/Untitled.png')
                .setAuthor('Lolbird123#3333', 'https://cdn.discordapp.com/avatars/546768454427082785/41b62796db3ef17d1968cb07770b8aef.webp?size=128')
                .setDescription(`Format: ${prefix}(command)`)
                .addField('help', 'Display this.')
                .addField('ping','check if the bot is working (prob not tbh)')
                .addField('version', 'check bot version')
                .addField('bigm','big m')
                .addField('pic','m picture')
                .addField('membed','m but in embed')
                .addField('say', 'say somthin')
                .addField('beta stuff:','(experemental)')
                .addField('points','check your m points')
                .addField('checkpoints','check a users m points by name+tag')
                .addField('getpoint','get 1 m point. yup just one.')
                .addField('setpoints','set a users points. only for m god.')
                msg.channel.send({embed:embed});
            break;
            case 'ping':
                var embed = new Discord.MessageEmbed()
                .setTitle('Yes, m is here.')
                .setColor('#00FF00');
                msg.channel.send({embed:embed});
            break;
            case 'version':
                var embed = new Discord.MessageEmbed()
                .setTitle('Version 2.9')
                .addField('Source Code: ', 'https://github.com/Lolbird123/m-bot-source')
                .setColor('#00FF00');
                msg.channel.send({embed:embed});
            break;
            case 'points':
                var embed = new Discord.MessageEmbed()
                .setTitle(`You have: ${userData.points} m points.`)
                .setColor('#00FF00');
                msg.channel.send({embed:embed});
            break;
            case 'checkpoints':
                if(args.length === 1){
                    let targetUserTag = args[0];
                    let targetUserData = points[targetUserTag];
                    var embed = new Discord.MessageEmbed()
                    .setTitle(`'${targetUserTag}' has: ${targetUserData.points} m points.`)
                    .setColor('#00FF00');
                    msg.channel.send({embed:embed});
                } else {
                    var embed = new Discord.MessageEmbed()
                    .setTitle('No user name+tag specified.')
                    .setColor('#FF0000');
                    msg.channel.send({embed:embed});
                };
            break;
            case 'getpoint':
                var embed = new Discord.MessageEmbed()
                .setTitle(`Fine, here is an m point.`)
                .setColor('#00FF00');
                msg.channel.send({embed:embed});
                userData.points++;
            break;
            case 'setpoints':
                if(msg.author.id === mgodid){
                    let pointsToSet = args[0];
                    let targetUserTag = args[1];
                    let targetUserData = points[targetUserTag];
                    targetUserData.points = pointsToSet
                    var embed = new Discord.MessageEmbed()
                    .setTitle(`Gave: '${targetUserTag}' ${pointsToSet} m points.`)
                    .setColor('#00FF00');
                    msg.channel.send({embed:embed});
                }else{
                    var embed = new Discord.MessageEmbed()
                    .setTitle('Not for you.')
                    .setColor('#FF0000');
                    msg.channel.send({embed:embed});
                };
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
                var hasH = new RegExp("^[hH]+$").test(args.join(' '));
                var hasN = new RegExp("^[nN]+$").test(args.join(' '));
                if (hasN == true) {msg.channel.send('n is bad letter m is much better'); break;}
                if (hasH == true) {msg.channel.send('h is bad letter m is much better'); break;}
                if(!args.join('').includes('@everyone') && !args.join('').includes('@here')){
                    msg.channel.send(args.join(' '));
                    console.log(`${msg.author.tag} used m say for: '${args.join('')}' in: '${msg.guild.name}'`)
                } else {
                    msg.channel.send('no.');
                }
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
        let rawMsg = msg.content.replace(/[\*._~]/g, '');
        var hasM = new RegExp("^[mM]+$").test(rawMsg);
        var hasH = new RegExp("^[hH]+$").test(rawMsg);
        var hasN = new RegExp("^[nN]+$").test(rawMsg);
        if (hasM == true) msg.channel.send('m');
        if (hasN == true) msg.channel.send('n is bad letter m is much better');
        if (hasH == true) msg.channel.send('h is bad letter m is much better');
        if (msg.content.includes(':regional_indicator_m:') || msg.content.includes(':m:')) msg.channel.send('m');
    };
});

client.login(token.token); 