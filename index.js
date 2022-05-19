const config = require('./config.json');
const Discord = require ("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "-";

Client.on("ready", () => {
    Client.user.setActivity(config.activity);
    
    console.log("bot opérationnel")
});

Client.on("guildMemberAdd", member => {
    const channel = Client.channels.cache.get('976083586224648206')
    if (!channel) return;
    channel.send(`${member.displayName} nous a rejoint !`)
})


Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#f70c0c")
            .setTitle("Liste de commande :")
            .setAuthor("Dev By nesky311#0001", "https://cdn.discordapp.com/avatars/971828204941742093/ecd6eedf891bbd44584ae3bbe4f7bbda.png?size=4096&ignore=true).")
            .setDescription("Tu y trouveras la liste des commandes que je propose.")
            .setThumbnail("https://cdn.discordapp.com/avatars/971828204941742093/ecd6eedf891bbd44584ae3bbe4f7bbda.png?size=4096&ignore=true).")
            .addField("__Help__", "Affiche la liste des commandes. `-help`")
            .addField("__Anonyme__", "Envoyer un message anonymement . `-ano <message>`")
            .addField("__Twitter__", "Envoyer un message comme twitter. `-twt <message>`")
            .setFooter("ce Bot appartient a nesky311#0001", "https://cdn.discordapp.com/avatars/971828204941742093/ecd6eedf891bbd44584ae3bbe4f7bbda.png?size=4096&ignore=true).")
            .setTimestamp();
            

        message.channel.send({embeds: [embed]});
    }

});


Client.login(config.token);