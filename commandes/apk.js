const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({
  nomCom: "apk",
  aliases: ["app", "playstore"],
  reaction: '📲',
  categorie: "Download",
  desc: "Search and download APK files"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    // Check if app name is provided
    const appName = arg.join(" ").trim();
    if (!appName) {
      return repondre("Please provide an app name.\nExample: *!apk WhatsApp*");
    }

    // Search for the app
    const searchResponse = await axios.get(`https://bk9.fun/search/apk?q=${encodeURIComponent(appName)}`, {
      timeout: 15000
    });
    
    if (!searchResponse.data?.BK9?.length) {
      return repondre(`❌ No apps found for *${appName}*`);
    }

    // Get download link for first result
    const appId = searchResponse.data.BK9[0].id;
    const detailsResponse = await axios.get(`https://bk9.fun/download/apk?id=${appId}`, {
      timeout: 15000
    });
    
    if (!detailsResponse.data?.BK9?.dllink) {
      return repondre("⚠️ Download link not available for this app");
    }

    const appData = detailsResponse.data.BK9;
    const appFileName = `${appData.name.replace(/[^a-z0-9]/gi, '_')}.apk`;

    // Send the APK file
    await zk.sendMessage(
      dest,
      {
        document: { url: appData.dllink },
        fileName: appFileName,
        mimetype: "application/vnd.android.package-archive",
        caption: `📱 *${appData.name}*\nDownloading APK...\n\n*Powered by Queen-M*`,
        contextInfo: {
          externalAdReply: {
            title: "APK Downloader",
            body: `Get ${appData.name} APK`,
            thumbnailUrl: appData.icon || 'https://files.catbox.moe/xyz123.jpg',
            mediaType: 1,
            sourceUrl: appData.dllink
          }
        }
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error("APK Command Error:", error);
    
    if (error.response) {
      repondre(`⚠️ API Error: ${error.response.status}`);
    } else if (error.code === 'ECONNABORTED') {
      repondre("⌛ Request timed out. Please try again.");
    } else {
      repondre("❌ Failed to download APK. Please try again later.");
    }
  }
});
