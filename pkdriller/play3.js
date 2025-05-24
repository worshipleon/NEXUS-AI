const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const ytSearch = require("yt-search");
const conf = require(__dirname + "/../set");
const getContextInfo = (_0x456dc3 = '', _0x11d200 = '', _0xaf8f6c = '') => ({
  'mentionedJid': [_0x11d200],
  'forwardingScore': 0x3e7,
  'isForwarded': true,
  'forwardedNewsletterMessageInfo': {
    'newsletterJid': "120363353854480831@newsletter",
    'newsletterName': "NEXUS AI",
    'serverMessageId': Math.floor(0x186a0 + Math.random() * 0xdbba0)
  },
  'externalAdReply': {
    'showAdAttribution': true,
    'title': conf.BOT || "YouTube Downloader",
    'body': _0x456dc3 || "Media Downloader",
    'thumbnailUrl': _0xaf8f6c || conf.URL || '',
    'sourceUrl': conf.GURL || '',
    'mediaType': 0x1,
    'renderLargerThumbnail': false
  }
});
async function searchYouTube(_0x47b5e0) {
  try {
    const _0x56caba = await ytSearch(_0x47b5e0);
    if (!_0x56caba?.["videos"]?.["length"]) {
      throw new Error("No video found for the specified query.");
    }
    return _0x56caba.videos[0x0];
  } catch (_0x3dc787) {
    console.error("YouTube search error:", _0x3dc787);
    throw new Error("YouTube search failed: " + _0x3dc787.message);
  }
}
async function downloadFromApis(_0x1f6cc3) {
  for (const _0x3a4177 of _0x1f6cc3) {
    try {
      const _0x329012 = await axios.get(_0x3a4177, {
        'timeout': 0x3a98
      });
      if (_0x329012.data?.["success"]) {
        return _0x329012.data;
      }
    } catch (_0x3cc8cf) {
      console.warn("API " + _0x3a4177 + " failed:", _0x3cc8cf.message);
      continue;
    }
  }
  throw new Error("Failed to retrieve download URL from all sources.");
}
zokou({
  'nomCom': "play3",
  'aliases': ["song", "playdoc", "audio", 'mp3'],
  'categorie': "download",
  'reaction': '🎵'
}, async (_0x144ff3, _0x4a694f, _0x377656) => {
  const {
    arg: _0xbc4c8b,
    ms: _0x25bf6f,
    userJid: _0x292082
  } = _0x377656;
  try {
    if (!_0xbc4c8b[0x0]) {
      return repondre(_0x4a694f, _0x144ff3, _0x25bf6f, "Please provide a song name.");
    }
    const _0x3a5329 = _0xbc4c8b.join(" ");
    const _0x30ff0e = await searchYouTube(_0x3a5329);
    await _0x4a694f.sendMessage(_0x144ff3, {
      'text': "🔱 *NEXUS AI DOWNLOADING AUDIO*...",
      'contextInfo': getContextInfo("Downloading", _0x292082, _0x30ff0e.thumbnail)
    }, {
      'quoted': _0x25bf6f
    });
    const _0x5b51b2 = ['https://api.davidcyriltech.my.id/download/ytmp3?url=' + encodeURIComponent(_0x30ff0e.url), "https://www.dark-yasiya-api.site/download/ytmp3?url=" + encodeURIComponent(_0x30ff0e.url), 'https://api.giftedtech.web.id/api/download/dlmp3?url=' + encodeURIComponent(_0x30ff0e.url) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x30ff0e.url)];
    const _0x443de1 = await downloadFromApis(_0x5b51b2);
    const {
      download_url: _0x5d7880,
      title: _0x2c8067
    } = _0x443de1.result;
    const _0xe12233 = [{
      'audio': {
        'url': _0x5d7880
      },
      'mimetype': "audio/mp4",
      'caption': "🎵 *" + _0x2c8067 + '*',
      'contextInfo': getContextInfo(_0x2c8067, _0x292082, _0x30ff0e.thumbnail)
    }, {
      'document': {
        'url': _0x5d7880
      },
      'mimetype': 'audio/mpeg',
      'fileName': (_0x2c8067 + ".mp3").replace(/[^\w\s.-]/gi, ''),
      'caption': "📁 *" + _0x2c8067 + "* (Document)",
      'contextInfo': getContextInfo(_0x2c8067, _0x292082, _0x30ff0e.thumbnail)
    }];
    for (const _0x3a585f of _0xe12233) {
      await _0x4a694f.sendMessage(_0x144ff3, _0x3a585f, {
        'quoted': _0x25bf6f
      });
    }
  } catch (_0xac4d1f) {
    console.error("Audio download error:", _0xac4d1f);
    repondre(_0x4a694f, _0x144ff3, _0x25bf6f, "Download failed: " + _0xac4d1f.message);
  }
});
zokou({
  'nomCom': 'video3',
  'aliases': ["videodoc", "film", "mp4"],
  'categorie': "download",
  'reaction': '🎬'
}, async (_0x2e341f, _0xd41966, _0x1074b8) => {
  const {
    arg: _0x4ea0fb,
    ms: _0x1d9667,
    userJid: _0x2d2ae4
  } = _0x1074b8;
  try {
    if (!_0x4ea0fb[0x0]) {
      return repondre(_0xd41966, _0x2e341f, _0x1d9667, "Please provide a video name.");
    }
    const _0x1676b7 = _0x4ea0fb.join(" ");
    const _0xf71d52 = await searchYouTube(_0x1676b7);
    await _0xd41966.sendMessage(_0x2e341f, {
      'text': "🔱 *NEXUS AI DOWNLOADING VIDEO*...",
      'contextInfo': getContextInfo("Downloading", _0x2d2ae4, _0xf71d52.thumbnail)
    }, {
      'quoted': _0x1d9667
    });
    const _0x9cbb1d = ["https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0xf71d52.url), "https://www.dark-yasiya-api.site/download/ytmp4?url=" + encodeURIComponent(_0xf71d52.url), "https://api.giftedtech.web.id/api/download/dlmp4?url=" + encodeURIComponent(_0xf71d52.url) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/video?url=" + encodeURIComponent(_0xf71d52.url)];
    const _0x19ddc1 = await downloadFromApis(_0x9cbb1d);
    const {
      download_url: _0x5c8e93,
      title: _0x3bd6dc
    } = _0x19ddc1.result;
    const _0x2871f9 = [{
      'video': {
        'url': _0x5c8e93
      },
      'mimetype': "video/mp4",
      'caption': "🎥 *" + _0x3bd6dc + '*',
      'contextInfo': getContextInfo(_0x3bd6dc, _0x2d2ae4, _0xf71d52.thumbnail)
    }, {
      'document': {
        'url': _0x5c8e93
      },
      'mimetype': "video/mp4",
      'fileName': (_0x3bd6dc + ".mp4").replace(/[^\w\s.-]/gi, ''),
      'caption': "📁 *" + _0x3bd6dc + "* (Document)",
      'contextInfo': getContextInfo(_0x3bd6dc, _0x2d2ae4, _0xf71d52.thumbnail)
    }];
    for (const _0x37dc58 of _0x2871f9) {
      await _0xd41966.sendMessage(_0x2e341f, _0x37dc58, {
        'quoted': _0x1d9667
      });
    }
  } catch (_0x44f4fc) {
    console.error("Video download error:", _0x44f4fc);
    repondre(_0xd41966, _0x2e341f, _0x1d9667, "Download failed: " + _0x44f4fc.message);
  }
});
