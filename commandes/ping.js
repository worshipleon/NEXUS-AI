const {
  zokou
} = require(__dirname + "/../framework/zokou");
const moment = require("moment-timezone");
const set = require(__dirname + "/../set");
moment.tz.setDefault('' + set.TZ);
zokou({
  'nomCom': "ping",
  'categorie': "General"
}, async (_0x1cfd0d, _0x4a1bf3, _0x5450df) => {
  let {
    ms: _0x42e0be
  } = _0x5450df;
  const {
    time: _0xf4b569,
    date: _0x4596ed
  } = {
    'time': moment().format("HH:mm:ss"),
    'date': moment().format("DD/MM/YYYY")
  };
  const _0x202b3a = Math.floor(Math.random() * 100) + 1;
  try {
    await _0x4a1bf3.sendMessage(_0x1cfd0d, {
      'audio': {
        'url': "https://files.catbox.moe/m1wgdb.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true,
      'contextInfo': {
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363288304618280@newsletter",
          'newsletterName': "Queen-M",
          'serverMessageId': 0x8f
        },
        'forwardingScore': 0x3e7,
        'externalAdReply': {
          'title': "QUEEN-M",
          'body': "Pong" + _0x202b3a + "Ms\n*Date:* " + _0x4596ed + "\n⏰ *Time:* " + _0xf4b569,
          'thumbnailUrl': "https://files.catbox.moe/r1j72m.jpeg",
          'sourceUrl': "https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    }, {
      'quoted': _0x42e0be
    });
  } catch (_0x161004) {
    console.log("❌ Ping Command Error: " + _0x161004);
    repondre("❌ Error: " + _0x161004);
  }
});
