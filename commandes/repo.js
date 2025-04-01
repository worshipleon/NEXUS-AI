"use strict";
const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({ 
  nomCom: "repo", 
  categorie: "General",
  reaction: "🔎",
  aliases: ["source", "script"],
  desc: "Show bot repository information",
  nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;
  const githubRepo = 'https://api.github.com/repos/pkdriller/QUEEN-M';
  const thumbnailImg = 'https://files.catbox.moe/4i9gd4.jpg';

  try {
    // Fetch repository data
    const response = await axios.get(githubRepo, { timeout: 10000 });
    const data = response.data;

    if (!data) {
      return repondre("Could not fetch data");
    }

    const repoInfo = {
      stars: data.stargazers_count,
      forks: data.forks_count,
      lastUpdate: new Date(data.updated_at).toLocaleDateString('en-GB'),
      owner: data.owner.login,
    };

    const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');

    // Maintained exact cage formatting as requested
    const gitdata = `*Hey Pal? You love the bot Right?*\n  
      *Here is all you need to Know*
╭─────────────────
││ *𝐑𝐞𝐩𝐨:* ${data.html_url}
││ *𝐒𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
││ *𝐅𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
││ *𝐑𝐞𝐥𝐞𝐚𝐬𝐞 𝐃𝐚𝐭𝐞:* ${releaseDate}
││ *𝐔𝐩𝐝𝐚𝐭𝐞𝐝: ${repoInfo.lastUpdate}
││ *𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x
╰─────────────────`;

    await zk.sendMessage(dest, { 
      image: { url: thumbnailImg }, 
      caption: gitdata,
      contextInfo: {
        externalAdReply: {
          title: "Bot Repository",
          body: "Fork and star the repo!",
          thumbnailUrl: thumbnailImg,
          mediaType: 1,
          sourceUrl: data.html_url,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.log("Error fetching data:", error);
    repondre("An error occurred while fetching repository data.");
  }
});
