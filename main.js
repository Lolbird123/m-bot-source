//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm cheese ~Lolbird

//discord.js libsssssssssssssssss
const Discord = require('discord.js');
const { METHODS } = require('http');

const client = new Discord.Client();

//bot const variables
const prefix = 'm!';

const mserver = '741369641280077874';

const webhooktest = new Discord.WebhookClient('', '');

const token = '';

//me
const mgodid = "546768454427082785"
//juju
const minimgodid1 = "485638234437844995"
//lightning wolf
const minimgodid2 = "459143135033819137"
//kelp fries
const minimgodid3 = "368138411569315840"
//illogical
//removed for abuse
//pat
const minimgodid4 = "507767008289619968"
//woofers
const minimgodid5 = "566441696381108266"
//chair
const minimgodid6 = "418182356852146186"
//world
const minimgodid7 = "613418337489125396"


//idfk its needed for eval
const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
};

//send console message and set status when ready
client.once('ready', () => {
    console.log('m is ready.');
    client.user.setActivity("m | m!help | https://discord.gg/QBMKs9T"); 
});

//wait for a member to join a guild this bot is in and store the member in member var
client.on('guildMemberAdd', member => {
    //check if the guild the member is of and compare it to mserver var
    if(member.guild.id === mserver){
        //add m role
        member.roles.add('741370665596092547');
    };
});

//wait for a message
client.on('message', message => {
    //check if the bot sent it to avoid self loops
    if(message.author.bot) return;
    //check if the bot was activated by prefix
    if(!message.content.startsWith(prefix)) {
        //check if the message starts with, and ends with m or M, and that it doesnt start with the prefix to avoid multiple responses
        if(message.content.startsWith('m') || message.content.startsWith('M')){
            if(message.content.endsWith('m') || message.content.endsWith('M')){
                if(!message.content.startsWith(prefix)){
                    message.channel.send('m');
                };
            };
        };
        //check for false statement 1
        if(message.content.startsWith('h')){
            if(message.content.endsWith('m')){
                if(message.content.indexOf('>') > 0){
                    message.channel.send('false.');
                    message.delete();
                };
            };
        };
        //check for false statement 2
        if(message.content.startsWith('m')){
            if(message.content.endsWith('h')){
                if(message.content.indexOf('<') > 0){
                    message.channel.send('false.');
                    message.delete();
                };
            };
        };
        //check if the message starts with, and ends with n or N, and that it doesnt start with the prefix to avoid multiple responses
        if(message.content.startsWith('n') || message.content.startsWith('N')){
            if(message.content.endsWith('n') || message.content.endsWith('N')){
                if(!message.content.startsWith(prefix)){
                    message.channel.send('n is bad letter m is much better');
                    if (message.guild.id === mserver) message.delete();
                    console.log(message.author.username);
                    console.log('said n');
                    console.log(' ');
                };
            };
        };

        //check if som1 is bypassing tyhe n filter
        if(message.content === 'n ** ** ' || message.content === 'N ** ** ' || message.content === 'n** ** ' || message.content === 'N** ** ' || message.content === 'n ** **' || message.content === 'N ** **' || message.content === 'n** **' || message.content === 'N** **' || message.content === ' ** ** n' || message.content === ' ** ** N' || message.content === ' ** ** n' || message.content === ' ** ** N' || message.content === '** ** n' || message.content === '** ** N' || message.content === '** **n' || message.content === '** **N'){
            message.channel.send('n is bad letter m is much better');
            if (message.guild.id === mserver) message.delete();
            console.log(message.author.username);
            console.log('said n');
            console.log(' ');
        };

        if(message.content.startsWith('m bot bad')){
            message.delete();
        };

    } else if (message.content.startsWith(prefix)); { 
        //init command and args
        const Args = message.content.slice(prefix.length).split(/ +/);
        const commmand = Args.shift().toLowerCase();
        const msg = Args.join(' ');

        //command handler
        switch (commmand){
            case 'm':
                message.channel.send('m');
            break;

            case 'help':
                if(message.guild.id === mserver){
                    message.channel.send('`commands: m, help, mping, nomping, mspam, mgods, mpic, type, notype, join, leave, superm (only for the m god and mini m gods), msay (only for the m god and mini m gods), purge (u need manage messages for it), spurge (u need manage messages for it), mute (u need manage messages for it) unmute (u need manage messages for it)`');
                } else {
                    message.channel.send('`commands: m, help, mserver, mspam, mgods, mpic, type, notype, join, leave, superm (only for the m god and mini m gods), msay (only for the m god and mini m gods), purge (u need manage messages for it), spurge (u need manage messages for it)`');
                };
            break;

            case 'mserver':
                message.channel.send('https://discord.gg/QBMKs9T');
            break;

            case 'mping':
                if(message.guild.id === mserver){
                    message.member.roles.add('741842008712151056');
                    message.channel.send('you now will be pinged for <#741370900309344308>');
                } else {
                    message.channel.send('only works in m server');
                };
            break;

            case 'nomping':
                if(message.guild.id === mserver){
                    message.member.roles.remove('741842008712151056');
                    message.channel.send('you no longer will be pinged for <#741370900309344308>');
                } else {
                    message.channel.send('only works in m server');
                };
            break;

            case 'mspam':
                message.channel.send('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm');
            break;

            case 'mgods':
                message.channel.send('the m god is <@!546768454427082785>')
                message.channel.send('the mini m gods are JuJuishere, Lightning_Wolf, and KelpFries, Pat, m26-Pershing, TheChairArmy, and 05 Woofers');
            break;

            case 'superm':
                //check if the message author is any of the m god ids
                switch (message.author.id){
                    case mgodid:
                    case minimgodid1:
                    case minimgodid2:
                    case minimgodid3:
                    case minimgodid4:
                    case minimgodid5:
                    case minimgodid6:
                    case minimgodid7:
                        message.channel.send('***M***');
                    break;
                    default:
                        message.channel.send('only the m gods can.');
                    break;
                };
            break;

            case 'mpic':
                message.channel.send('https://cdn.discordapp.com/attachments/692844705297465484/732276454662078544/Untitled.png');
            break;

            case 'msay':
                //check if the message author is any of the m god ids
                switch (message.author.id) {
                    case mgodid:
                    case minimgodid1:
                    case minimgodid2:
                    case minimgodid3:
                    case minimgodid4:
                    case minimgodid5:
                    case minimgodid6:
                    case minimgodid7:
                        if(Args === 'n ** ** ' || Args === 'N ** ** ' || Args === 'n** ** ' || Args === 'N** ** ' || Args === 'n ** **' || Args === 'N ** **' || Args === 'n** **' || Args === 'N** **' || Args === ' ** ** n' || Args === ' ** ** N' || Args === ' ** ** n' || Args === ' ** ** N' || Args === '** ** n' || Args === '** ** N' || Args === '** **n' || Args === '** **N' || Args === 'n' || Args === 'N'){
                                message.channel.send('thats not happening.');
                                break;
                        };
                        message.channel.send(Args.join(' '));
                        message.delete();
                        console.log(message.author.username);
                        console.log('used msay for:');
                        console.log(Args);
                        console.log(' ');
                    break;
                    default:
                        message.channel.send('only the m gods can.');
                    break;
                };
            break;

            case 'notype':
                message.channel.stopTyping();
            break;

            case 'type':
                message.channel.startTyping();
            break;

            case 'join':
                if(message.member.voice.channel){
                    message.member.voice.channel.join();
                } else {
                    message.channel.send('u no in vc dummmm');
                };
            break;

            case 'leave':
                message.member.voice.channel.leave();
            break;

            case 'webhooksay':
                //check if the message author is any of the m god ids
                switch (message.author.id) {
                    case mgodid:
                    case minimgodid1:
                    case minimgodid2:
                    case minimgodid3:
                    case minimgodid4:
                    case minimgodid5:
                    case minimgodid6:
                    case minimgodid7:
                        if(Args === 'n ** ** ' || Args === 'N ** ** ' || Args === 'n** ** ' || Args === 'N** ** ' || Args === 'n ** **' || Args === 'N ** **' || Args === 'n** **' || Args === 'N** **' || Args === ' ** ** n' || Args === ' ** ** N' || Args === ' ** ** n' || Args === ' ** ** N' || Args === '** ** n' || Args === '** ** N' || Args === '** **n' || Args === '** **N' || Args === 'n' || Args === 'N'){
                                message.channel.send('thats not happening.');
                                break;
                        };
                        webhooktest.send(Args.join(' '));
                        message.delete();
                        console.log(message.author.username);
                        console.log('used webhooksay for:');
                        console.log(Args);
                        console.log(' ');
                    break;
                    default:
                        message.channel.send('only the m gods can.');
                    break;
                };
            break;

            case 'restart':
                if(message.author.id !== mgodid){
                    message.channel.send('not for u.');
                } else {
                    message.channel.send('mmmmmm bai');
                    client.destroy();
                    client.login(token);
                    message.channel.send('m is bacc');
                };
            break;

            case 'purge':
                if(message.member.hasPermission('MANAGE_MESSAGES') || message.author.id === mgodid){
                    message.channel.bulkDelete(Args.find(x=>x!==undefined));
                    message.channel.send('haha purge go brrrrrrrr');
                } else {
                    message.channel.send('not for u.');
                };
            break;

            case 'spurge':
                if(message.member.hasPermission('MANAGE_MESSAGES') || message.author.id === mgodid){
                    message.channel.bulkDelete(Args.find(x=>x!==undefined));
                } else {
                    message.channel.send('not for u.');
                };
            break;

            case 'mute':
                if(message.guild.id === mserver){
                    if(message.member.hasPermission('MANAGE_MESSAGES')){
                        if(message.mentions.members.first()){
                            message.mentions.members.first().roles.add('741806200009654315');
                            message.channel.send('muted em');
                            message.guild.channels.cache.get('741809394106236990').send(message.author.username);
                            message.guild.channels.cache.get('741809394106236990').send('muted :');
                            message.guild.channels.cache.get('741809394106236990').send(message.mentions.users.first().username);
                        } else {
                            message.channel.send('gotta mention someone ya dum');
                        };
                    } else {
                        message.channel.send('u aint got the perms to do that');
                    };
                } else {
                    message.channel.send('only works in m server rn sorry');
                };
            break;

            case 'unmute':
                if(message.guild.id === mserver){
                    if(message.member.hasPermission('MANAGE_MESSAGES')){
                        if(message.mentions.members.first()){
                            message.mentions.members.first().roles.remove('741806200009654315');
                            message.channel.send('unmuted em');
                            message.guild.channels.cache.get('741809394106236990').send(message.author.username);
                            message.guild.channels.cache.get('741809394106236990').send('unmuted :');
                            message.guild.channels.cache.get('741809394106236990').send(message.mentions.users.first().username);
                        } else {
                            message.channel.send('gotta mention someone ya dum');
                        };
                    } else {
                        message.channel.send('u aint got the perms to do that');
                    };
                } else {
                    message.channel.send('only works in m server rn sorry');
                };
            break;


            case 'delmsg':
                if(message.author.id !== mgodid){
                    message.channel.send('not for u.');
                } else {
                    message.channel.messages.cache.get(Args.find(x=>x!==undefined)).delete();
                };
            break;

            case 'eval':
                //i have -1% of an idea of how this works.
                if(message.author.id !== mgodid){
                    message.channel.send('not for u.');
                    return;
                } else {
                    try {
                        const code = Args.join(" ");
                        let evaled = eval(code);
                        
                        if (typeof evaled !== "string")
                          evaled = require("util").inspect(evaled);
               
                        message.channel.send(clean(evaled), {code:"xl"});
                      } catch (err) {
                        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
                    };
                };
            break;
        };
    };
});



client.login(token);