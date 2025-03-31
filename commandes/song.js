const { zokou } = require("../framework/zokou");
const axios = require('axios');
const ytSearch = require('yt-search');
const conf = require(__dirname + '/../set');

// Define the command with aliases for play
zokou({
    nomCom: "play",
    aliases: ["song", "playdoc", "audio", "mp3"],
    categorie: "Search",
    reaction: "🎧"
}, async (dest, zk, commandOptions) => {
    const { arg, ms, repondre } = commandOptions;

    // Check if a query is provided
    if (!arg || arg.length === 0) {
        return repondre("Please provide a video name.");
    }

    const query = arg.join(" ");

    try {
        // Perform YouTube search
        const searchResults = await ytSearch(query);
        
        // Validate search results
        if (!searchResults?.videos?.length) {
            return repondre('No videos found for your query.');
        }

        const firstVideo = searchResults.videos[0];
        const videoUrl = firstVideo.url;

        // List of download APIs to try
        const downloadApis = [
            `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
            `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(videoUrl)}`,
            `https://www.dark-yasiya-api.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
            `https://api.giftedtech.web.id/api/download/dlmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
            `https://api.dreaded.site/api/ytdl/audio?url=${encodeURIComponent(videoUrl)}`
        ];

        // Try each API until we get a successful response
        let downloadData;
        for (const api of downloadApis) {
            try {
                const response = await axios.get(api);
                if (response.data?.success) {
                    downloadData = response.data;
                    break;
                }
            } catch (error) {
                console.error(`API ${api} failed:`, error.message);
                continue;
            }
        }

        // Check if we got valid download data
        if (!downloadData?.success) {
            return repondre('Failed to retrieve download URL. Please try again later.');
        }

        const { download_url: downloadUrl, title } = downloadData.result;

        // Prepare message payloads
        const messagePayloads = [
            {
                caption: `
*PK DRILLER MUSIC DOWNLOAD*
Title: ${title}
Quality: High
Duration: ${firstVideo.timestamp}

> *PkDriller*
                `,
                document: { url: downloadUrl },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363345407274799@newsletter',
                        newsletterName: "PkDriller",
                        serverMessageId: 143,
                    },
                    forwardingScore: 999,
                    externalAdReply: {
                        title: "Pk Driller",
                        body: "The Best",
                        thumbnailUrl: 'https://files.catbox.moe/r1j72m.jpeg',
                        sourceUrl: 'https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    },
                },
            },
            {
                audio: { url: downloadUrl },
                mimetype: 'audio/mp4',
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: title,
                        mediaType: 1,
                        sourceUrl: conf.GURL,
                        thumbnailUrl: firstVideo.thumbnail,
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                    },
                },
            }
        ];

        // Send all messages
        for (const payload of messagePayloads) {
            try {
                await zk.sendMessage(dest, payload, { quoted: ms });
            } catch (sendError) {
                console.error('Error sending message:', sendError);
            }
        }

    } catch (error) {
        console.error('Error in play command:', error);
        repondre(`An error occurred: ${error.message || 'Please try again later.'}`);
    }
});
