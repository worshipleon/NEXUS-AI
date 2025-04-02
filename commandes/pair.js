const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "pair",
  'aliases': ["session", "pair", "paircode", "qrcode"],
  'reaction': '🎀',
  'categorie': "General"
}, async (_0x56d90d, _0x3dcc2e, _0x1c58d3) => {
  const {
    repondre: _0x2c1718,
    arg: _0x454b79
  } = _0x1c58d3;
  try {
    if (!_0x454b79 || _0x454b79.length === 0) {
      return _0x2c1718("*Add number in the Formart; 25474........*");
    }
    await _0x2c1718("*Chill......Generating*");
    const _0x3121a0 = encodeURIComponent(_0x454b79.join(" "));
    const _0x26074b = "https://queenmsession-5f097131c2ec.herokuapp.com/pair?number=" + _0x3121a0;
    const _0x4b523e = await axios.get(_0x26074b);
    const _0x3a3724 = _0x4b523e.data;
    if (_0x3a3724 && _0x3a3724.code) {
      const _0xc0036f = _0x3a3724.code;
      await _0x2c1718('' + _0xc0036f);
      await _0x2c1718("*Copy the above code and use it to link your Whatsapp via linked devices*.");
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (_0x2547cd) {
    console.error("Error getting API response:", _0x2547cd.message);
    _0x2c1718("Error getting response from API.");
  }
});
