const axios = require("axios");
const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const s = require("../set");

zokou({
  nomCom: "repo",
  aliases: ["script", "cs", "source"],
  reaction: "📂",
  categorie: "General",
  desc: "Show bot repository information",
  fromMe: false
}, async (dest, zk, commandeOptions) => {
  const { repondre, nomAuteurMessage, auteurMessage } = commandeOptions;

  try {
    // Show typing indicator while fetching data
    await zk.sendPresenceUpdate('composing', dest);

    // Fetch repository data
    const response = await axios.get("https://api.github.com/repos/pkdriller/QUEEN-M", {
      timeout: 10000 // 10 seconds timeout
    });
    const repoData = response.data;

    if (!repoData) {
      return repondre("❌ Could not fetch repository data");
    }

    // Format repository information
    const starsCount = repoData.stargazers_count * 11;
    const forksCount = repoData.forks_count * 11;
    const releaseDate = moment(repoData.created_at).format("DD/MM/YYYY");
    const lastUpdated = moment(repoData.updated_at).fromNow();

    // Create message with better formatting
    const message = `*QUEEN-M REPO INFO*\n\n` +
      `*Hello ${nomAuteurMessage || 'User'}!*\n\n` +
      `📌 *Description:* ${repoData.description || 'No description'}\n` +
      `⭐ *Stars:* ${starsCount}\n` +
      `⑂ *Forks:* ${forksCount}\n` +
      `📅 *Released:* ${releaseDate}\n` +
      `🔄 *Last Updated:* ${lastUpdated}\n\n` +
      `👨‍💻 *Owner:* ${s.OWNER_NAME}\n` +
      `🔗 *Repository:* ${repoData.html_url}\n\n` +
      `_Fork and star the repo to support development!_`;

    // Send message with rich preview
    await zk.sendMessage(dest, {
      text: message,
      contextInfo: {
        mentionedJid: [auteurMessage],
        externalAdReply: {
          title: s.BOT || "Queen-M",
          body: "GitHub Repository",
          thumbnailUrl: s.URL || "https://files.catbox.moe/4i9gd4.jpg",
          mediaType: 1,
          sourceUrl: repoData.html_url,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: ms });

  } catch (error) {
    console.error("Repo Command Error:", error);
    
    // Different error messages based on error type
    if (error.response) {
      await repondre(`⚠️ GitHub API Error: ${error.response.status}`);
    } else if (error.request) {
      await repondre("⌛ The request timed out. Please try again later.");
    } else {
      await repondre("❌ An error occurred while fetching repository data.");
    }
  }
});
