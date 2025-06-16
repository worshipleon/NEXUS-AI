const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const time = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
╭━━✧★☞  η𝕖ⓧùⓢ-𝐀𝓘  😾💜✧━━❖
┊✺┌────••••────⊷
┃★│◎ Owner : ${s.OWNER_NAME}
┃★│◎ Prefix : [ ${s.PREFIXE} ]
┃★│◎ Mode : ${mode}
┃★│◎ Ram : 8/132 GB
┃★│◎ Date : ${date}
┃★│◎ Platform : ${os.platform()}
┃★│◎ Creator : PK Driller
┃★│◎ Commands : ${cm.length}
┃★│◎ Theme : NEXUS-AI
┊   └────••••────⊷
╰━━━••✧NEXUS-AI✧••━━━◆\n`;

    let menuMsg = `NEXUS AI MENU`;
    
    for (const cat in coms) {
        menuMsg += `
╭━━━❂ *${cat}* ❂━━─••
║╭━━══••══━━••⊷ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
║┊◆ ${s.PREFIXE}  *${cmd}*`;    
        }
        menuMsg += `
║╰━━══••══━━••⊷
╰════────════◆◆◆`;
    }

    menuMsg += `\n> @NEXUS AI\n`;

    try {
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363288304618280@newsletter',
                    newsletterName: 'NEXUS-AI',
                    serverMessageId: 143
                },
                externalAdReply: {
                    title: "NEXUS AI",
                    body: "Tap to join the official channel",
                    thumbnailUrl: "https://files.catbox.moe/0b3p7o.jpg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });

        // Send the music file
        await zk.sendMessage(dest, {
            audio: { url: 'https://files.catbox.moe/uhfull.mp3' },
            mimetype: 'audio/mp4',
            ptt: false
        });

    } catch (error) {
        console.error("Menu error: ", error);
        repondre("Menu error: " + error);
    }
});
