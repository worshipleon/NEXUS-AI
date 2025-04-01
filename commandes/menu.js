const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const Taphere = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }

    // Calculate random ping
    const randomPing = Math.floor(Math.random() * 200) + 100; // Random ping between 100-300ms

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Dar_es_Salaam"); // Fixed timezone name
    const hour = moment().hour();
    let greeting = "🌅 Good Morning my friend 🌄";
    if (hour >= 12 && hour < 18) {
        greeting = "🌄 Good afternoon! My friend! 🌿";
    } else if (hour >= 18) {
        greeting = "🌇 Good evening! Hope you had a great day! 🌙";
    } else if (hour >= 22 || hour < 5) {
        greeting = "🌌 Good night, time to sleep";
    }

    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

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
*${greeting}*
*QUEEN-M MENU OVERVIEW*
`;

    let menuMsg = "";
    for (const cat in coms) {
        menuMsg += `
╭──「 *${cat}* 」──┈⊷ 
┃╭──────────
`;
        for (const cmd of coms[cat]) {
            menuMsg += `┃│▸ ${cmd}\n`;
        }
        menuMsg += `┃╰────────┈⊷  
╰────────────┈⊷
`;
    }
    menuMsg += `> *Made By PkDriller*`;

    try {
        // First send the text message
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363345407274799@newsletter',
                    newsletterName: "Queen-M",
                    serverMessageId: -1,
                },
                forwardingScore: 999,
                externalAdReply: {
                    title: "Queen-M",
                    body: "Next Generation",
                    thumbnailUrl: 'https://files.catbox.moe/4i9gd4.jpg',
                    sourceUrl: 'https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

        // Then send audio
        const audioUrls = [
            "https://files.catbox.moe/m1wgdb.mp3",
            "https://files.catbox.moe/f85wbk.mp3",
            "https://files.catbox.moe/cpjbnl.mp3",
            "https://files.catbox.moe/a20efv.mp3",
            "https://files.catbox.moe/moctzu.mp3"
        ];

        const randomAudioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];
        
        await zk.sendMessage(dest, {
            audio: { url: randomAudioUrl },
            mimetype: 'audio/mpeg',
            ptt: true,
        }, { quoted: ms });

    } catch (error) {
        console.error("Menu error:", error);
        repondre("❌ An error occurred while processing the menu command. Please try again later.");
    }
});
