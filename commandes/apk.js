const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({
  nomCom: "apk",
  reaction: '📲', // Changed to more appropriate emoji
  categorie: "Download",
  aliases: ["app", "playstore"]
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const appName = arg.join(" ").trim();

  if (!appName) {
    return repondre(`Please provide an app name.\nExample: *${s.PREFIXE}apk WhatsApp*`);
  }

  try {
    // Step 1: Search for the app
    const searchResponse = await axios.get(`https://bk9.fun/search/apk?q=${encodeURIComponent(appName)}`);
    
    if (!searchResponse.data?.BK9?.length) {
      return repondre(`❌ No apps found for *${appName}*`);
    }

    // Step 2: Get download link (first result)
    const appId = searchResponse.data.BK9[0].id;
    const detailsResponse = await axios.get(`https://bk9.fun/download/apk?id=${appId}`);
    
    if (!detailsResponse.data?.BK9?.dllink) {
      return repondre("⚠️ Download link not available for this app");
    }

    const appData = detailsResponse.data.BK9;
    const appFileName = `${appData.name.replace(/[^a-z0-9]/gi, '_')}.apk`;

    // Step 3: Send the APK file
    await zk.sendMessage(
      dest,
      {
        document: { url: appData.dllink },
        fileName: appFileName,
        mimetype: "application/vnd.android.package-archive",
        caption: `📱 *${appData.name}*\n⬇️ Downloading APK...\n\n*Powered by ${s.BOT}*`,
        contextInfo: {
          externalAdReply: {
            title: "APK Downloader",
            body: `Get ${appData.name} APK`,
            thumbnail: (await axios.get(appData.icon || 'https://files.catbox.moe/xyz123.jpg', 
                      { responseType: "arraybuffer" })).data,
            mediaType: 1
          }
        }
      },
      { quoted: ms }
    );

  } catch (error) {
    console.error("APK Command Error:", error);
    repondre(`❌ Failed to download APK. Error: ${error.message}`);
  }
});
