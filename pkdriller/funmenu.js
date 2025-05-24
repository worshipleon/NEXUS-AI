const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const ytSearch = require("yt-search");
const conf = require(__dirname + "/../set");
const getContextInfo = (_0x229bcc = '', _0x26cd38 = '', _0xbb61c4 = '') => ({
  'mentionedJid': [_0x26cd38],
  'forwardingScore': 0x3e7,
  'isForwarded': true,
  'forwardedNewsletterMessageInfo': {
    'newsletterJid': "120363345407274799@newsletter",
    'newsletterName': "╭••➤©NEXUS AI",
    'serverMessageId': Math.floor(100000 + Math.random() * 900000)
  },
  'externalAdReply': {
    'showAdAttribution': true,
    'title': conf.BOT || "YouTube Downloader",
    'body': _0x229bcc || "Media Downloader",
    'thumbnailUrl': _0xbb61c4 || conf.URL || '',
    'sourceUrl': conf.GURL || '',
    'mediaType': 0x1,
    'renderLargerThumbnail': false
  }
});
async function searchYouTube(_0x443114) {
  try {
    const _0x520a51 = await ytSearch(_0x443114);
    if (!_0x520a51?.["videos"]?.["length"]) {
      throw new Error("No video found for the specified query.");
    }
    return _0x520a51.videos[0];
  } catch (_0x286a19) {
    console.error("YouTube search error:", _0x286a19);
    throw new Error("YouTube search failed: " + _0x286a19.message);
  }
}
async function downloadFromApis(_0x32520a) {
  for (const _0x324e91 of _0x32520a) {
    try {
      const _0x5eb6a5 = await axios.get(_0x324e91, {
        'timeout': 0x3a98
      });
      if (_0x5eb6a5.data?.["success"]) {
        return _0x5eb6a5.data;
      }
    } catch (_0x1f2a80) {
      console.warn("API " + _0x324e91 + " failed:", _0x1f2a80.message);
      continue;
    }
  }
  throw new Error("Failed to retrieve download URL from all sources.");
}
fana({
  'nomCom': "play3",
  'aliases': ["song", "playdoc", "audio", "mp3"],
  'categorie': "download",
  'reaction': '🎶'
}, async (_0x21a07e, _0x6f4e8d, _0x9d8100) => {
  const {
    arg: _0x11f770,
    ms: _0x144987,
    userJid: _0x5cf3f1
  } = _0x9d8100;
  try {
    if (!_0x11f770[0]) {
      return repondre(_0x6f4e8d, _0x21a07e, _0x144987, "Please provide a song name.");
    }
    const _0x6f85c8 = _0x11f770.join(" ");
    const _0x12907a = await searchYouTube(_0x6f85c8);
    await _0x6f4e8d.sendMessage(_0x21a07e, {
      'image': {
        'url': _0x12907a.thumbnail
      },
      'caption': "🎵 *" + _0x12907a.title + "*\n> ⬇️ NEXUS AI downloading audio This may take a moment...",
      'contextInfo': getContextInfo("Downloading", _0x5cf3f1, _0x12907a.thumbnail)
    }, {
      'quoted': _0x144987
    });
    const _0x2fcfad = ["https://api.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0x12907a.url), "https://www.dark-yasiya-api.site/download/ytmp3?url=" + encodeURIComponent(_0x12907a.url), "https://api.giftedtech.web.id/api/download/dlmp3?url=" + encodeURIComponent(_0x12907a.url) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x12907a.url)];
    const _0x5d497c = await downloadFromApis(_0x2fcfad);
    const {
      download_url: _0xd6a57d,
      title: _0x551f15
    } = _0x5d497c.result;
    const _0x35a7ce = [{
      'audio': {
        'url': _0xd6a57d
      },
      'mimetype': "audio/mp4",
      'caption': "🎵 *" + _0x551f15 + '*'
    }, {
      'document': {
        'url': _0xd6a57d
      },
      'mimetype': "audio/mpeg",
      'fileName': (_0x551f15 + ".mp3").replace(/[^\w\s.-]/gi, ''),
      'caption': "📁 *" + _0x551f15 + "* (Document)\n> download and Subscribe by Alec-Jb"
    }];
    for (const _0x4ccfd3 of _0x35a7ce) {
      await _0x6f4e8d.sendMessage(_0x21a07e, _0x4ccfd3, {
        'quoted': _0x144987
      });
    }
  } catch (_0x142b77) {
    console.error("Audio download error:", _0x142b77);
    repondre(_0x6f4e8d, _0x21a07e, _0x144987, "Download failed: " + _0x142b77.message);
  }
});
fana({
  'nomCom': "video3",
  'aliases': ["videodoc", "film", "mp4"],
  'categorie': "download",
  'reaction': '🎬'
}, async (_0xbe52bf, _0x57b3f6, _0x459ffa) => {
  const {
    arg: _0x2603e5,
    ms: _0x405c82,
    userJid: _0x251253
  } = _0x459ffa;
  try {
    if (!_0x2603e5[0]) {
      return repondre(_0x57b3f6, _0xbe52bf, _0x405c82, "Please provide a video name.");
    }
    const _0x53f095 = _0x2603e5.join(" ");
    const _0x25bc53 = await searchYouTube(_0x53f095);
    await _0x57b3f6.sendMessage(_0xbe52bf, {
      'image': {
        'url': _0x25bc53.thumbnail
      },
      'caption': "🎵 *" + _0x25bc53.title + "*\n> ⬇️ NEXUS AI downloading video This may take a moment...\",",
      'contextInfo': getContextInfo("Downloading", _0x251253, _0x25bc53.thumbnail)
    }, {
      'quoted': _0x405c82
    });
    const _0x112d28 = ["https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x25bc53.url), "https://www.dark-yasiya-api.site/download/ytmp4?url=" + encodeURIComponent(_0x25bc53.url), "https://api.giftedtech.web.id/api/download/dlmp4?url=" + encodeURIComponent(_0x25bc53.url) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/video?url=" + encodeURIComponent(_0x25bc53.url)];
    const _0x46bb7e = await downloadFromApis(_0x112d28);
    const {
      download_url: _0x879ba1,
      title: _0x5c8e15
    } = _0x46bb7e.result;
    const _0x5a6385 = [{
      'video': {
        'url': _0x879ba1
      },
      'mimetype': "video/mp4",
      'caption': "🎥 *" + _0x5c8e15 + '*'
    }, {
      'document': {
        'url': _0x879ba1
      },
      'mimetype': "video/mp4",
      'fileName': (_0x5c8e15 + ".mp4").replace(/[^\w\s.-]/gi, ''),
      'caption': "📁 *" + _0x5c8e15 + "* (Document)\n> download and Subscribe by Alec-Jb"
    }];
    for (const _0x4f0062 of _0x5a6385) {
      await _0x57b3f6.sendMessage(_0xbe52bf, _0x4f0062, {
        'quoted': _0x405c82
      });
    }
  } catch (_0x2580f7) {
    console.error("Video download error:", _0x2580f7);
    repondre(_0x57b3f6, _0xbe52bf, _0x405c82, "Download failed: " + _0x2580f7.message);
  }
});
