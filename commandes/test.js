"use strict";
const { zokou } = require("../framework/zokou");
const axios = require("axios");

// Configuration constants
const BOT_CONFIG = {
  ALIVE_IMAGE: "https://files.catbox.moe/euras7.jpg",
  AUDIO_MESSAGE: "https://files.catbox.moe/m1wgdb.mp3",
  CHANNEL_LINK: "https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x",
  NEWSLETTER_INFO: {
    jid: '120363317462952356@newsletter',
    name: "Queen-M",
    serverId: 143
  },
  THUMBNAIL: "https://files.catbox.moe/5hlmas.jpg"
};

// Common function for both alive and test commands
async function sendAliveMessage(dest, zk, commandeOptions, isTest = false) {
  const contactName = commandeOptions?.ms?.pushName || "Unknown Contact";
  const commandType = isTest ? "TEST" : "ALIVE";

  try {
    // Verify media URLs before sending
    await Promise.all([
      axios.head(BOT_CONFIG.ALIVE_IMAGE),
      axios.head(BOT_CONFIG.AUDIO_MESSAGE)
    ]);

    const caption = isTest 
      ? `*Always Active*\n\n*Contact: ${contactName}*\n🎙️ [Visit Channel](${BOT_CONFIG.CHANNEL_LINK})`
      : `*Always Active*\n\n*Contact: ${contactName}*\n🙏 [Visit Channel](${BOT_CONFIG.CHANNEL_LINK})`;

    const title = isTest
      ? `Message from: ${contactName}\nQueen-M is Active `
      : `Message from: ${contactName}\nWuerb-M is Active`;

    await zk.sendMessage(dest, {
      image: { url: BOT_CONFIG.ALIVE_IMAGE },
      caption: caption,
      audio: { 
        url: BOT_CONFIG.AUDIO_MESSAGE,
        mimetype: "audio/mpeg",
        ptt: true 
      },
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: BOT_CONFIG.NEWSLETTER_INFO,
        externalAdReply: {
          title: title,
          body: BOT_CONFIG.NEWSLETTER_INFO.name,
          thumbnailUrl: BOT_CONFIG.THUMBNAIL,
          sourceUrl: BOT_CONFIG.CHANNEL_LINK,
          mediaType: 1,
          renderLargerThumbnail: true
        },
        forwardingScore: -1
      }
    });

    console.log(`${commandType} message sent successfully to ${dest}`);
    return true;
  } catch (error) {
    console.error(`${commandType} command error:`, error.message);
    
    // Fallback if media fails
    try {
      await zk.sendMessage(dest, {
        text: `⚠️ ${commandType} Notification ⚠️\n\n` +
              `Bot is active but media couldn't load\n` +
              `Contact: ${contactName}\n` +
              `Channel: ${BOT_CONFIG.CHANNEL_LINK}`
      });
    } catch (fallbackError) {
      console.error("Fallback message failed:", fallbackError.message);
    }
    
    return false;
  }
}

// Alive command
zokou({
  nomCom: "alive",
  reaction: "💗",
  categorie: "General",
  desc: "Check if bot is running",
  nomFichier: __filename
}, async (dest, zk, commandeOptions) => {
  await sendAliveMessage(dest, zk, commandeOptions);
});

// Test command
zokou({
  nomCom: "test",
  reaction: "☘️",
  categorie: "General",
  desc: "Test bot functionality",
  nomFichier: __filename
}, async (dest, zk, commandeOptions) => {
  await sendAliveMessage(dest, zk, commandeOptions, true);
});

console.log("Bot commands loaded successfully");
