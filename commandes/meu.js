const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = (s.MODE).toLocaleLowerCase() === "yes" ? "public" : "private";
    
    cm.map((com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });
    
    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');
    const randomPing = Math.floor(Math.random() * 100) + 1;
    
    let infoMsg = `
╭━━〔 *${s.BOT}* 〕━━┈⊷
┃๏╭───────────
┃๏│▸ 𝗢𝘄𝗻𝗲𝗿 : ${s.OWNER_NAME}
┃๏│▸ 𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${s.PREFIXE} ] 
┃๏│▸ 𝗠𝗼𝗱𝗲 : *${mode}*
┃๏│▸ 𝗗𝗮𝘁𝗲  : *${date}* 
┃๏│▸ 𝗧𝗶𝗺𝗲  : *${temps}* 
┃๏│▸ 𝗣𝗶𝗻𝗴  : *${randomPing}ms*
┃๏│▸ 𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : 𝗠𝗮𝗿𝗶𝘀𝗲𝗹
┃๏└───────────···▸
╰──────────────┈⊷
${readmore}`;
    
    let menuMsg = `*QUEEN-M*
`;
    for (const cat in coms) {
        menuMsg += `
╭──「 *${cat}* 」──┈⊷ 
┃╭──────────
`;
        for (const cmd of coms[cat]) {
            menuMsg += `┃│▸  ${cmd}\n`;
        }
        menuMsg += `┃╰────────┈⊷  
╰────────────┈⊷`;
    }
    
    try {
        await zk.sendMessage(dest, {
            'audio': { 'url': "https://files.catbox.moe/m1wgdb.mp3" },
            'mimetype': "audio/mp4",
            'ptt': true,
            'contextInfo': {
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363345407274799@newsletter",
                    'newsletterName': "Queen-M",
                    'serverMessageId': 0x8f
                },
                'forwardingScore': 0x3e7,
                'externalAdReply': {
                    'title': "QUEEN-M Menu",
                    'body': `*one love*`,
                    'thumbnailUrl': "https://files.catbox.moe/r1j72m.jpeg",
                    'sourceUrl': "https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x",
                    'mediaType': 0x1,
                    'renderLargerThumbnail': true
                }
            }
        }, { quoted: ms });
    } catch (error) {
        console.log("🥵🥵 Menu Error: " + error);
        repondre("🥵🥵 Menu Error: " + error);
    }
});

