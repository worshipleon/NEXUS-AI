const _0x2cf529 = _0x85bb;
(function(_0xf1c684, _0x5c6714) {
    const _0x24c64b = _0x85bb,
        _0x1112b4 = _0xf1c684();
    while (!![]) {
        try {
            const _0x38123c = parseInt(_0x24c64b(0x246)) / 0x1 + parseInt(_0x24c64b('\x30\x78\x32\x37\x39')) / 0x2 * (parseInt(_0x24c64b(0x270)) / 0x3) + parseInt(_0x24c64b('\x30\x78\x31\x36\x63')) / 0x4 * (-parseInt(_0x24c64b(0x1c1)) / 0x5) + parseInt(_0x24c64b(0x229)) / 0x6 + -parseInt(_0x24c64b(0x296)) / 0x7 + -parseInt(_0x24c64b('\x30\x78\x31\x38\x66')) / 0x8 + -parseInt(_0x24c64b('\x30\x78\x31\x33\x62')) / 0x9 * (-parseInt(_0x24c64b('\x30\x78\x32\x30\x39')) / 0xa);
            if (_0x38123c === _0x5c6714) break;
            else _0x1112b4['push'](_0x1112b4['shift']());
        } catch (_0x5e6ec1) {
            _0x1112b4['push'](_0x1112b4['shift']());
        }
    }
}(_0x2f2e, 0x38397));
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    getContentType,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    AnyMessageContent,
    prepareWAMessageMedia,
    areJidsSameUser,
    downloadContentFromMessage,
    MessageRetryMap,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    generateMessageID,
    makeInMemoryStore,
    jidDecode,
    fetchLatestBaileysVersion,
    Browsers
} = require(_0x2cf529(0x24e)), l = console[_0x2cf529('\x30\x78\x31\x31\x64')], {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x73'), fs = require('\x66\x73'), ff = require(_0x2cf529('\x30\x78\x32\x36\x65')), P = require(_0x2cf529(0x14c)), config = require(_0x2cf529('\x30\x78\x32\x37\x32')), qrcode = require(_0x2cf529(0x127)), StickersTypes = require(_0x2cf529('\x30\x78\x31\x31\x36')), util = require('\x75\x74\x69\x6c'), {
    sms,
    downloadMediaMessage
} = require('\x2e\x2f\x6c\x69\x62\x2f\x6d\x73\x67'), FileType = require(_0x2cf529(0x1e6)), axios = require(_0x2cf529(0x197)), {
    File
} = require(_0x2cf529('\x30\x78\x31\x64\x39')), {
    fromBuffer
} = require(_0x2cf529('\x30\x78\x31\x65\x36')), bodyparser = require(_0x2cf529(0x28b)), os = require('\x6f\x73'), Crypto = require(_0x2cf529(0x234)), path = require(_0x2cf529(0x1e0)), prefix = config[_0x2cf529('\x30\x78\x31\x35\x64')], ownerNumber = [_0x2cf529(0x278)], tempDir = path[_0x2cf529(0x117)](os['\x74\x6d\x70\x64\x69\x72'](), _0x2cf529('\x30\x78\x32\x30\x36'));
!fs[_0x2cf529('\x30\x78\x31\x66\x34')](tempDir) && fs[_0x2cf529('\x30\x78\x31\x61\x64')](tempDir);
const clearTempDir = () => {
    fs['\x72\x65\x61\x64\x64\x69\x72'](tempDir, (_0x3b384f, _0x1e8fd7) => {
        const _0x5c97ac = _0x85bb;
        if (_0x3b384f) throw _0x3b384f;
        for (const _0x2b9b9d of _0x1e8fd7) {
            fs[_0x5c97ac(0x159)](path['\x6a\x6f\x69\x6e'](tempDir, _0x2b9b9d), _0x549b6a => {
                if (_0x549b6a) throw _0x549b6a;
            });
        }
    });
};

function _0x85bb(_0x34097f, _0x4a219e) {
    const _0x2f2e62 = _0x2f2e();
    return _0x85bb = function(_0x85bb39, _0x3e43ca) {
        _0x85bb39 = _0x85bb39 - 0xfc;
        let _0x76059b = _0x2f2e62[_0x85bb39];
        return _0x76059b;
    }, _0x85bb(_0x34097f, _0x4a219e);
}
setInterval(clearTempDir, 0x5 * 0x3c * 0x3e8);
if (!fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](__dirname + '\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f\x63\x72\x65\x64\x73\x2e\x6a\x73\x6f\x6e')) {
    if (!config[_0x2cf529(0x236)]) return console['\x6c\x6f\x67'](_0x2cf529('\x30\x78\x31\x33\x39'));
    const sessdata = config[_0x2cf529('\x30\x78\x32\x33\x36')][_0x2cf529(0x1d3)](_0x2cf529('\x30\x78\x32\x35\x63'), ''),
        filer = File[_0x2cf529(0x22d)](_0x2cf529('\x30\x78\x32\x31\x37') + sessdata);
    filer[_0x2cf529('\x30\x78\x66\x64')]((_0x521b2b, _0x553b65) => {
        const _0x2f540f = _0x2cf529;
        if (_0x521b2b) throw _0x521b2b;
        fs[_0x2f540f(0x25f)](__dirname + _0x2f540f('\x30\x78\x31\x34\x36'), _0x553b65, () => {
            const _0x1588d9 = _0x2f540f;
            console[_0x1588d9(0x11d)](_0x1588d9('\x30\x78\x31\x64\x65'));
        });
    });
}
const express = require(_0x2cf529(0x150)),
    app = express(),
    port = process[_0x2cf529('\x30\x78\x31\x39\x33')][_0x2cf529('\x30\x78\x31\x30\x61')] || 0x2382;

function _0x2f2e() {
    const _0x40b673 = ['\x72\x65\x6c\x61\x79\x4d\x65\x73\x73\x61\x67\x65', '\x61\x75\x64\x69\x6f', '\x42\x6f\x74\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x74\x6f\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\u2705', '\x73\x75\x62\x6a\x65\x63\x74', '\x72\x65\x61\x63\x74', '\ud83c\uddea\ud83c\uddf8', '\ud83d\udc68\u200d\u2708\ufe0f', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x67\x61\x2e\x6e\x7a\x2f\x66\x69\x6c\x65\x2f', '\x70\x68\x6f\x74\x6f', '\x73\x74\x69\x63\x6b\x65\x72\x4d\x65\x73\x73\x61\x67\x65', '\ud83e\uddd7\u200d\u2642\ufe0f', '\ud83d\udc69\u200d\ud83d\udd27', '\ud83d\udc68\u200d\ud83c\udf73', '\x76\x69\x64\x65\x6f', '\ud83e\uddde\u200d\u2640\ufe0f', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x70\x64\x66', '\ud83e\udd3e\u200d\u2642\ufe0f', '\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc69\u200d\ud83d\ude92', '\x61\x73\x53\x74\x69\x63\x6b\x65\x72', '\x50\x6c\x75\x67\x69\x6e\x73\x20\x69\x6e\x73\x74\x61\x6c\x6c\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x20\u2705', '\x2e\x6a\x73', '\x6d\x61\x74\x63\x68\x41\x6c\x6c', '\ud83d\udc73\u200d\u2640\ufe0f', '\ud83d\udd74\u200d\u2640\ufe0f', '\x31\x37\x34\x36\x38\x32\x38\x44\x45\x49\x63\x71\x55', '\x6b\x65\x79', '\x73\x65\x6e\x64\x54\x65\x78\x74', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67', '\x66\x72\x6f\x6d\x55\x52\x4c', '\ud83e\udddd\u200d\u2640\ufe0f', '\ud83d\udd74\ufe0f', '\ud83d\udc87\u200d\u2640\ufe0f', '\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72', '\x67\x72\x6f\x75\x70\x73', '\ud83c\udfc4\u200d\u2642\ufe0f', '\x63\x72\x79\x70\x74\x6f', '\x5b\x50\x4c\x55\x47\x49\x4e\x20\x45\x52\x52\x4f\x52\x5d\x20', '\x53\x45\x53\x53\x49\x4f\x4e\x5f\x49\x44', '\ud83d\udc3b\u200d\u2744\ufe0f', '\ud83d\ude47\u200d\u2640\ufe0f', '\ud83e\uddb9\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83d\udcbb', '\ud83d\udd90\ufe0f', '\ud83d\udd75\ufe0f\u200d\u2640\ufe0f', '\x65\x6e\x64\x73\x57\x69\x74\x68', '\x69\x6e\x62\x6f\x78', '\ud83d\udc69\u200d\ud83d\udcbb', '\x20\x61\x73\x20\x72\x65\x61\x64\x2e', '\ud83e\uddd1\u200d\u2696\ufe0f', '\ud83d\udc86\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\u2708\ufe0f', '\x41\x55\x54\x4f\x5f\x52\x45\x41\x43\x54', '\ud83e\uddd1\u200d\ud83c\udfed', '\x34\x32\x34\x35\x34\x33\x6c\x4c\x65\x74\x61\x64', '\ud83d\udc68\u200d\ud83c\udfa8', '\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68', '\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f', '\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65', '\ud83c\udfde\ufe0f', '\ud83e\uddd9\u200d\u2640\ufe0f', '\x66\x6c\x6f\x6f\x72', '\x40\x77\x68\x69\x73\x6b\x65\x79\x73\x6f\x63\x6b\x65\x74\x73\x2f\x62\x61\x69\x6c\x65\x79\x73', '\ud83d\udc69\u200d\ud83c\udfeb', '\ud83c\udde8\ud83c\udde6', '\ud83e\uddde\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83e\uddb1', '\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74', '\x73\x74\x69\x63\x6b\x65\x72', '\x61\x75\x74\x68\x6f\x72', '\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69', '\u2764\ufe0f\u200d\ud83d\udd25', '\ud83c\udfcc\ufe0f', '\ud83d\ude2e\u200d\ud83d\udca8', '\x70\x61\x72\x73\x65\x4d\x65\x6e\x74\x69\x6f\x6e', '\x42\x2e\x6d\x2e\x62\x2d\x58\x6d\x64\x7e', '\ud83c\udfc4\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\u2696\ufe0f', '\x77\x72\x69\x74\x65\x46\x69\x6c\x65', '\ud83c\udde6\ud83c\uddfa', '\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65', '\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', '\x74\x72\x75\x65', '\x41\x4e\x54\x49\x5f\x56\x56', '\x43\x55\x53\x54\x4f\x4d\x5f\x52\x45\x41\x43\x54\x5f\x45\x4d\x4f\x4a\x49\x53', '\ud83c\udfc3\u200d\u2640\ufe0f', '\ud83e\uddd9\u200d\u2642\ufe0f', '\ud83c\udfca\u200d\u2642\ufe0f', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68', '\ud83e\uddd1\u200d\u2695\ufe0f', '\ud83e\udd38\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83e\uddd1\u200d\ud83c\udf84', '\x66\x6c\x75\x65\x6e\x74\x2d\x66\x66\x6d\x70\x65\x67', '\ud83c\udfc3\u200d\u2642\ufe0f', '\x32\x37\x5a\x45\x42\x69\x47\x65', '\ud83e\udddb\u200d\u2640\ufe0f', '\x2e\x2f\x63\x6f\x6e\x66\x69\x67', '\u26f9\ufe0f\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\ud83e\uddbc', '\x73\x65\x6e\x64\x46\x69\x6c\x65', '\x46\x69\x72\x65\x66\x6f\x78', '\ud83c\uddef\ud83c\uddf5', '\x32\x35\x35\x37\x36\x37\x38\x36\x32\x34\x35\x37', '\x35\x31\x32\x32\x32\x41\x51\x67\x59\x73\x46', '\ud83d\udd6f\ufe0f', '\ud83d\udc68\u200d\ud83d\udc66', '\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x52\x45\x50\x4c\x59', '\ud83e\uddb9\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68', '\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f', '\ud83d\udd73\ufe0f', '\ud83d\udc69\u200d\ud83d\udc66', '\x61\x73\x44\x6f\x63\x75\x6d\x65\x6e\x74', '\x6d\x69\x6d\x65\x74\x79\x70\x65', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83e\uddd8\u200d\u2642\ufe0f', '\ud83e\udd3d\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83d\udd2c', '\ud83d\ude36\u200d\ud83c\udf2b\ufe0f', '\ud83d\udea3\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\ud83e\uddaf', '\x62\x6f\x64\x79\x2d\x70\x61\x72\x73\x65\x72', '\x73\x74\x72\x69\x6e\x67\x69\x66\x79', '\x68\x65\x61\x64\x65\x72\x73', '\ud83d\udc70\u200d\u2640\ufe0f', '\x73\x70\x6c\x69\x74', '\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', '\x76\x69\x65\x77\x4f\x6e\x63\x65', '\x73\x69\x6c\x65\x6e\x74', '\ud83d\udc87\u200d\u2642\ufe0f', '\x70\x61\x63\x6b\x6e\x61\x6d\x65', '\x68\x65\x61\x64', '\x32\x31\x30\x36\x34\x35\x34\x61\x6d\x55\x5a\x61\x54', '\x6f\x70\x65\x6e', '\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65', '\ud83e\uddd6\u200d\u2640\ufe0f', '\ud83e\uddcf\u200d\u2640\ufe0f', '\ud83e\uddd1\u200d\ud83c\udf73', '\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2e\x75\x70\x64\x61\x74\x65', '\x6d\x74\x79\x70\x65', '\ud83d\udc69\u200d\ud83c\udf7c', '\ud83d\ude46\u200d\u2642\ufe0f', '\ud83e\uddce\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\x70\x75\x73\x68\x4e\x61\x6d\x65', '\ud83e\udddf\u200d\u2642\ufe0f', '\ud83d\udd77\ufe0f', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d', '\ud83e\uddd1\u200d\ud83c\udf93', '\x73\x68\x69\x66\x74', '\x64\x6f\x77\x6e\x6c\x6f\x61\x64', '\ud83d\udc69\u200d\ud83e\uddb1', '\x6b\x65\x79\x73', '\ud83d\udc15\u200d\ud83e\uddba', '\ud83e\uddd1\u200d\ud83d\udd2c', '\ud83e\udd37\u200d\u2642\ufe0f', '\ud83e\udddc\u200d\u2642\ufe0f', '\x72\x61\x6e\x64\x6f\x6d', '\x63\x6f\x6e\x63\x61\x74', '\ud83d\udc82\u200d\u2640\ufe0f', '\x67\x69\x66', '\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73', '\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f', '\x50\x4f\x52\x54', '\ud83c\uddfa\ud83c\uddf8', '\ud83e\uddd1\u200d\ud83d\ude92', '\x70\x61\x72\x73\x65', '\ud83d\udc68\u200d\ud83e\uddaf', '\x66\x75\x6e\x63\x74\x69\x6f\x6e', '\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x53\x45\x45\x4e', '\ud83d\udc68\u200d\ud83d\ude80', '\x69\x73\x42\x75\x66\x66\x65\x72', '\ud835\ude71\x2e\ud835\ude7c\x2e\ud835\ude71\x2d\ud835\ude87\ud835\ude7c\ud835\ude73\x20\x52\x75\x6e\x6e\x69\x6e\x67\x20\u2705', '\ud83d\udeb5\u200d\u2640\ufe0f', '\x6d\x65\x73\x73\x61\x67\x65\x73', '\x77\x61\x2d\x73\x74\x69\x63\x6b\x65\x72\x2d\x66\x6f\x72\x6d\x61\x74\x74\x65\x72', '\x6a\x6f\x69\x6e', '\x32\x35\x35\x37\x36\x37\x38\x36\x32\x34\x35\x37\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', '\ud83d\udeb4\u200d\u2640\ufe0f', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\x64\x6f\x63\x75\x6d\x65\x6e\x74', '\ud83d\ude4b\u200d\u2640\ufe0f', '\x6c\x6f\x67', '\ud83d\udd75\ufe0f', '\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68', '\ud83e\uddd4\u200d\u2640\ufe0f', '\ud83d\udc86\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udd74\u200d\u2642\ufe0f', '\ud83e\uddd7\u200d\u2640\ufe0f', '\ud83e\uddd8\u200d\u2640\ufe0f', '\ud83d\udcfd\ufe0f', '\x71\x72\x63\x6f\x64\x65\x2d\x74\x65\x72\x6d\x69\x6e\x61\x6c', '\x73\x65\x6e\x64\x56\x69\x64\x65\x6f\x41\x73\x53\x74\x69\x63\x6b\x65\x72', '\ud83d\udc77\u200d\u2642\ufe0f', '\x71\x75\x6f\x74\x65\x64\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc69\u200d\ud83c\udf93', '\ud83e\uddd1\u200d\ud83d\ude80', '\x76\x69\x64\x65\x6f\x2f\x6d\x70\x34', '\x63\x6f\x6d\x6d\x61\x6e\x64\x73', '\x66\x69\x6e\x64', '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83d\udc6e\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83c\udfa4', '\x61\x6c\x6c\x6f\x63', '\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\ude47\u200d\u2642\ufe0f', '\x72\x65\x61\x64\x4d\x65\x73\x73\x61\x67\x65\x73', '\ud83d\udc68\u200d\ud83d\udcbc', '\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64', '\x50\x6c\x65\x61\x73\x65\x20\x61\x64\x64\x20\x79\x6f\x75\x72\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x74\x6f\x20\x53\x45\x53\x53\x49\x4f\x4e\x5f\x49\x44\x20\x65\x6e\x76\x20\x21\x21', '\ud83d\udc71\u200d\u2642\ufe0f', '\x37\x32\x51\x6e\x47\x53\x6a\x70', '\ud83e\udd3d\u200d\u2642\ufe0f', '\x63\x61\x74\x63\x68', '\x66\x72\x6f\x6d\x4d\x65', '\ud83e\uddd1\u200d\ud83c\udfeb', '\x6c\x6f\x67\x67\x65\x64\x4f\x75\x74', '\x32\x35\x35\x37\x36\x37\x38\x36\x32\x34\x35\x35\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', '\x72\x65\x61\x64\x56\x69\x65\x77\x4f\x6e\x63\x65', '\ud83d\udc68\u200d\ud83c\udfed', '\ud83d\udc69\u200d\ud83c\udfa4', '\x72\x65\x61\x63\x74\x69\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65', '\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f\x63\x72\x65\x64\x73\x2e\x6a\x73\x6f\x6e', '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74', '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x20\x74\x6f\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\u23f3\ufe0f\x2e\x2e\x2e', '\x63\x6f\x70\x79\x4e\x46\x6f\x72\x77\x61\x72\x64', '\ud83d\udc69\u200d\ud83d\udc67', '\x73\x65\x72\x76\x65\x72', '\x70\x69\x6e\x6f', '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73', '\ud83e\udd39\u200d\u2640\ufe0f', '\ud83d\ude46\u200d\u2640\ufe0f', '\x65\x78\x70\x72\x65\x73\x73', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', '\x2e\x2f\x65\x78\x69\x66\x2e\x6a\x73', '\ud83e\udd3c\u200d\u2640\ufe0f', '\ud83e\uddd1\u200d\ud83e\uddb2', '\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x41\x6e\x64\x53\x61\x76\x65\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66', '\ud83d\udc3f\ufe0f', '\x73\x65\x6e\x64', '\x75\x6e\x6c\x69\x6e\x6b', '\ud83e\udd3e\u200d\u2640\ufe0f', '\ud83e\uddd1\u200d\ud83e\uddb3', '\ud83e\udd37\u200d\u2640\ufe0f', '\x50\x52\x45\x46\x49\x58', '\x6a\x73\x6f\x6e', '\ud83e\uddd1\u200d\ud83e\uddbd', '\ud83d\ude4b\u200d\u2642\ufe0f', '\x4d\x4f\x44\x45', '\x66\x72\x6f\x6d', '\u26f9\ufe0f\u200d\u2642\ufe0f', '\x66\x72\x6f\x6d\x4f\x62\x6a\x65\x63\x74', '\ud83e\udd26\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83e\uddb2', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', '\ud83e\uddd1\u200d\ud83d\udd27', '\ud83e\uddd1\u200d\ud83d\udcbc', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69', '\ud83c\uddec\ud83c\udde7', '\x38\x77\x42\x56\x69\x42\x47', '\ud83d\udc82\u200d\u2642\ufe0f', '\ud83e\uddb8\u200d\u2642\ufe0f', '\x73\x65\x6e\x64\x49\x6d\x61\x67\x65\x41\x73\x53\x74\x69\x63\x6b\x65\x72', '\x6d\x61\x63\x4f\x53', '\ud83d\udc68\u200d\u2696\ufe0f', '\ud83d\udd75\ufe0f\u200d\u2642\ufe0f', '\ud83e\uddce\u200d\u2640\ufe0f', '\x6d\x73\x67', '\ud83d\ude45\u200d\u2642\ufe0f', '\ud83c\udfcb\ufe0f', '\x67\x65\x74\x46\x69\x6c\x65', '\ud83d\udeb6\u200d\u2640\ufe0f', '\ud83e\uddd1\u200d\ud83c\udf7c', '\x69\x67\x6e\x6f\x72\x65', '\ud83e\udddd\u200d\u2642\ufe0f', '\x73\x6c\x69\x63\x65', '\x69\x6d\x61\x67\x65', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67', '\ud83d\udc69\u200d\ud83d\udd2c', '\ud83e\udddc\u200d\u2640\ufe0f', '\x65\x72\x72\x6f\x72', '\ud83d\udc69\u200d\u2695\ufe0f', '\ud83d\udc69\u200d\ud83c\udfa8', '\ud83e\uddd1\u200d\ud83e\uddaf', '\x6d\x61\x70', '\x75\x73\x65\x72', '\x73\x74\x72\x69\x6e\x67', '\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65\x73\x73\x61\x67\x65\x56\x32', '\ud83e\udd35\u200d\u2642\ufe0f', '\ud83e\udd39\u200d\u2642\ufe0f', '\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66', '\ud83d\ude4e\u200d\u2642\ufe0f', '\ud83d\udeb5\u200d\u2642\ufe0f', '\x33\x33\x32\x35\x35\x32\x38\x67\x67\x53\x41\x73\x4d', '\ud83e\uddda\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\ud83c\udf73', '\x63\x4d\x6f\x64', '\x65\x6e\x76', '\x4d\x65\x73\x73\x61\x67\x65', '\x57\x65\x62\x4d\x65\x73\x73\x61\x67\x65\x49\x6e\x66\x6f', '\ud83d\udc69\u200d\ud83d\ude80', '\x61\x78\x69\x6f\x73', '\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', '\ud83d\udde3\ufe0f', '\ud83d\udc6f\u200d\u2642\ufe0f', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x66\x69\x6c\x65\x73\x2e\x63\x61\x74\x62\x6f\x78\x2e\x6d\x6f\x65\x2f\x70\x39\x68\x79\x61\x6c\x2e\x6a\x70\x67', '\ud83d\udc6f\u200d\u2640\ufe0f', '\ud83d\udd78\ufe0f', '\ud83e\uddda\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83e\uddb0', '\ud83d\udc71\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83d\udc67', '\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63', '\x61\x75\x64\x69\x6f\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udeeb\ufe0f', '\x52\x45\x41\x44\x5f\x4d\x45\x53\x53\x41\x47\x45', '\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65', '\ud83e\udddf\u200d\u2640\ufe0f', '\x70\x72\x6f\x6d\x69\x73\x65\x73', '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61', '\ud83d\udc69\u200d\ud83d\udcbc', '\ud83e\udd35\u200d\u2640\ufe0f', '\ud83d\udc73\u200d\u2642\ufe0f', '\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63', '\ud83e\uddd1\u200d\ud83e\uddb0', '\x74\x79\x70\x65', '\x63\x72\x65\x64\x73\x2e\x75\x70\x64\x61\x74\x65', '\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68', '\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f', '\u2764\ufe0f\u200d\ud83e\ude79', '\ud83e\uddec\x20\x49\x6e\x73\x74\x61\x6c\x6c\x69\x6e\x67\x20\x50\x6c\x75\x67\x69\x6e\x73', '\ud83d\udc68\u200d\ud83e\uddbc', '\x6f\x75\x74\x70\x75\x74', '\x2e\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f', '\x6c\x69\x73\x74\x65\x6e', '\x73\x65\x6e\x64\x42\x75\x74\x74\x6f\x6e\x54\x65\x78\x74', '\ud83d\udc69\u200d\ud83c\udfed', '\x74\x65\x73\x74', '\x70\x72\x69\x76\x61\x74\x65', '\x6c\x65\x6e\x67\x74\x68', '\ud83d\udc70\u200d\u2642\ufe0f', '\x73\x65\x6e\x64\x49\x6d\x61\x67\x65', '\x31\x31\x34\x30\x32\x30\x63\x61\x46\x6d\x52\x78', '\ud83d\ude4d\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', '\ud83e\udd3c\u200d\u2642\ufe0f', '\x6d\x65\x73\x73\x61\x67\x65', '\ud83d\ude4e\u200d\u2640\ufe0f', '\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f', '\ud83d\ude45\u200d\u2640\ufe0f', '\x43\x55\x53\x54\x4f\x4d\x5f\x52\x45\x41\x43\x54', '\ud83d\udeb6\u200d\u2642\ufe0f', '\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65\x73\x73\x61\x67\x65', '\ud83e\udd38\u200d\u2642\ufe0f', '\x63\x6f\x6e\x76\x65\x72\x73\x61\x74\x69\x6f\x6e', '\ud83e\uddd1\u200d\ud83c\udf3e', '\ud83e\uddcd\u200d\u2642\ufe0f', '\x73\x74\x61\x74\x75\x73', '\ud83d\udc08\u200d\u2b1b', '\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65', '\x72\x65\x70\x6c\x61\x63\x65', '\ud83e\uddd1\u200d\ud83d\udcbb', '\ud83d\udc68\u200d\ud83d\ude92', '\ud83e\udd72\x2c\ud83d\ude02\x2c\ud83d\udc4d\ud83c\udffb\x2c\ud83d\ude42\x2c\ud83d\ude14', '\ud83e\uddcd\u200d\u2640\ufe0f', '\x63\x61\x70\x74\x69\x6f\x6e', '\x6d\x65\x67\x61\x6a\x73', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', '\x62\x61\x73\x65\x36\x34', '\ud83d\udc68\u200d\ud83c\udf3e', '\ud83e\uddd1\u200d\ud83c\udfa4', '\x53\x65\x73\x73\x69\x6f\x6e\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x65\x64\x20\u2705', '\ud83c\udfca\u200d\u2640\ufe0f', '\x70\x61\x74\x68', '\ud83e\uddd4\u200d\u2642\ufe0f', '\ud83e\udd26\u200d\u2642\ufe0f', '\x65\x78\x74', '\x74\x72\x69\x6d', '\x53\x69\x6e\x20\x4e\x6f\x6d\x62\x72\x65', '\x66\x69\x6c\x65\x2d\x74\x79\x70\x65', '\ud83e\uddd6\u200d\u2642\ufe0f', '\ud83d\udc69\u200d\ud83e\uddbd', '\x61\x75\x64\x69\x6f\x2f\x6d\x70\x65\x67', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66', '\ud83d\udea3\u200d\u2642\ufe0f', '\x2e\x2f\x65\x78\x69\x66', '\ud83e\uddb8\u200d\u2640\ufe0f', '\ud83d\udeec\ufe0f', '\ud83d\udc81\u200d\u2642\ufe0f', '\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\ude4d\u200d\u2640\ufe0f', '\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63', '\ud83d\udc68\u200d\ud83c\udf7c', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67', '\ud83d\udc68\u200d\ud83d\udd27', '\x53\x65\x72\x76\x65\x72\x20\x6c\x69\x73\x74\x65\x6e\x69\x6e\x67\x20\x6f\x6e\x20\x70\x6f\x72\x74\x20\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a', '\ud83d\udc69\u200d\ud83e\uddb0', '\ud83d\udc69\u200d\ud83e\uddb2', '\ud83d\uddef\ufe0f', '\x2e\x62\x69\x6e', '\ud83d\udc69\u200d\ud83c\udf3e', '\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udc68\u200d\ud83e\uddb3', '\ud83d\udc68\u200d\ud83e\uddbd', '\x74\x65\x78\x74', '\ud83d\udc41\ufe0f', '\ud83e\uddd1\u200d\ud83e\uddbc', '\ud83d\udc77\u200d\u2640\ufe0f', '\ud83e\uddd1\u200d\u2708\ufe0f', '\x63\x61\x63\x68\x65\x2d\x74\x65\x6d\x70', '\x61\x6c\x69\x61\x73', '\ud83d\udc68\u200d\ud83c\udf93', '\x35\x37\x39\x32\x30\x66\x6a\x78\x70\x44\x50', '\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70', '\x6d\x65\x73\x73\x61\x67\x65\x73\x2e\x75\x70\x73\x65\x72\x74', '\ud83d\udde8\ufe0f', '\ud83d\ude35\u200d\ud83d\udcab', '\ud83d\udee3\ufe0f', '\ud83e\udddb\u200d\u2642\ufe0f'];
    _0x2f2e = function() {
        return _0x40b673;
    };
    return _0x2f2e();
}
async function connectToWA() {
    const _0x44d87c = _0x2cf529;
    console['\x6c\x6f\x67'](_0x44d87c(0x148));
    const {
        state: _0x1f2375,
        saveCreds: _0x30a70d
    } = await useMultiFileAuthState(__dirname + '\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f');
    var {
        version: _0xa19ba8
    } = await fetchLatestBaileysVersion();
    const _0x34efde = makeWASocket({
        '\x6c\x6f\x67\x67\x65\x72': P({
            '\x6c\x65\x76\x65\x6c': _0x44d87c(0x292)
        }),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': ![],
        '\x62\x72\x6f\x77\x73\x65\x72': Browsers[_0x44d87c('\x30\x78\x31\x37\x30')](_0x44d87c('\x30\x78\x32\x37\x36')),
        '\x73\x79\x6e\x63\x46\x75\x6c\x6c\x48\x69\x73\x74\x6f\x72\x79': !![],
        '\x61\x75\x74\x68': _0x1f2375,
        '\x76\x65\x72\x73\x69\x6f\x6e': _0xa19ba8
    });
    _0x34efde['\x65\x76']['\x6f\x6e'](_0x44d87c('\x30\x78\x32\x39\x63'), _0x3104eb => {
        const _0x10a968 = _0x44d87c,
            {
                connection: _0x417e7d,
                lastDisconnect: _0x24a6eb
            } = _0x3104eb;
        if (_0x417e7d === '\x63\x6c\x6f\x73\x65') _0x24a6eb[_0x10a968('\x30\x78\x31\x38\x31')][_0x10a968('\x30\x78\x31\x62\x37')][_0x10a968('\x30\x78\x31\x38\x62')] !== DisconnectReason[_0x10a968('\x30\x78\x31\x34\x30')] && connectToWA();
        else {
            if (_0x417e7d === _0x10a968('\x30\x78\x32\x39\x37')) {
                console[_0x10a968('\x30\x78\x31\x31\x64')](_0x10a968('\x30\x78\x31\x62\x35'));
                const _0x1d7e51 = require(_0x10a968('\x30\x78\x31\x65\x30'));
                fs['\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6e\x63'](_0x10a968(0x1b8))['\x66\x6f\x72\x45\x61\x63\x68'](_0x3e87ef => {
                    const _0x296bb7 = _0x10a968;
                    _0x1d7e51['\x65\x78\x74\x6e\x61\x6d\x65'](_0x3e87ef)[_0x296bb7(0x1a6)]() == _0x296bb7(0x225) && require(_0x296bb7('\x30\x78\x31\x62\x38') + _0x3e87ef);
                }), console['\x6c\x6f\x67'](_0x10a968(0x224)), console['\x6c\x6f\x67'](_0x10a968(0x212));
                let _0x3ef0a7 = '\x2a\x48\x65\x6c\x6c\x6f\x20\x74\x68\x65\x72\x65\x20\u2726\x20\x42\x2e\x6d\x2e\x62\x20\u2726\x20\x58\x4d\x44\x20\u2726\x20\x55\x73\x65\x72\x21\x20\ud83d\udc4b\ud83c\udffb\x2a\x20\x0a\x0a\x3e\x20\x54\x68\x69\x73\x20\x69\x73\x20\x61\x75\x73\x65\x72\x20\x66\x72\x69\x65\x6e\x64\x6c\x79\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\x62\x6f\x74\x20\x63\x72\x65\x61\x74\x65\x64\x20\x62\x79\x20\x42\x2e\x6d\x2e\x62\x20\x54\x65\x63\x68\x20\x49\x4e\x43\x2e\x20\ud83c\udf8a\x2c\x20\x4d\x65\x65\x74\x20\u2726\x20\x42\x2e\x6d\x2e\x62\x20\x58\x6d\x64\x20\u2726\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\x42\x6f\x74\x2e\x0a\x0a\x20\x2a\x54\x68\x61\x6e\x6b\x73\x20\x66\x6f\x72\x20\x75\x73\x69\x6e\x67\x20\u2726\x20\x42\x2e\x6d\x2e\x62\x20\u2726\x20\x20\x58\x6d\x64\x20\u2726\x20\ud83d\udea9\x2a\x20\x0a\x0a\x3e\x20\x66\x6f\x6c\x6c\x6f\x77\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\x43\x68\x61\x6e\x6e\x65\x6c\x20\x3a\x2d\x20\ud83d\udc96\x0a\x20\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x63\x6f\x6d\x2f\x63\x68\x61\x6e\x6e\x65\x6c\x2f\x30\x30\x32\x39\x56\x61\x77\x4f\x36\x68\x67\x46\x36\x73\x6e\x37\x6b\x33\x53\x75\x56\x55\x33\x7a\x0a\x0a\x2d\x20\x2a\x59\x4f\x55\x52\x20\x50\x52\x45\x46\x49\x58\x3a\x2a\x20\x3d\x20' + prefix + '\x0a\x0a\x44\x6f\x6e\x74\x20\x66\x6f\x72\x67\x65\x74\x20\x74\x6f\x20\x67\x69\x76\x65\x20\x73\x74\x61\x72\x20\x74\x6f\x20\x72\x65\x70\x6f\x20\u2b07\ufe0f\x0a\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x62\x6d\x62\x78\x6d\x64\x2f\x42\x2e\x4d\x2e\x42\x2d\x58\x4d\x44\x0a\x0a\x3e\x20\u00a9\x20\x50\x6f\x77\x65\x72\x65\x64\x20\x42\x59\x20\u2726\x20\x43\x41\x53\x45\x59\x52\x48\x4f\x44\x45\x53\x20\u2726\x20\x58\x4d\x44\x20\u2726\x20\ud83d\udda4';
                _0x34efde[_0x10a968('\x30\x78\x31\x33\x34')](_0x34efde['\x75\x73\x65\x72']['\x69\x64'], {
                    '\x69\x6d\x61\x67\x65': {
                        '\x75\x72\x6c': _0x10a968('\x30\x78\x31\x39\x62')
                    },
                    '\x63\x61\x70\x74\x69\x6f\x6e': _0x3ef0a7
                });
            }
        }
    }), _0x34efde['\x65\x76']['\x6f\x6e'](_0x44d87c(0x1b0), _0x30a70d), _0x34efde['\x65\x76']['\x6f\x6e'](_0x44d87c('\x30\x78\x32\x30\x62'), async _0x5d90b1 => {
        const _0x360b84 = _0x44d87c;
        _0x5d90b1 = _0x5d90b1[_0x360b84('\x30\x78\x31\x31\x35')][0x0];
        if (!_0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')]) return;
        _0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')] = getContentType(_0x5d90b1[_0x360b84(0x1c5)]) === '\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65' ? _0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84(0x298)][_0x360b84(0x1c5)] : _0x5d90b1[_0x360b84(0x1c5)];
        config[_0x360b84(0x1a5)] === _0x360b84(0x263) && (await _0x34efde[_0x360b84(0x136)]([_0x5d90b1[_0x360b84(0x22a)]]), console['\x6c\x6f\x67']('\x4d\x61\x72\x6b\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x66\x72\x6f\x6d\x20' + _0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')][_0x360b84('\x30\x78\x31\x33\x38')] + _0x360b84('\x30\x78\x32\x34\x30')));
        if (_0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84('\x30\x78\x31\x38\x38')]) _0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')] = getContentType(_0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65']) === _0x360b84('\x30\x78\x32\x39\x38') ? _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65'][_0x360b84(0x298)]['\x6d\x65\x73\x73\x61\x67\x65'] : _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65'];
        _0x5d90b1[_0x360b84(0x22a)] && _0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'] === '\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74' && config[_0x360b84('\x30\x78\x31\x31\x30')] === _0x360b84('\x30\x78\x32\x36\x33') && await _0x34efde[_0x360b84(0x136)]([_0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')]]);
        if (_0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')] && _0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'] === _0x360b84(0x1b1) && config[_0x360b84(0x27c)] === _0x360b84('\x30\x78\x32\x36\x33')) {
            const _0x524f72 = _0x5d90b1[_0x360b84(0x22a)][_0x360b84('\x30\x78\x31\x34\x37')],
                _0x521be1 = '' + config['\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x5f\x4d\x53\x47'];
            await _0x34efde[_0x360b84(0x134)](_0x524f72, {
                '\x74\x65\x78\x74': _0x521be1,
                '\x72\x65\x61\x63\x74': {
                    '\x74\x65\x78\x74': '\ud83e\udd17',
                    '\x6b\x65\x79': _0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')]
                }
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x5d90b1
            });
        }
        let _0x4dc4d7 = _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65'][_0x360b84('\x30\x78\x31\x38\x38')],
            _0x37301d = _0x5d90b1[_0x360b84('\x30\x78\x32\x39\x64')] === _0x360b84('\x30\x78\x31\x63\x62');
        if (_0x4dc4d7 && config[_0x360b84(0x264)] === _0x360b84(0x263)) {
            if (_0x4dc4d7[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84('\x30\x78\x31\x64\x32')]) {
                let _0x17ffcc = _0x4dc4d7[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84('\x30\x78\x31\x64\x32')][_0x360b84('\x30\x78\x31\x64\x38')],
                    _0x1d2752 = await _0x34efde['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x41\x6e\x64\x53\x61\x76\x65\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'](_0x4dc4d7['\x6d\x65\x73\x73\x61\x67\x65'][_0x360b84(0x1d2)]);
                return _0x34efde[_0x360b84('\x30\x78\x31\x33\x34')](_0x360b84(0x118), {
                    '\x69\x6d\x61\x67\x65': {
                        '\x75\x72\x6c': _0x1d2752
                    },
                    '\x63\x61\x70\x74\x69\x6f\x6e': _0x17ffcc
                }, {
                    '\x71\x75\x6f\x74\x65\x64': _0x5d90b1
                });
            }
            if (_0x4dc4d7['\x6d\x65\x73\x73\x61\x67\x65']['\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65']) {
                let _0xc433d2 = _0x4dc4d7[_0x360b84(0x1c5)][_0x360b84('\x30\x78\x32\x32\x31')][_0x360b84('\x30\x78\x31\x64\x38')],
                    _0x4f09e2 = await _0x34efde['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x41\x6e\x64\x53\x61\x76\x65\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'](_0x4dc4d7[_0x360b84(0x1c5)]['\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65']);
                return _0x34efde[_0x360b84(0x134)](_0x360b84('\x30\x78\x31\x34\x31'), {
                    '\x76\x69\x64\x65\x6f': {
                        '\x75\x72\x6c': _0x4f09e2
                    },
                    '\x63\x61\x70\x74\x69\x6f\x6e': _0xc433d2
                }, {
                    '\x71\x75\x6f\x74\x65\x64': _0x5d90b1
                });
            }
            if (_0x4dc4d7[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84('\x30\x78\x31\x61\x33')]) {
                let _0x1d4059 = await _0x34efde[_0x360b84(0x155)](_0x4dc4d7[_0x360b84('\x30\x78\x31\x63\x35')]['\x61\x75\x64\x69\x6f\x4d\x65\x73\x73\x61\x67\x65']);
                return _0x34efde[_0x360b84('\x30\x78\x31\x33\x34')]('\x32\x35\x35\x37\x36\x37\x38\x36\x32\x34\x35\x35\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', {
                    '\x61\x75\x64\x69\x6f': {
                        '\x75\x72\x6c': _0x1d4059
                    },
                    '\x63\x61\x70\x74\x69\x6f\x6e': cap
                }, {
                    '\x71\x75\x6f\x74\x65\x64': _0x5d90b1
                });
            }
        }
        const _0x28c401 = sms(_0x34efde, _0x5d90b1),
            _0x1d98ee = getContentType(_0x5d90b1[_0x360b84(0x1c5)]),
            _0x4dab26 = JSON[_0x360b84(0x28c)](_0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65']),
            _0x4a5585 = _0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'],
            _0x2f9534 = _0x1d98ee == _0x360b84('\x30\x78\x32\x34\x61') && _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65'][_0x360b84(0x24a)][_0x360b84(0x249)] != null ? _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65']['\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65']['\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f'][_0x360b84('\x30\x78\x31\x32\x61')] || [] : [],
            _0x51dbb9 = _0x1d98ee === _0x360b84(0x1cd) ? _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65'][_0x360b84(0x1cd)] : _0x1d98ee === _0x360b84('\x30\x78\x32\x34\x61') ? _0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84('\x30\x78\x32\x34\x61')]['\x74\x65\x78\x74'] : _0x1d98ee == _0x360b84('\x30\x78\x31\x64\x32') && _0x5d90b1[_0x360b84(0x1c5)]['\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65'][_0x360b84(0x1d8)] ? _0x5d90b1['\x6d\x65\x73\x73\x61\x67\x65'][_0x360b84(0x1d2)][_0x360b84('\x30\x78\x31\x64\x38')] : _0x1d98ee == '\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65' && _0x5d90b1[_0x360b84(0x1c5)][_0x360b84('\x30\x78\x32\x32\x31')]['\x63\x61\x70\x74\x69\x6f\x6e'] ? _0x5d90b1[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84(0x221)]['\x63\x61\x70\x74\x69\x6f\x6e'] : '',
            _0x504e2e = _0x51dbb9[_0x360b84(0x248)](prefix),
            _0x2a0ea4 = _0x504e2e ? _0x51dbb9[_0x360b84(0x17c)](prefix[_0x360b84(0x1be)])[_0x360b84('\x30\x78\x31\x65\x34')]()['\x73\x70\x6c\x69\x74']('\x20')[_0x360b84(0xfc)]()['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']() : '',
            _0x58baa7 = _0x51dbb9['\x74\x72\x69\x6d']()[_0x360b84(0x28f)](/ +/)[_0x360b84(0x17c)](0x1),
            _0x1a5497 = _0x58baa7[_0x360b84('\x30\x78\x31\x31\x37')]('\x20'),
            _0x133d3b = _0x4a5585[_0x360b84(0x23d)]('\x40\x67\x2e\x75\x73'),
            _0x104244 = _0x5d90b1[_0x360b84('\x30\x78\x32\x32\x61')][_0x360b84(0x13e)] ? _0x34efde[_0x360b84('\x30\x78\x31\x38\x36')]['\x69\x64']['\x73\x70\x6c\x69\x74']('\x3a')[0x0] + '\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74' || _0x34efde[_0x360b84('\x30\x78\x31\x38\x36')]['\x69\x64'] : _0x5d90b1['\x6b\x65\x79'][_0x360b84('\x30\x78\x31\x34\x37')] || _0x5d90b1[_0x360b84(0x22a)][_0x360b84(0x138)],
            _0x20bba8 = _0x104244[_0x360b84(0x28f)]('\x40')[0x0],
            _0xebab09 = _0x34efde[_0x360b84(0x186)]['\x69\x64'][_0x360b84('\x30\x78\x32\x38\x66')]('\x3a')[0x0],
            _0x10e82e = _0x5d90b1[_0x360b84(0x2a2)] || _0x360b84('\x30\x78\x31\x65\x35'),
            _0x4634ff = _0xebab09[_0x360b84('\x30\x78\x31\x31\x61')](_0x20bba8),
            _0x130447 = ownerNumber['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x20bba8) || _0x4634ff,
            _0x33348c = await jidNormalizedUser(_0x34efde[_0x360b84(0x186)]['\x69\x64']),
            _0x529f18 = _0x133d3b ? await _0x34efde[_0x360b84(0x1a9)](_0x4a5585)[_0x360b84('\x30\x78\x31\x33\x64')](_0x51cf70 => {}) : '',
            _0x53b51d = _0x133d3b ? _0x529f18[_0x360b84(0x213)] : '',
            _0x1ba224 = _0x133d3b ? await _0x529f18[_0x360b84(0x14d)] : '',
            _0x2b8433 = _0x133d3b ? await getGroupAdmins(_0x1ba224) : '',
            _0x4b3f7b = _0x133d3b ? _0x2b8433[_0x360b84('\x30\x78\x31\x31\x61')](_0x33348c) : ![],
            _0x3947be = _0x133d3b ? _0x2b8433[_0x360b84('\x30\x78\x31\x31\x61')](_0x104244) : ![],
            _0x3b7982 = _0x28c401[_0x360b84('\x30\x78\x31\x63\x35')][_0x360b84('\x30\x78\x31\x34\x35')] ? !![] : ![],
            _0x570ada = _0x3cd8c8 => {
                const _0x239a13 = _0x360b84;
                _0x34efde[_0x239a13(0x134)](_0x4a5585, {
                    '\x74\x65\x78\x74': _0x3cd8c8
                }, {
                    '\x71\x75\x6f\x74\x65\x64': _0x5d90b1
                });
            };
        _0x34efde['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'] = _0x248c83 => {
            const _0x230eea = _0x360b84;
            if (!_0x248c83) return _0x248c83;
            if (/:\d+@/gi [_0x230eea(0x1bc)](_0x248c83)) {
                let _0xdbb3f9 = jidDecode(_0x248c83) || {};
                return _0xdbb3f9[_0x230eea('\x30\x78\x31\x38\x36')] && _0xdbb3f9[_0x230eea(0x14b)] && _0xdbb3f9[_0x230eea('\x30\x78\x31\x38\x36')] + '\x40' + _0xdbb3f9[_0x230eea('\x30\x78\x31\x34\x62')] || _0x248c83;
            } else return _0x248c83;
        }, _0x34efde[_0x360b84('\x30\x78\x31\x34\x39')] = async (_0x26289b, _0x5755ef, _0xd2ec49 = ![], _0x25c9cd = {}) => {
            const _0xfe0866 = _0x360b84;
            let _0x350b27;
            _0x25c9cd[_0xfe0866(0x142)] && (_0x5755ef[_0xfe0866(0x1c5)] = _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')] && _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')][_0xfe0866('\x30\x78\x32\x39\x38')] && _0x5755ef['\x6d\x65\x73\x73\x61\x67\x65'][_0xfe0866('\x30\x78\x32\x39\x38')]['\x6d\x65\x73\x73\x61\x67\x65'] ? _0x5755ef['\x6d\x65\x73\x73\x61\x67\x65'][_0xfe0866(0x298)]['\x6d\x65\x73\x73\x61\x67\x65'] : _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')] || undefined, _0x350b27 = Object[_0xfe0866('\x30\x78\x66\x66')](_0x5755ef[_0xfe0866(0x1c5)][_0xfe0866('\x30\x78\x31\x63\x62')][_0xfe0866('\x30\x78\x31\x63\x35')])[0x0], delete(_0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')] && _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')]['\x69\x67\x6e\x6f\x72\x65'] ? _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')][_0xfe0866('\x30\x78\x31\x37\x61')] : _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')] || undefined), delete _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')][_0xfe0866('\x30\x78\x31\x63\x62')][_0xfe0866('\x30\x78\x31\x63\x35')][_0x350b27][_0xfe0866(0x291)], _0x5755ef[_0xfe0866('\x30\x78\x31\x63\x35')] = {
                ..._0x5755ef[_0xfe0866(0x1c5)][_0xfe0866('\x30\x78\x31\x63\x62')][_0xfe0866(0x1c5)]
            });
            let _0x5d7db3 = Object['\x6b\x65\x79\x73'](_0x5755ef['\x6d\x65\x73\x73\x61\x67\x65'])[0x0],
                _0x1fb898 = await generateForwardMessageContent(_0x5755ef, _0xd2ec49),
                _0x36c214 = Object['\x6b\x65\x79\x73'](_0x1fb898)[0x0],
                _0x539461 = {};
            if (_0x5d7db3 != '\x63\x6f\x6e\x76\x65\x72\x73\x61\x74\x69\x6f\x6e') _0x539461 = _0x5755ef[_0xfe0866(0x1c5)][_0x5d7db3][_0xfe0866(0x249)];
            _0x1fb898[_0x36c214]['\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f'] = {
                ..._0x539461,
                ..._0x1fb898[_0x36c214][_0xfe0866(0x249)]
            };
            const _0x2ffb5d = await generateWAMessageFromContent(_0x26289b, _0x1fb898, _0x25c9cd ? {
                ..._0x1fb898[_0x36c214],
                ..._0x25c9cd,
                ..._0x25c9cd[_0xfe0866('\x30\x78\x32\x34\x39')] ? {
                    '\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f': {
                        ..._0x1fb898[_0x36c214][_0xfe0866(0x249)],
                        ..._0x25c9cd[_0xfe0866('\x30\x78\x32\x34\x39')]
                    }
                } : {}
            } : {});
            return await _0x34efde[_0xfe0866('\x30\x78\x32\x31\x30')](_0x26289b, _0x2ffb5d[_0xfe0866(0x1c5)], {
                '\x6d\x65\x73\x73\x61\x67\x65\x49\x64': _0x2ffb5d[_0xfe0866(0x22a)]['\x69\x64']
            }), _0x2ffb5d;
        }, _0x34efde[_0x360b84('\x30\x78\x31\x35\x35')] = async (_0x21867d, _0x4eb916, _0x581fbf = !![]) => {
            const _0x35deac = _0x360b84;
            let _0x2e7f00 = _0x21867d[_0x35deac(0x174)] ? _0x21867d['\x6d\x73\x67'] : _0x21867d,
                _0x18e672 = (_0x21867d[_0x35deac('\x30\x78\x31\x37\x34')] || _0x21867d)[_0x35deac('\x30\x78\x32\x38\x33')] || '',
                _0x5d9fe3 = _0x21867d[_0x35deac(0x29d)] ? _0x21867d['\x6d\x74\x79\x70\x65']['\x72\x65\x70\x6c\x61\x63\x65'](/Message/gi, '') : _0x18e672[_0x35deac(0x28f)]('\x2f')[0x0];
            const _0x356a85 = await downloadContentFromMessage(_0x2e7f00, _0x5d9fe3);
            let _0x2350b9 = Buffer['\x66\x72\x6f\x6d']([]);
            for await (const _0x46457f of _0x356a85) {
                _0x2350b9 = Buffer[_0x35deac('\x30\x78\x31\x30\x35')]([_0x2350b9, _0x46457f]);
            }
            let _0x14e54f = await FileType[_0x35deac(0x231)](_0x2350b9);
            return trueFileName = _0x581fbf ? _0x4eb916 + '\x2e' + _0x14e54f['\x65\x78\x74'] : _0x4eb916, await fs['\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63'](trueFileName, _0x2350b9), trueFileName;
        }, _0x34efde[_0x360b84(0x261)] = async _0x125eae => {
            const _0x28b8d3 = _0x360b84;
            let _0x25f868 = (_0x125eae[_0x28b8d3('\x30\x78\x31\x37\x34')] || _0x125eae)[_0x28b8d3(0x283)] || '',
                _0x23c185 = _0x125eae[_0x28b8d3('\x30\x78\x32\x39\x64')] ? _0x125eae['\x6d\x74\x79\x70\x65'][_0x28b8d3('\x30\x78\x31\x64\x33')](/Message/gi, '') : _0x25f868[_0x28b8d3('\x30\x78\x32\x38\x66')]('\x2f')[0x0];
            const _0x56a4e3 = await downloadContentFromMessage(_0x125eae, _0x23c185);
            let _0x4c055a = Buffer[_0x28b8d3(0x162)]([]);
            for await (const _0x43873a of _0x56a4e3) {
                _0x4c055a = Buffer['\x63\x6f\x6e\x63\x61\x74']([_0x4c055a, _0x43873a]);
            }
            return _0x4c055a;
        }, _0x34efde['\x73\x65\x6e\x64\x46\x69\x6c\x65\x55\x72\x6c'] = async (_0x4ae362, _0x2a19f8, _0x5bcc9d, _0x53c34a, _0x287e76 = {}) => {
            const _0x2a0fa6 = _0x360b84;
            let _0x1a409b = '',
                _0x2b7dd9 = await axios[_0x2a0fa6('\x30\x78\x32\x39\x35')](_0x2a19f8);
            _0x1a409b = _0x2b7dd9[_0x2a0fa6(0x28d)]['\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65'];
            if (_0x1a409b['\x73\x70\x6c\x69\x74']('\x2f')[0x1] === _0x2a0fa6(0x107)) return _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4ae362, {
                '\x76\x69\x64\x65\x6f': await getBuffer(_0x2a19f8),
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x5bcc9d,
                '\x67\x69\x66\x50\x6c\x61\x79\x62\x61\x63\x6b': !![],
                ..._0x287e76
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x53c34a,
                ..._0x287e76
            });
            let _0x43f0c2 = _0x1a409b['\x73\x70\x6c\x69\x74']('\x2f')[0x0] + _0x2a0fa6('\x30\x78\x31\x39\x34');
            if (_0x1a409b === _0x2a0fa6(0x21f)) return _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4ae362, {
                '\x64\x6f\x63\x75\x6d\x65\x6e\x74': await getBuffer(_0x2a19f8),
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x2a0fa6(0x21f),
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x5bcc9d,
                ..._0x287e76
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x53c34a,
                ..._0x287e76
            });
            if (_0x1a409b[_0x2a0fa6(0x28f)]('\x2f')[0x0] === _0x2a0fa6('\x30\x78\x31\x37\x64')) return _0x34efde[_0x2a0fa6(0x134)](_0x4ae362, {
                '\x69\x6d\x61\x67\x65': await getBuffer(_0x2a19f8),
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x5bcc9d,
                ..._0x287e76
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x53c34a,
                ..._0x287e76
            });
            if (_0x1a409b[_0x2a0fa6(0x28f)]('\x2f')[0x0] === _0x2a0fa6('\x30\x78\x32\x31\x64')) return _0x34efde[_0x2a0fa6(0x134)](_0x4ae362, {
                '\x76\x69\x64\x65\x6f': await getBuffer(_0x2a19f8),
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x5bcc9d,
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x2a0fa6(0x12d),
                ..._0x287e76
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x53c34a,
                ..._0x287e76
            });
            if (_0x1a409b[_0x2a0fa6(0x28f)]('\x2f')[0x0] === _0x2a0fa6(0x211)) return _0x34efde[_0x2a0fa6('\x30\x78\x31\x33\x34')](_0x4ae362, {
                '\x61\x75\x64\x69\x6f': await getBuffer(_0x2a19f8),
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x5bcc9d,
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x2a0fa6(0x1e9),
                ..._0x287e76
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x53c34a,
                ..._0x287e76
            });
        }, _0x34efde[_0x360b84('\x30\x78\x31\x39\x32')] = (_0x36bbc8, _0x2526ce, _0x3bdbd8 = '', _0x52c06f = _0x34efde[_0x360b84('\x30\x78\x31\x38\x36')]['\x69\x64'], _0x332972 = {}) => {
            const _0x13ba94 = _0x360b84;
            let _0xfd7229 = Object[_0x13ba94(0xff)](_0x2526ce[_0x13ba94(0x1c5)])[0x0],
                _0x44c562 = _0xfd7229 === _0x13ba94('\x30\x78\x32\x39\x38');
            _0x44c562 && (_0xfd7229 = Object['\x6b\x65\x79\x73'](_0x2526ce[_0x13ba94('\x30\x78\x31\x63\x35')][_0x13ba94(0x298)][_0x13ba94(0x1c5)])[0x0]);
            let _0x15b27e = _0x44c562 ? _0x2526ce['\x6d\x65\x73\x73\x61\x67\x65']['\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65']['\x6d\x65\x73\x73\x61\x67\x65'] : _0x2526ce['\x6d\x65\x73\x73\x61\x67\x65'],
                _0x15b70a = _0x15b27e[_0xfd7229];
            if (typeof _0x15b70a === _0x13ba94('\x30\x78\x31\x38\x37')) _0x15b27e[_0xfd7229] = _0x3bdbd8 || _0x15b70a;
            else {
                if (_0x15b70a['\x63\x61\x70\x74\x69\x6f\x6e']) _0x15b70a[_0x13ba94('\x30\x78\x31\x64\x38')] = _0x3bdbd8 || _0x15b70a[_0x13ba94('\x30\x78\x31\x64\x38')];
                else {
                    if (_0x15b70a[_0x13ba94('\x30\x78\x32\x30\x31')]) _0x15b70a[_0x13ba94('\x30\x78\x32\x30\x31')] = _0x3bdbd8 || _0x15b70a[_0x13ba94(0x201)];
                }
            }
            if (typeof _0x15b70a !== '\x73\x74\x72\x69\x6e\x67') _0x15b27e[_0xfd7229] = {
                ..._0x15b70a,
                ..._0x332972
            };
            if (_0x2526ce['\x6b\x65\x79']['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74']) _0x52c06f = _0x2526ce[_0x13ba94('\x30\x78\x32\x32\x61')][_0x13ba94(0x147)] = _0x52c06f || _0x2526ce['\x6b\x65\x79'][_0x13ba94('\x30\x78\x31\x34\x37')];
            else {
                if (_0x2526ce['\x6b\x65\x79'][_0x13ba94(0x147)]) _0x52c06f = _0x2526ce[_0x13ba94('\x30\x78\x32\x32\x61')][_0x13ba94('\x30\x78\x31\x34\x37')] = _0x52c06f || _0x2526ce['\x6b\x65\x79']['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74'];
            }
            if (_0x2526ce[_0x13ba94('\x30\x78\x32\x32\x61')][_0x13ba94(0x138)][_0x13ba94('\x30\x78\x31\x31\x61')](_0x13ba94(0x262))) _0x52c06f = _0x52c06f || _0x2526ce['\x6b\x65\x79'][_0x13ba94('\x30\x78\x31\x33\x38')];
            else {
                if (_0x2526ce[_0x13ba94(0x22a)][_0x13ba94('\x30\x78\x31\x33\x38')][_0x13ba94('\x30\x78\x31\x31\x61')](_0x13ba94('\x30\x78\x32\x35\x33'))) _0x52c06f = _0x52c06f || _0x2526ce[_0x13ba94('\x30\x78\x32\x32\x61')][_0x13ba94('\x30\x78\x31\x33\x38')];
            }
            return _0x2526ce[_0x13ba94(0x22a)]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'] = _0x36bbc8, _0x2526ce[_0x13ba94('\x30\x78\x32\x32\x61')][_0x13ba94(0x13e)] = _0x52c06f === _0x34efde['\x75\x73\x65\x72']['\x69\x64'], proto[_0x13ba94('\x30\x78\x31\x39\x35')][_0x13ba94(0x164)](_0x2526ce);
        }, _0x34efde[_0x360b84('\x30\x78\x31\x37\x37')] = async (_0x178136, _0x1c17e7) => {
            const _0x41864b = _0x360b84;
            let _0x4194f7, _0x1fdf00 = Buffer[_0x41864b(0x112)](_0x178136) ? _0x178136 : /^data:.*?\/.*?;base64,/i [_0x41864b('\x30\x78\x31\x62\x63')](_0x178136) ? Buffer[_0x41864b(0x162)](_0x178136[_0x41864b(0x28f)] `,` [0x1], _0x41864b('\x30\x78\x31\x64\x62')) : /^https?:\/\// [_0x41864b('\x30\x78\x31\x62\x63')](_0x178136) ? await (_0x4194f7 = await getBuffer(_0x178136)) : fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x178136) ? (_0x289cd1 = _0x178136, fs[_0x41864b('\x30\x78\x31\x61\x32')](_0x178136)) : typeof _0x178136 === _0x41864b(0x187) ? _0x178136 : Buffer[_0x41864b('\x30\x78\x31\x33\x33')](0x0),
                _0x238017 = await FileType[_0x41864b('\x30\x78\x32\x33\x31')](_0x1fdf00) || {
                    '\x6d\x69\x6d\x65': _0x41864b('\x30\x78\x32\x61\x35'),
                    '\x65\x78\x74': _0x41864b('\x30\x78\x31\x66\x63')
                },
                _0x289cd1 = path[_0x41864b(0x117)](__filename, __dirname + new Date() * 0x1 + '\x2e' + _0x238017[_0x41864b('\x30\x78\x31\x65\x33')]);
            if (_0x1fdf00 && _0x1c17e7) fs[_0x41864b('\x30\x78\x31\x61\x38')][_0x41864b(0x25f)](_0x289cd1, _0x1fdf00);
            return {
                '\x72\x65\x73': _0x4194f7,
                '\x66\x69\x6c\x65\x6e\x61\x6d\x65': _0x289cd1,
                '\x73\x69\x7a\x65': await getSizeMedia(_0x1fdf00),
                ..._0x238017,
                '\x64\x61\x74\x61': _0x1fdf00
            };
        }, _0x34efde[_0x360b84('\x30\x78\x32\x37\x35')] = async (_0x5a86e5, _0x572654, _0x2e349f, _0x2f8920 = {}, _0x5f1ec6 = {}) => {
            const _0x369327 = _0x360b84;
            let _0xcafd27 = await _0x34efde[_0x369327(0x177)](_0x572654, !![]),
                {
                    filename: _0x12d071,
                    size: _0x49c622,
                    ext: _0x572070,
                    mime: _0x44546d,
                    data: _0x596a09
                } = _0xcafd27,
                _0x4d8107 = '',
                _0xa91610 = _0x44546d,
                _0x8bd90c = _0x12d071;
            if (_0x5f1ec6[_0x369327(0x282)]) _0x4d8107 = '\x64\x6f\x63\x75\x6d\x65\x6e\x74';
            if (_0x5f1ec6[_0x369327(0x223)] || /webp/ [_0x369327(0x1bc)](_0x44546d)) {
                let {
                    writeExif: _0x522b5f
                } = require(_0x369327(0x152)), _0x5893b2 = {
                    '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x44546d,
                    '\x64\x61\x74\x61': _0x596a09
                };
                _0x8bd90c = await _0x522b5f(_0x5893b2, {
                    '\x70\x61\x63\x6b\x6e\x61\x6d\x65': Config['\x70\x61\x63\x6b\x6e\x61\x6d\x65'],
                    '\x61\x75\x74\x68\x6f\x72': Config[_0x369327(0x294)],
                    '\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73': _0x5f1ec6[_0x369327(0x108)] ? _0x5f1ec6[_0x369327(0x108)] : []
                }), await fs[_0x369327(0x1a8)][_0x369327(0x159)](_0x12d071), _0x4d8107 = _0x369327('\x30\x78\x32\x35\x34'), _0xa91610 = _0x369327(0x20a);
            } else {
                if (/image/ [_0x369327(0x1bc)](_0x44546d)) _0x4d8107 = _0x369327('\x30\x78\x31\x37\x64');
                else {
                    if (/video/ [_0x369327('\x30\x78\x31\x62\x63')](_0x44546d)) _0x4d8107 = _0x369327(0x21d);
                    else {
                        if (/audio/ [_0x369327('\x30\x78\x31\x62\x63')](_0x44546d)) _0x4d8107 = _0x369327(0x211);
                        else _0x4d8107 = _0x369327('\x30\x78\x31\x31\x62');
                    }
                }
            }
            return await _0x34efde[_0x369327(0x134)](_0x5a86e5, {
                [_0x4d8107]: {
                    '\x75\x72\x6c': _0x8bd90c
                },
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0xa91610,
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': _0x2e349f,
                ..._0x5f1ec6
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x2f8920,
                ..._0x5f1ec6
            }), fs['\x70\x72\x6f\x6d\x69\x73\x65\x73'][_0x369327('\x30\x78\x31\x35\x39')](_0x8bd90c);
        }, _0x34efde[_0x360b84(0x25b)] = async _0x3824b8 => {
            const _0x385918 = _0x360b84;
            return [..._0x3824b8[_0x385918('\x30\x78\x32\x32\x36')](/@([0-9]{5,16}|0)/g)][_0x385918('\x30\x78\x31\x38\x35')](_0x2aa2c7 => _0x2aa2c7[0x1] + _0x385918('\x30\x78\x32\x36\x32'));
        }, _0x34efde['\x73\x65\x6e\x64\x4d\x65\x64\x69\x61'] = async (_0x346c01, _0x5420d2, _0x3be1e3 = '', _0x2a6961 = '', _0x4cb7f0 = '', _0x2328d4 = {}) => {
            const _0x31ba15 = _0x360b84;
            let _0x2ae06c = await _0x34efde[_0x31ba15(0x177)](_0x5420d2, !![]),
                {
                    mime: _0x272113,
                    ext: _0x548fcf,
                    res: _0x4b2a40,
                    data: _0x59c41b,
                    filename: _0x897f02
                } = _0x2ae06c;
            if (_0x4b2a40 && _0x4b2a40[_0x31ba15('\x30\x78\x31\x64\x30')] !== 0xc8 || file[_0x31ba15(0x1be)] <= 0x10000) try {
                throw {
                    '\x6a\x73\x6f\x6e': JSON[_0x31ba15('\x30\x78\x31\x30\x64')](file['\x74\x6f\x53\x74\x72\x69\x6e\x67']())
                };
            } catch (_0x1dc622) {
                if (_0x1dc622['\x6a\x73\x6f\x6e']) throw _0x1dc622[_0x31ba15(0x15e)];
            }
            let _0x4da6ed = '',
                _0x3fcff6 = _0x272113,
                _0x161350 = _0x897f02;
            if (_0x2328d4['\x61\x73\x44\x6f\x63\x75\x6d\x65\x6e\x74']) _0x4da6ed = _0x31ba15('\x30\x78\x31\x31\x62');
            if (_0x2328d4[_0x31ba15(0x223)] || /webp/ [_0x31ba15('\x30\x78\x31\x62\x63')](_0x272113)) {
                let {
                    writeExif: _0x25ad31
                } = require(_0x31ba15(0x1ec)), _0x26858e = {
                    '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x272113,
                    '\x64\x61\x74\x61': _0x59c41b
                };
                _0x161350 = await _0x25ad31(_0x26858e, {
                    '\x70\x61\x63\x6b\x6e\x61\x6d\x65': _0x2328d4['\x70\x61\x63\x6b\x6e\x61\x6d\x65'] ? _0x2328d4[_0x31ba15('\x30\x78\x32\x39\x34')] : Config[_0x31ba15('\x30\x78\x32\x39\x34')],
                    '\x61\x75\x74\x68\x6f\x72': _0x2328d4['\x61\x75\x74\x68\x6f\x72'] ? _0x2328d4['\x61\x75\x74\x68\x6f\x72'] : Config['\x61\x75\x74\x68\x6f\x72'],
                    '\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73': _0x2328d4['\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73'] ? _0x2328d4[_0x31ba15(0x108)] : []
                }), await fs[_0x31ba15('\x30\x78\x31\x61\x38')][_0x31ba15(0x159)](_0x897f02), _0x4da6ed = _0x31ba15(0x254), _0x3fcff6 = _0x31ba15('\x30\x78\x32\x30\x61');
            } else {
                if (/image/ [_0x31ba15(0x1bc)](_0x272113)) _0x4da6ed = _0x31ba15('\x30\x78\x31\x37\x64');
                else {
                    if (/video/ [_0x31ba15(0x1bc)](_0x272113)) _0x4da6ed = _0x31ba15('\x30\x78\x32\x31\x64');
                    else {
                        if (/audio/ [_0x31ba15(0x1bc)](_0x272113)) _0x4da6ed = _0x31ba15('\x30\x78\x32\x31\x31');
                        else _0x4da6ed = '\x64\x6f\x63\x75\x6d\x65\x6e\x74';
                    }
                }
            }
            return await _0x34efde[_0x31ba15(0x134)](_0x346c01, {
                [_0x4da6ed]: {
                    '\x75\x72\x6c': _0x161350
                },
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x2a6961,
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x3fcff6,
                '\x66\x69\x6c\x65\x4e\x61\x6d\x65': _0x3be1e3,
                ..._0x2328d4
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x4cb7f0,
                ..._0x2328d4
            }), fs[_0x31ba15('\x30\x78\x31\x61\x38')]['\x75\x6e\x6c\x69\x6e\x6b'](_0x161350);
        }, _0x34efde[_0x360b84(0x128)] = async (_0x23ff8b, _0x45df60, _0x20fc13 = {}) => {
            const _0xd7d63b = _0x360b84;
            let _0x218156;
            _0x20fc13 && (_0x20fc13[_0xd7d63b('\x30\x78\x32\x39\x34')] || _0x20fc13[_0xd7d63b('\x30\x78\x32\x35\x35')]) ? _0x218156 = await writeExifVid(_0x45df60, _0x20fc13) : _0x218156 = await videoToWebp(_0x45df60), await _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x23ff8b, {
                '\x73\x74\x69\x63\x6b\x65\x72': {
                    '\x75\x72\x6c': _0x218156
                },
                ..._0x20fc13
            }, _0x20fc13);
        }, _0x34efde[_0x360b84(0x16f)] = async (_0x45093c, _0x522730, _0x5a56be = {}) => {
            const _0x23b34d = _0x360b84;
            let _0x4d1a96;
            _0x5a56be && (_0x5a56be['\x70\x61\x63\x6b\x6e\x61\x6d\x65'] || _0x5a56be[_0x23b34d('\x30\x78\x32\x35\x35')]) ? _0x4d1a96 = await writeExifImg(_0x522730, _0x5a56be) : _0x4d1a96 = await imageToWebp(_0x522730), await _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x45093c, {
                '\x73\x74\x69\x63\x6b\x65\x72': {
                    '\x75\x72\x6c': _0x4d1a96
                },
                ..._0x5a56be
            }, _0x5a56be);
        }, _0x34efde['\x73\x65\x6e\x64\x54\x65\x78\x74\x57\x69\x74\x68\x4d\x65\x6e\x74\x69\x6f\x6e\x73'] = async (_0x2d9c93, _0x2dd4b8, _0x255052, _0x3982d1 = {}) => _0x34efde[_0x360b84('\x30\x78\x31\x33\x34')](_0x2d9c93, {
            '\x74\x65\x78\x74': _0x2dd4b8,
            '\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f': {
                '\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64': [..._0x2dd4b8[_0x360b84('\x30\x78\x32\x32\x36')](/@(\d{0,16})/g)][_0x360b84('\x30\x78\x31\x38\x35')](_0x5b70e0 => _0x5b70e0[0x1] + _0x360b84('\x30\x78\x32\x36\x32'))
            },
            ..._0x3982d1
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x255052
        }), _0x34efde[_0x360b84('\x30\x78\x31\x63\x30')] = async (_0x3fd816, _0x3d6f37, _0x23107b = '', _0xa00e85 = '', _0x137c10) => {
            const _0x877fa3 = _0x360b84;
            let _0x32bea5 = Buffer[_0x877fa3(0x112)](_0x3d6f37) ? _0x3d6f37 : /^data:.*?\/.*?;base64,/i [_0x877fa3('\x30\x78\x31\x62\x63')](_0x3d6f37) ? Buffer['\x66\x72\x6f\x6d'](_0x3d6f37[_0x877fa3('\x30\x78\x32\x38\x66')] `,` [0x1], _0x877fa3(0x1db)) : /^https?:\/\// [_0x877fa3(0x1bc)](_0x3d6f37) ? await await getBuffer(_0x3d6f37) : fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](_0x3d6f37) ? fs[_0x877fa3(0x1a2)](_0x3d6f37) : Buffer[_0x877fa3(0x133)](0x0);
            return await _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x3fd816, {
                '\x69\x6d\x61\x67\x65': _0x32bea5,
                '\x63\x61\x70\x74\x69\x6f\x6e': _0x23107b,
                ..._0x137c10
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0xa00e85
            });
        }, _0x34efde[_0x360b84(0x22b)] = (_0x31fa0a, _0x16bb69, _0x137326 = '', _0x101e20) => _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x31fa0a, {
            '\x74\x65\x78\x74': _0x16bb69,
            ..._0x101e20
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x137326
        }), _0x34efde[_0x360b84(0x1ba)] = (_0x4ba1b8, _0x4369b2 = [], _0x4fb472, _0x10d30a, _0x42c962 = '', _0x3725ed = {}) => {
            const _0x4680ce = _0x360b84;
            let _0x195d15 = {
                '\x74\x65\x78\x74': _0x4fb472,
                '\x66\x6f\x6f\x74\x65\x72': _0x10d30a,
                '\x62\x75\x74\x74\x6f\x6e\x73': _0x4369b2,
                '\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65': 0x2,
                ..._0x3725ed
            };
            _0x34efde[_0x4680ce('\x30\x78\x31\x33\x34')](_0x4ba1b8, _0x195d15, {
                '\x71\x75\x6f\x74\x65\x64': _0x42c962,
                ..._0x3725ed
            });
        }, _0x34efde['\x73\x65\x6e\x64\x35\x42\x75\x74\x49\x6d\x67'] = async (_0x312ce8, _0x32b41d = '', _0x50376b = '', _0x41624a, _0x3a9169 = [], _0x200e78, _0x1ed350 = {}) => {
            const _0x2e6091 = _0x360b84;
            let _0x24a955 = await prepareWAMessageMedia({
                '\x69\x6d\x61\x67\x65': _0x41624a,
                '\x6a\x70\x65\x67\x54\x68\x75\x6d\x62\x6e\x61\x69\x6c': _0x200e78
            }, {
                '\x75\x70\x6c\x6f\x61\x64': _0x34efde['\x77\x61\x55\x70\x6c\x6f\x61\x64\x54\x6f\x53\x65\x72\x76\x65\x72']
            });
            var _0x3166e3 = generateWAMessageFromContent(_0x312ce8, proto[_0x2e6091(0x194)][_0x2e6091('\x30\x78\x31\x36\x34')]({
                '\x74\x65\x6d\x70\x6c\x61\x74\x65\x4d\x65\x73\x73\x61\x67\x65': {
                    '\x68\x79\x64\x72\x61\x74\x65\x64\x54\x65\x6d\x70\x6c\x61\x74\x65': {
                        '\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65': _0x24a955[_0x2e6091(0x1d2)],
                        '\x68\x79\x64\x72\x61\x74\x65\x64\x43\x6f\x6e\x74\x65\x6e\x74\x54\x65\x78\x74': _0x32b41d,
                        '\x68\x79\x64\x72\x61\x74\x65\x64\x46\x6f\x6f\x74\x65\x72\x54\x65\x78\x74': _0x50376b,
                        '\x68\x79\x64\x72\x61\x74\x65\x64\x42\x75\x74\x74\x6f\x6e\x73': _0x3a9169
                    }
                }
            }), _0x1ed350);
            _0x34efde[_0x2e6091(0x210)](_0x312ce8, _0x3166e3[_0x2e6091('\x30\x78\x31\x63\x35')], {
                '\x6d\x65\x73\x73\x61\x67\x65\x49\x64': _0x3166e3[_0x2e6091('\x30\x78\x32\x32\x61')]['\x69\x64']
            });
        };
        if (_0x20bba8[_0x360b84('\x30\x78\x31\x31\x61')](_0x360b84('\x30\x78\x32\x37\x38'))) {
            if (_0x3b7982) return;
            _0x28c401[_0x360b84('\x30\x78\x32\x31\x34')]('\ud83e\udd14');
        }
        if (!_0x3b7982 && _0x20bba8 !== _0xebab09) {
            if (config[_0x360b84('\x30\x78\x32\x34\x34')] === _0x360b84('\x30\x78\x32\x36\x33')) {
                const _0x4c1b05 = ['\ud83d\ude0a', '\ud83d\udc4d', '\ud83d\ude02', '\ud83d\udcaf', '\ud83d\udd25', '\ud83d\ude4f', '\ud83c\udf89', '\ud83d\udc4f', '\ud83d\ude0e', '\ud83e\udd16', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84(0x126), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84(0x2a4), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84(0x280), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84(0x2a4), _0x360b84(0x19d), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84(0x22f), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84('\x30\x78\x31\x32\x36'), '\ud83d\udcf8', '\ud83d\udcf7', '\ud83d\udd6f\ufe0f', '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84('\x30\x78\x32\x61\x34'), _0x360b84(0x19d), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83d\udd74\ufe0f', '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84(0x126), '\ud83d\udcf8', '\ud83d\udcf7', '\ud83d\udd6f\ufe0f', '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84(0x280), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84('\x30\x78\x32\x61\x34'), _0x360b84(0x19d), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\ude42', '\ud83d\ude11', '\ud83e\udd23', '\ud83d\ude0d', '\ud83d\ude18', '\ud83d\ude17', '\ud83d\ude19', '\ud83d\ude1a', '\ud83d\ude1b', '\ud83d\ude1d', '\ud83d\ude1e', '\ud83d\ude1f', '\ud83d\ude20', '\ud83d\ude21', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude13', '\ud83d\ude33', '\ud83d\ude34', '\ud83d\ude0c', '\ud83d\ude06', '\ud83d\ude02', '\ud83e\udd14', '\ud83d\ude12', '\ud83d\ude13', '\ud83d\ude36', '\ud83d\ude44', '\ud83d\udc36', '\ud83d\udc31', '\ud83d\udc14', '\ud83d\udc37', '\ud83d\udc34', '\ud83d\udc32', '\ud83d\udc38', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc12', '\ud83d\udc11', '\ud83d\udc15', '\ud83d\udc29', '\ud83c\udf54', '\ud83c\udf55', '\ud83e\udd64', '\ud83c\udf63', '\ud83c\udf72', '\ud83c\udf74', '\ud83c\udf7d', '\ud83c\udf79', '\ud83c\udf78', '\ud83c\udf82', '\ud83d\udcf1', '\ud83d\udcfa', '\ud83d\udcfb', '\ud83c\udfa4', '\ud83d\udcda', '\ud83d\udcbb', '\ud83d\udcf8', '\ud83d\udcf7', '\u2764\ufe0f', '\ud83d\udc94', '\u2763\ufe0f', '\u2600\ufe0f', '\ud83c\udf19', '\ud83c\udf03', '\ud83c\udfe0', '\ud83d\udeaa', _0x360b84(0x10b), _0x360b84(0x16b), '\ud83c\udde8\ud83c\udde6', _0x360b84(0x260), _0x360b84('\x30\x78\x32\x37\x37'), '\ud83c\uddeb\ud83c\uddf7', _0x360b84('\x30\x78\x32\x31\x35'), '\ud83d\udc4d', '\ud83d\udc4e', '\ud83d\udc4f', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83e\udd1d', '\ud83d\ude4f', '\ud83d\udc51', '\ud83c\udf3b', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf39', '\ud83c\udf34', _0x360b84(0x24b), '\ud83c\udf0a', '\ud83d\ude97', '\ud83d\ude8c', _0x360b84(0x20e), _0x360b84('\x30\x78\x31\x61\x34'), _0x360b84('\x30\x78\x31\x65\x65'), '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', _0x360b84(0x26f), '\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f', _0x360b84('\x30\x78\x32\x36\x38'), _0x360b84('\x30\x78\x32\x33\x33'), '\ud83c\udfbe', '\ud83c\udfc0', '\ud83c\udfc8', '\ud83c\udfaf', '\ud83c\udfc6', '\x3f\x3f', '\u2b06\ufe0f', '\u2b07\ufe0f', '\u21d2', '\u21d0', '\u21a9\ufe0f', '\u21aa\ufe0f', '\u2139\ufe0f', '\u203c\ufe0f', '\u2049\ufe0f', '\u203d\ufe0f', '\u00a9\ufe0f', '\u00ae\ufe0f', '\u2122\ufe0f', '\ud83d\udd34', '\ud83d\udd35', '\ud83d\udfe2', '\ud83d\udd39', '\ud83d\udd3a', '\ud83d\udcaf', '\ud83d\udc51', '\ud83e\udd23', _0x360b84('\x30\x78\x31\x30\x32'), _0x360b84(0x15c), _0x360b84(0x175), _0x360b84(0x1c8), _0x360b84('\x30\x78\x32\x39\x66'), '\ud83d\ude46\u200d\u2640\ufe0f', _0x360b84(0x1e2), '\ud83e\udd26\u200d\u2640\ufe0f', '\ud83c\udffb', '\ud83d\udc86\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x32\x34\x32'), _0x360b84('\x30\x78\x31\x32\x33'), _0x360b84(0x228), '\ud83d\udc87\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x32\x33\x30'), '\ud83d\udeab', '\ud83d\udebd', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84(0x2a4), _0x360b84(0x19d), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84(0x22f), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84(0x22f), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', '\ud83d\udcfd\ufe0f', '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ufffd', '\ud83c\udfef', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udd2b', '\ud83d\udd77\ufe0f', '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83d\udd74\ufe0f', '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84(0x126), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udf33', '\ud83c\udf32', '\ud83c\udf3e', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf43', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf31', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', '\ud83d\udd77\ufe0f', '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84(0x280), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84(0x2a4), _0x360b84(0x19d), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83d\udd74\ufe0f', '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84('\x30\x78\x31\x32\x36'), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84(0x27a), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84(0x2a4), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83d\udc12', '\ud83e\udd8d', '\ud83e\udda7', '\ud83d\udc36', '\ud83d\udc15', '\ud83e\uddae', _0x360b84('\x30\x78\x31\x30\x30'), '\ud83d\udc29', '\ud83d\udc3a', '\ud83e\udd8a', '\ud83e\udd9d', '\ud83d\udc31', '\ud83d\udc08', _0x360b84(0x1d1), '\ud83e\udd81', '\ud83d\udc2f', '\ud83d\udc05', '\ud83d\udc06', '\ud83d\udc34', '\ud83d\udc0e', '\ud83e\udd84', '\ud83e\udd93', '\ud83e\udd8c', '\ud83e\uddac', '\ud83d\udc2e', '\ud83d\udc02', '\ud83d\udc03', '\ud83d\udc04', '\ud83d\udc37', '\ud83d\udc16', '\ud83d\udc17', '\ud83d\udc3d', '\ud83d\udc0f', '\ud83d\udc11', '\ud83d\udc10', '\ud83d\udc2a', '\ud83d\udc2b', '\ud83e\udd99', '\ud83e\udd92', '\ud83d\udc18', '\ud83e\udda3', '\ud83e\udd8f', '\ud83e\udd9b', '\ud83d\udc2d', '\ud83d\udc01', '\ud83d\udc00', '\ud83d\udc39', '\ud83d\udc30', '\ud83d\udc07', _0x360b84(0x157), '\ud83e\uddab', '\ud83e\udd94', '\ud83e\udd87', '\ud83d\udc3b', _0x360b84(0x237), '\ud83d\udc28', '\ud83d\udc3c', '\ud83e\udda5', '\ud83e\udda6', '\ud83e\udda8', '\ud83e\udd98', '\ud83e\udda1', '\ud83d\udc3e', '\ud83e\udd83', '\ud83d\udc14', '\ud83d\udc13', '\ud83d\udc23', '\ud83d\udc24', '\ud83d\udc25', '\ud83d\udc26', '\ud83d\udc27', '\ud83d\udd4a\ufe0f', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udda2', '\ud83e\udd89', '\ud83e\udda4', '\ud83e\udeb6', '\ud83e\udda9', '\ud83e\udd9a', '\ud83e\udd9c', '\ud83d\udc38', '\ud83d\udc0a', '\ud83d\udc22', '\ud83e\udd8e', '\ud83d\udc0d', '\ud83d\udc32', '\ud83d\udc09', '\ud83e\udd95', '\ud83e\udd96', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc2c', '\ud83e\uddad', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\ude00', '\ud83d\ude03', '\ud83d\ude04', '\ud83d\ude01', '\ud83d\ude06', '\ud83d\ude05', '\ud83e\udd23', '\ud83d\ude02', '\ud83d\ude42', '\ud83d\ude43', '\ud83d\ude09', '\ud83d\ude0a', '\ud83d\ude07', '\ud83e\udd70', '\ud83d\ude0d', '\ud83e\udd29', '\ud83d\ude18', '\ud83d\ude17', '\u263a\ufe0f', '\ud83d\ude1a', '\ud83d\ude19', '\ud83e\udd72', '\ud83d\ude0b', '\ud83d\ude1b', '\ud83d\ude1c', '\ud83e\udd2a', '\ud83d\ude1d', '\ud83e\udd11', '\ud83e\udd17', '\ud83e\udd2d', '\ud83e\udd2b', '\ud83e\udd14', '\ud83e\udd10', '\ud83e\udd28', '\ud83d\ude10', '\ud83d\ude11', '\ud83d\ude36', _0x360b84(0x288), '\ud83d\ude0f', '\ud83d\ude12', '\ud83d\ude44', '\ud83d\ude2c', _0x360b84('\x30\x78\x32\x35\x61'), '\ud83e\udd25', '\ud83d\ude0c', '\ud83d\ude14', '\ud83d\ude2a', '\ud83e\udd24', '\ud83d\ude34', '\ud83d\ude37', '\ud83e\udd12', '\ud83e\udd15', '\ud83e\udd22', '\ud83e\udd2e', '\ud83e\udd27', '\ud83e\udd75', '\ud83e\udd76', '\ud83e\udd74', '\ud83d\ude35', '\ud83d\ude35\u200d\ud83d\udcab', '\ud83e\udd2f', '\ud83e\udd20', '\ud83e\udd73', '\ud83e\udd78', '\ud83d\ude0e', '\ud83e\udd13', '\ud83e\uddd0', '\ud83d\ude15', '\ud83d\ude1f', '\ud83d\ude41', '\u2639\ufe0f', '\ud83d\ude2e', '\ud83d\ude2f', '\ud83d\ude32', '\ud83d\ude33', '\ud83e\udd7a', '\ud83d\ude26', '\ud83d\ude27', '\ud83d\ude28', '\ud83d\ude30', '\ud83d\ude25', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude31', '\ud83d\ude16', '\ud83d\ude23', '\ud83d\ude1e', '\ud83d\ude13', '\ud83d\ude29', '\ud83d\ude2b', '\ud83e\udd71', '\ud83d\ude24', '\ud83d\ude21', '\ud83d\ude20', '\ud83e\udd2c', '\ud83d\ude08', '\ud83d\udc7f', '\ud83d\udc80', '\u2620\ufe0f', '\ud83d\udca9', '\ud83e\udd21', '\ud83d\udc79', '\ud83d\udc7a', '\ud83d\udc7b', '\ud83d\udc7d', '\ud83d\udc7e', '\ud83e\udd16', '\ud83d\ude3a', '\ud83d\ude38', '\ud83d\ude39', '\ud83d\ude3b', '\ud83d\ude3c', '\ud83d\ude3d', '\ud83d\ude40', '\ud83d\ude3f', '\ud83d\ude3e', '\ud83d\ude48', '\ud83d\ude49', '\ud83d\ude4a', '\ud83d\udc8b', '\ud83d\udc8c', '\ud83d\udc98', '\ud83d\udc9d', '\ud83d\udc96', '\ud83d\udc97', '\ud83d\udc93', '\ud83d\udc9e', '\ud83d\udc95', '\ud83d\udc9f', '\u2763\ufe0f', '\ud83d\udc94', '\u2764\ufe0f\u200d\ud83d\udd25', _0x360b84('\x30\x78\x31\x62\x34'), '\u2764\ufe0f', '\ud83e\udde1', '\ud83d\udc9b', '\ud83d\udc9a', '\ud83d\udc99', '\ud83d\udc9c', '\ud83e\udd0e', '\ud83d\udda4', '\ud83e\udd0d', '\ud83d\udcaf', '\ud83d\udca2', '\ud83d\udca5', '\ud83d\udcab', '\ud83d\udca6', '\ud83d\udca8', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udcac', _0x360b84(0x1c7), _0x360b84(0x20c), '\ud83d\uddef\ufe0f', '\ud83d\udcad', '\ud83d\udca4', '\ud83d\udc4b', '\ud83e\udd1a', _0x360b84('\x30\x78\x32\x33\x62'), '\u270b', '\ud83d\udd96', '\ud83d\udc4c', '\ud83e\udd0c', '\ud83e\udd0f', '\u270c\ufe0f', '\ud83e\udd1e', '\ud83e\udd1f', '\ud83e\udd18', '\ud83e\udd19', '\ud83d\udc48', '\ud83d\udc49', '\ud83d\udc46', '\ud83d\udd95', '\ud83d\udc47', '\u261d\ufe0f', '\ud83d\udc4d', '\ud83d\udc4e', '\u270a', '\ud83d\udc4a', '\ud83e\udd1b', '\ud83e\udd1c', '\ud83d\udc4f', '\ud83d\ude4c', '\ud83d\udc50', '\ud83e\udd32', '\ud83e\udd1d', '\ud83d\ude4f', '\u270d\ufe0f', '\ud83d\udc85', '\ud83e\udd33', '\ud83d\udcaa', '\ud83e\uddbe', '\ud83e\uddbf', '\ud83e\uddb5', '\ud83e\uddb6', '\ud83d\udc42', '\ud83e\uddbb', '\ud83d\udc43', '\ud83e\udde0', '\ud83e\udec0', '\ud83e\udec1', '\ud83e\uddb7', '\ud83e\uddb4', '\ud83d\udc40', _0x360b84('\x30\x78\x32\x30\x32'), '\ud83d\udc45', '\ud83d\udc44', '\ud83d\udc76', '\ud83e\uddd2', '\ud83d\udc66', '\ud83d\udc67', '\ud83e\uddd1', '\ud83d\udc71', '\ud83d\udc68', '\ud83e\uddd4', _0x360b84(0x1e1), _0x360b84(0x120), _0x360b84(0x19f), _0x360b84('\x30\x78\x32\x35\x32'), _0x360b84(0x1ff), _0x360b84('\x30\x78\x31\x36\x36'), '\ud83d\udc69', _0x360b84(0x1f9), _0x360b84('\x30\x78\x31\x61\x65'), '\ud83d\udc69\u200d\ud83e\uddb1', '\ud83e\uddd1\u200d\ud83e\uddb1', '\ud83d\udc69\u200d\ud83e\uddb3', _0x360b84(0x15b), _0x360b84('\x30\x78\x31\x66\x61'), _0x360b84(0x154), _0x360b84('\x30\x78\x31\x61\x30'), '\ud83d\udc71\u200d\u2642\ufe0f', '\ud83e\uddd3', '\ud83d\udc74', '\ud83d\udc75', '\ud83d\ude4d', _0x360b84('\x30\x78\x31\x63\x32'), _0x360b84('\x30\x78\x31\x66\x33'), '\ud83d\ude4e', _0x360b84(0x18d), _0x360b84(0x1c6), '\ud83d\ude45', _0x360b84('\x30\x78\x31\x37\x35'), '\ud83d\ude45\u200d\u2640\ufe0f', '\ud83d\ude46', _0x360b84('\x30\x78\x32\x39\x66'), _0x360b84('\x30\x78\x31\x34\x66'), '\ud83d\udc81', _0x360b84(0x1ef), '\ud83d\udc81\u200d\u2640\ufe0f', '\ud83d\ude4b', _0x360b84(0x160), _0x360b84('\x30\x78\x31\x31\x63'), '\ud83e\uddcf', '\ud83e\uddcf\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x32\x39\x61'), '\ud83d\ude47', _0x360b84('\x30\x78\x31\x33\x35'), '\ud83d\ude47\u200d\u2640\ufe0f', '\ud83e\udd26', _0x360b84('\x30\x78\x31\x65\x32'), _0x360b84(0x165), '\ud83e\udd37', _0x360b84(0x102), _0x360b84('\x30\x78\x31\x35\x63'), '\ud83e\uddd1\u200d\u2695\ufe0f', '\ud83d\udc68\u200d\u2695\ufe0f', _0x360b84('\x30\x78\x31\x38\x32'), _0x360b84('\x30\x78\x32\x61\x36'), '\ud83d\udc68\u200d\ud83c\udf93', '\ud83d\udc69\u200d\ud83c\udf93', _0x360b84('\x30\x78\x31\x33\x66'), '\ud83d\udc68\u200d\ud83c\udfeb', _0x360b84('\x30\x78\x32\x34\x66'), _0x360b84(0x241), _0x360b84('\x30\x78\x31\x37\x31'), '\ud83d\udc69\u200d\u2696\ufe0f', _0x360b84(0x1ce), _0x360b84(0x1dc), _0x360b84(0x1fd), '\ud83e\uddd1\u200d\ud83c\udf73', '\ud83d\udc68\u200d\ud83c\udf73', _0x360b84('\x30\x78\x31\x39\x31'), _0x360b84(0x168), _0x360b84(0x1f7), '\ud83d\udc69\u200d\ud83d\udd27', '\ud83e\uddd1\u200d\ud83c\udfed', _0x360b84('\x30\x78\x31\x34\x33'), _0x360b84('\x30\x78\x31\x62\x62'), _0x360b84('\x30\x78\x31\x36\x39'), _0x360b84('\x30\x78\x31\x33\x37'), '\ud83d\udc69\u200d\ud83d\udcbc', _0x360b84(0x101), _0x360b84(0x287), _0x360b84(0x17f), _0x360b84('\x30\x78\x31\x64\x34'), _0x360b84('\x30\x78\x32\x33\x61'), '\ud83d\udc69\u200d\ud83d\udcbb', _0x360b84(0x1dd), _0x360b84('\x30\x78\x31\x33\x32'), _0x360b84(0x144), '\ud83e\uddd1\u200d\ud83c\udfa8', _0x360b84('\x30\x78\x32\x34\x37'), _0x360b84(0x183), _0x360b84('\x30\x78\x32\x30\x35'), _0x360b84('\x30\x78\x32\x31\x36'), _0x360b84(0x243), _0x360b84(0x12c), _0x360b84(0x111), '\ud83d\udc69\u200d\ud83d\ude80', _0x360b84('\x30\x78\x31\x30\x63'), '\ud83d\udc68\u200d\ud83d\ude92', _0x360b84('\x30\x78\x32\x32\x32'), '\ud83d\udc6e', _0x360b84('\x30\x78\x31\x33\x31'), '\ud83d\udc6e\u200d\u2640\ufe0f', _0x360b84(0x11e), _0x360b84('\x30\x78\x31\x37\x32'), '\ud83d\udd75\ufe0f\u200d\u2640\ufe0f', '\ud83d\udc82', _0x360b84('\x30\x78\x31\x36\x64'), '\ud83d\udc82\u200d\u2640\ufe0f', '\ud83e\udd77', '\ud83d\udc77', _0x360b84(0x129), '\ud83d\udc77\u200d\u2640\ufe0f', '\ud83e\udd34', '\ud83d\udc78', '\ud83d\udc73', _0x360b84('\x30\x78\x31\x61\x63'), _0x360b84(0x227), '\ud83d\udc72', '\ud83e\uddd5', '\ud83e\udd35', _0x360b84(0x189), _0x360b84(0x1ab), '\ud83d\udc70', _0x360b84(0x1bf), _0x360b84(0x28e), '\ud83e\udd30', '\ud83e\udd31', _0x360b84(0x29e), _0x360b84('\x30\x78\x31\x66\x35'), _0x360b84('\x30\x78\x31\x37\x39'), '\ud83d\udc7c', '\ud83c\udf85', '\ud83e\udd36', _0x360b84('\x30\x78\x32\x36\x64'), '\ud83e\uddb8', _0x360b84('\x30\x78\x31\x36\x65'), '\ud83e\uddb8\u200d\u2640\ufe0f', '\ud83e\uddb9', _0x360b84(0x239), _0x360b84(0x27d), '\ud83e\uddd9', _0x360b84(0x267), _0x360b84(0x24c), '\ud83e\uddda', _0x360b84(0x19e), _0x360b84('\x30\x78\x31\x39\x30'), '\ud83e\udddb', _0x360b84('\x30\x78\x32\x30\x66'), _0x360b84('\x30\x78\x32\x37\x31'), '\ud83e\udddc', _0x360b84('\x30\x78\x31\x30\x33'), _0x360b84('\x30\x78\x31\x38\x30'), '\ud83e\udddd', _0x360b84(0x17b), _0x360b84('\x30\x78\x32\x32\x65'), '\ud83e\uddde', '\ud83e\uddde\u200d\u2642\ufe0f', '\ud83e\uddde\u200d\u2640\ufe0f', '\ud83e\udddf', '\ud83e\udddf\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x61\x37'), '\ud83d\udc86', _0x360b84('\x30\x78\x31\x32\x31'), _0x360b84('\x30\x78\x32\x34\x32'), '\ud83d\udc87', '\ud83d\udc87\u200d\u2642\ufe0f', _0x360b84(0x230), '\ud83d\udeb6', _0x360b84(0x1ca), _0x360b84(0x178), '\ud83e\uddcd', _0x360b84('\x30\x78\x31\x63\x66'), _0x360b84('\x30\x78\x31\x64\x37'), '\ud83e\uddce', _0x360b84('\x30\x78\x32\x61\x30'), _0x360b84('\x30\x78\x31\x37\x33'), _0x360b84(0x184), _0x360b84('\x30\x78\x31\x30\x65'), '\ud83d\udc69\u200d\ud83e\uddaf', _0x360b84(0x203), _0x360b84('\x30\x78\x31\x62\x36'), _0x360b84(0x274), _0x360b84('\x30\x78\x31\x35\x66'), _0x360b84('\x30\x78\x32\x30\x30'), _0x360b84(0x1e8), '\ud83c\udfc3', _0x360b84(0x26f), _0x360b84(0x266), '\ud83d\udc83', '\ud83d\udd7a', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc6f', '\ud83d\udc6f\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x39\x63'), '\ud83e\uddd6', _0x360b84('\x30\x78\x31\x65\x37'), _0x360b84(0x299), '\ud83e\uddd7', _0x360b84(0x21a), '\ud83e\uddd7\u200d\u2640\ufe0f', '\ud83e\udd3a', '\ud83c\udfc7', '\u26f7\ufe0f', '\ud83c\udfc2', '\ud83c\udfcc\ufe0f', _0x360b84('\x30\x78\x31\x30\x39'), _0x360b84(0x1f0), '\ud83c\udfc4', _0x360b84(0x233), _0x360b84('\x30\x78\x32\x35\x64'), '\ud83d\udea3', _0x360b84('\x30\x78\x31\x65\x62'), _0x360b84(0x289), '\ud83c\udfca', '\ud83c\udfca\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x64\x66'), '\u26f9\ufe0f', _0x360b84('\x30\x78\x31\x36\x33'), '\u26f9\ufe0f\u200d\u2640\ufe0f', _0x360b84(0x176), '\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x62\x33'), '\ud83d\udeb4', '\ud83d\udeb4\u200d\u2642\ufe0f', _0x360b84(0x119), '\ud83d\udeb5', _0x360b84('\x30\x78\x31\x38\x65'), '\ud83d\udeb5\u200d\u2640\ufe0f', '\ud83e\udd38', _0x360b84('\x30\x78\x31\x63\x63'), '\ud83e\udd38\u200d\u2640\ufe0f', '\ud83e\udd3c', _0x360b84('\x30\x78\x31\x63\x34'), _0x360b84(0x153), '\ud83e\udd3d', _0x360b84('\x30\x78\x31\x33\x63'), '\ud83e\udd3d\u200d\u2640\ufe0f', '\ud83e\udd3e', _0x360b84('\x30\x78\x32\x32\x30'), _0x360b84(0x15a), '\ud83e\udd39', _0x360b84('\x30\x78\x31\x38\x61'), _0x360b84('\x30\x78\x31\x34\x65'), '\ud83e\uddd8', _0x360b84(0x285), '\ud83e\uddd8\u200d\u2640\ufe0f', '\ud83d\udec0', '\ud83d\udecc', _0x360b84(0x256), '\ud83d\udc6d', '\ud83d\udc6b', '\ud83d\udc6c', '\ud83d\udc8f', _0x360b84('\x30\x78\x32\x36\x39'), '\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68', _0x360b84(0x16a), '\ud83d\udc91', _0x360b84(0x1b2), _0x360b84('\x30\x78\x31\x31\x66'), _0x360b84('\x30\x78\x32\x35\x37'), '\ud83d\udc6a', _0x360b84('\x30\x78\x31\x38\x63'), _0x360b84('\x30\x78\x31\x66\x36'), _0x360b84('\x30\x78\x32\x61\x31'), _0x360b84('\x30\x78\x31\x63\x33'), _0x360b84('\x30\x78\x32\x38\x34'), _0x360b84('\x30\x78\x31\x65\x61'), _0x360b84('\x30\x78\x31\x37\x65'), _0x360b84(0x122), '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x360b84('\x30\x78\x31\x64\x61'), _0x360b84('\x30\x78\x31\x35\x36'), _0x360b84('\x30\x78\x32\x32\x63'), _0x360b84('\x30\x78\x32\x36\x63'), '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x360b84('\x30\x78\x31\x35\x31'), _0x360b84('\x30\x78\x32\x37\x62'), _0x360b84(0x290), _0x360b84('\x30\x78\x31\x61\x31'), _0x360b84(0x1f2), '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', _0x360b84(0x281), _0x360b84(0x198), '\ud83d\udc69\u200d\ud83d\udc67', _0x360b84('\x30\x78\x31\x66\x65'), _0x360b84('\x30\x78\x31\x66\x31'), _0x360b84(0x199), '\ud83d\udc64', '\ud83d\udc65', '\ud83e\udec2', '\ud83d\udc63', '\ud83e\uddb0', '\ud83e\uddb1', '\ud83e\uddb3', '\ud83e\uddb2', '\ud83d\udc35'],
                    _0x5844cd = _0x4c1b05[Math['\x66\x6c\x6f\x6f\x72'](Math[_0x360b84(0x104)]() * _0x4c1b05['\x6c\x65\x6e\x67\x74\x68'])];
                _0x28c401['\x72\x65\x61\x63\x74'](_0x5844cd);
            }
        }
        if (!_0x3b7982 && _0x20bba8 === _0xebab09) {
            if (config['\x4f\x57\x4e\x45\x52\x5f\x52\x45\x41\x43\x54'] === _0x360b84(0x263)) {
                const _0x1ba4c8 = ['\ud83d\ude0a', '\ud83d\udc4d', '\ud83d\ude02', '\ud83d\udcaf', '\ud83d\udd25', '\ud83d\ude4f', '\ud83c\udf89', '\ud83d\udc4f', '\ud83d\ude0e', '\ud83e\udd16', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84(0x22f), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84(0x126), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84(0x2a4), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84('\x30\x78\x31\x32\x36'), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udd2b', '\ud83d\udd77\ufe0f', '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84('\x30\x78\x31\x32\x36'), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84(0x2a4), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', '\ud83d\udd73\ufe0f', '\ud83d\udca3', '\ud83d\udd2b', _0x360b84(0x2a4), _0x360b84(0x19d), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\ude42', '\ud83d\ude11', '\ud83e\udd23', '\ud83d\ude0d', '\ud83d\ude18', '\ud83d\ude17', '\ud83d\ude19', '\ud83d\ude1a', '\ud83d\ude1b', '\ud83d\ude1d', '\ud83d\ude1e', '\ud83d\ude1f', '\ud83d\ude20', '\ud83d\ude21', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude13', '\ud83d\ude33', '\ud83d\ude34', '\ud83d\ude0c', '\ud83d\ude06', '\ud83d\ude02', '\ud83e\udd14', '\ud83d\ude12', '\ud83d\ude13', '\ud83d\ude36', '\ud83d\ude44', '\ud83d\udc36', '\ud83d\udc31', '\ud83d\udc14', '\ud83d\udc37', '\ud83d\udc34', '\ud83d\udc32', '\ud83d\udc38', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc12', '\ud83d\udc11', '\ud83d\udc15', '\ud83d\udc29', '\ud83c\udf54', '\ud83c\udf55', '\ud83e\udd64', '\ud83c\udf63', '\ud83c\udf72', '\ud83c\udf74', '\ud83c\udf7d', '\ud83c\udf79', '\ud83c\udf78', '\ud83c\udf82', '\ud83d\udcf1', '\ud83d\udcfa', '\ud83d\udcfb', '\ud83c\udfa4', '\ud83d\udcda', '\ud83d\udcbb', '\ud83d\udcf8', '\ud83d\udcf7', '\u2764\ufe0f', '\ud83d\udc94', '\u2763\ufe0f', '\u2600\ufe0f', '\ud83c\udf19', '\ud83c\udf03', '\ud83c\udfe0', '\ud83d\udeaa', _0x360b84(0x10b), _0x360b84('\x30\x78\x31\x36\x62'), _0x360b84(0x250), _0x360b84(0x260), '\ud83c\uddef\ud83c\uddf5', '\ud83c\uddeb\ud83c\uddf7', '\ud83c\uddea\ud83c\uddf8', '\ud83d\udc4d', '\ud83d\udc4e', '\ud83d\udc4f', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83e\udd1d', '\ud83d\ude4f', '\ud83d\udc51', '\ud83c\udf3b', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf39', '\ud83c\udf34', _0x360b84('\x30\x78\x32\x34\x62'), '\ud83c\udf0a', '\ud83d\ude97', '\ud83d\ude8c', _0x360b84('\x30\x78\x32\x30\x65'), '\ud83d\udeeb\ufe0f', '\ud83d\udeec\ufe0f', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', _0x360b84('\x30\x78\x32\x36\x66'), '\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f', '\ud83c\udfca\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x32\x33\x33'), '\ud83c\udfbe', '\ud83c\udfc0', '\ud83c\udfc8', '\ud83c\udfaf', '\ud83c\udfc6', '\x3f\x3f', '\u2b06\ufe0f', '\u2b07\ufe0f', '\u21d2', '\u21d0', '\u21a9\ufe0f', '\u21aa\ufe0f', '\u2139\ufe0f', '\u203c\ufe0f', '\u2049\ufe0f', '\u203d\ufe0f', '\u00a9\ufe0f', '\u00ae\ufe0f', '\u2122\ufe0f', '\ud83d\udd34', '\ud83d\udd35', '\ud83d\udfe2', '\ud83d\udd39', '\ud83d\udd3a', '\ud83d\udcaf', '\ud83d\udc51', '\ud83e\udd23', _0x360b84('\x30\x78\x31\x30\x32'), _0x360b84(0x15c), _0x360b84(0x175), _0x360b84('\x30\x78\x31\x63\x38'), _0x360b84(0x29f), '\ud83d\ude46\u200d\u2640\ufe0f', _0x360b84(0x1e2), _0x360b84('\x30\x78\x31\x36\x35'), '\ud83c\udffb', _0x360b84(0x121), _0x360b84(0x242), '\ud83d\udd74\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x32\x32\x38'), _0x360b84('\x30\x78\x32\x39\x33'), _0x360b84(0x230), '\ud83d\udeab', '\ud83d\udebd', '\ud83d\udd73\ufe0f', '\ud83d\udca3', '\ud83d\udd2b', _0x360b84(0x2a4), _0x360b84('\x30\x78\x31\x39\x64'), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84(0x22f), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84(0x126), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ufffd', '\ud83c\udfef', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84(0x280), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84('\x30\x78\x31\x32\x36'), '\ud83d\udcf8', '\ud83d\udcf7', _0x360b84('\x30\x78\x32\x37\x61'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84('\x30\x78\x32\x61\x34'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udf33', '\ud83c\udf32', '\ud83c\udf3e', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf43', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf31', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', _0x360b84(0x27a), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', '\ud83d\udd77\ufe0f', '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udd2b', _0x360b84(0x2a4), '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x360b84('\x30\x78\x32\x32\x66'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x360b84(0x22f), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x360b84(0x126), '\ud83d\udcf8', '\ud83d\udcf7', '\ud83d\udd6f\ufe0f', '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x360b84(0x2a4), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83d\udc12', '\ud83e\udd8d', '\ud83e\udda7', '\ud83d\udc36', '\ud83d\udc15', '\ud83e\uddae', _0x360b84('\x30\x78\x31\x30\x30'), '\ud83d\udc29', '\ud83d\udc3a', '\ud83e\udd8a', '\ud83e\udd9d', '\ud83d\udc31', '\ud83d\udc08', _0x360b84('\x30\x78\x31\x64\x31'), '\ud83e\udd81', '\ud83d\udc2f', '\ud83d\udc05', '\ud83d\udc06', '\ud83d\udc34', '\ud83d\udc0e', '\ud83e\udd84', '\ud83e\udd93', '\ud83e\udd8c', '\ud83e\uddac', '\ud83d\udc2e', '\ud83d\udc02', '\ud83d\udc03', '\ud83d\udc04', '\ud83d\udc37', '\ud83d\udc16', '\ud83d\udc17', '\ud83d\udc3d', '\ud83d\udc0f', '\ud83d\udc11', '\ud83d\udc10', '\ud83d\udc2a', '\ud83d\udc2b', '\ud83e\udd99', '\ud83e\udd92', '\ud83d\udc18', '\ud83e\udda3', '\ud83e\udd8f', '\ud83e\udd9b', '\ud83d\udc2d', '\ud83d\udc01', '\ud83d\udc00', '\ud83d\udc39', '\ud83d\udc30', '\ud83d\udc07', '\ud83d\udc3f\ufe0f', '\ud83e\uddab', '\ud83e\udd94', '\ud83e\udd87', '\ud83d\udc3b', _0x360b84(0x237), '\ud83d\udc28', '\ud83d\udc3c', '\ud83e\udda5', '\ud83e\udda6', '\ud83e\udda8', '\ud83e\udd98', '\ud83e\udda1', '\ud83d\udc3e', '\ud83e\udd83', '\ud83d\udc14', '\ud83d\udc13', '\ud83d\udc23', '\ud83d\udc24', '\ud83d\udc25', '\ud83d\udc26', '\ud83d\udc27', '\ud83d\udd4a\ufe0f', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udda2', '\ud83e\udd89', '\ud83e\udda4', '\ud83e\udeb6', '\ud83e\udda9', '\ud83e\udd9a', '\ud83e\udd9c', '\ud83d\udc38', '\ud83d\udc0a', '\ud83d\udc22', '\ud83e\udd8e', '\ud83d\udc0d', '\ud83d\udc32', '\ud83d\udc09', '\ud83e\udd95', '\ud83e\udd96', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc2c', '\ud83e\uddad', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\ude00', '\ud83d\ude03', '\ud83d\ude04', '\ud83d\ude01', '\ud83d\ude06', '\ud83d\ude05', '\ud83e\udd23', '\ud83d\ude02', '\ud83d\ude42', '\ud83d\ude43', '\ud83d\ude09', '\ud83d\ude0a', '\ud83d\ude07', '\ud83e\udd70', '\ud83d\ude0d', '\ud83e\udd29', '\ud83d\ude18', '\ud83d\ude17', '\u263a\ufe0f', '\ud83d\ude1a', '\ud83d\ude19', '\ud83e\udd72', '\ud83d\ude0b', '\ud83d\ude1b', '\ud83d\ude1c', '\ud83e\udd2a', '\ud83d\ude1d', '\ud83e\udd11', '\ud83e\udd17', '\ud83e\udd2d', '\ud83e\udd2b', '\ud83e\udd14', '\ud83e\udd10', '\ud83e\udd28', '\ud83d\ude10', '\ud83d\ude11', '\ud83d\ude36', _0x360b84(0x288), '\ud83d\ude0f', '\ud83d\ude12', '\ud83d\ude44', '\ud83d\ude2c', _0x360b84('\x30\x78\x32\x35\x61'), '\ud83e\udd25', '\ud83d\ude0c', '\ud83d\ude14', '\ud83d\ude2a', '\ud83e\udd24', '\ud83d\ude34', '\ud83d\ude37', '\ud83e\udd12', '\ud83e\udd15', '\ud83e\udd22', '\ud83e\udd2e', '\ud83e\udd27', '\ud83e\udd75', '\ud83e\udd76', '\ud83e\udd74', '\ud83d\ude35', _0x360b84('\x30\x78\x32\x30\x64'), '\ud83e\udd2f', '\ud83e\udd20', '\ud83e\udd73', '\ud83e\udd78', '\ud83d\ude0e', '\ud83e\udd13', '\ud83e\uddd0', '\ud83d\ude15', '\ud83d\ude1f', '\ud83d\ude41', '\u2639\ufe0f', '\ud83d\ude2e', '\ud83d\ude2f', '\ud83d\ude32', '\ud83d\ude33', '\ud83e\udd7a', '\ud83d\ude26', '\ud83d\ude27', '\ud83d\ude28', '\ud83d\ude30', '\ud83d\ude25', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude31', '\ud83d\ude16', '\ud83d\ude23', '\ud83d\ude1e', '\ud83d\ude13', '\ud83d\ude29', '\ud83d\ude2b', '\ud83e\udd71', '\ud83d\ude24', '\ud83d\ude21', '\ud83d\ude20', '\ud83e\udd2c', '\ud83d\ude08', '\ud83d\udc7f', '\ud83d\udc80', '\u2620\ufe0f', '\ud83d\udca9', '\ud83e\udd21', '\ud83d\udc79', '\ud83d\udc7a', '\ud83d\udc7b', '\ud83d\udc7d', '\ud83d\udc7e', '\ud83e\udd16', '\ud83d\ude3a', '\ud83d\ude38', '\ud83d\ude39', '\ud83d\ude3b', '\ud83d\ude3c', '\ud83d\ude3d', '\ud83d\ude40', '\ud83d\ude3f', '\ud83d\ude3e', '\ud83d\ude48', '\ud83d\ude49', '\ud83d\ude4a', '\ud83d\udc8b', '\ud83d\udc8c', '\ud83d\udc98', '\ud83d\udc9d', '\ud83d\udc96', '\ud83d\udc97', '\ud83d\udc93', '\ud83d\udc9e', '\ud83d\udc95', '\ud83d\udc9f', '\u2763\ufe0f', '\ud83d\udc94', _0x360b84('\x30\x78\x32\x35\x38'), _0x360b84(0x1b4), '\u2764\ufe0f', '\ud83e\udde1', '\ud83d\udc9b', '\ud83d\udc9a', '\ud83d\udc99', '\ud83d\udc9c', '\ud83e\udd0e', '\ud83d\udda4', '\ud83e\udd0d', '\ud83d\udcaf', '\ud83d\udca2', '\ud83d\udca5', '\ud83d\udcab', '\ud83d\udca6', '\ud83d\udca8', _0x360b84('\x30\x78\x32\x38\x30'), '\ud83d\udca3', '\ud83d\udcac', _0x360b84(0x1c7), _0x360b84(0x20c), _0x360b84(0x1fb), '\ud83d\udcad', '\ud83d\udca4', '\ud83d\udc4b', '\ud83e\udd1a', _0x360b84(0x23b), '\u270b', '\ud83d\udd96', '\ud83d\udc4c', '\ud83e\udd0c', '\ud83e\udd0f', '\u270c\ufe0f', '\ud83e\udd1e', '\ud83e\udd1f', '\ud83e\udd18', '\ud83e\udd19', '\ud83d\udc48', '\ud83d\udc49', '\ud83d\udc46', '\ud83d\udd95', '\ud83d\udc47', '\u261d\ufe0f', '\ud83d\udc4d', '\ud83d\udc4e', '\u270a', '\ud83d\udc4a', '\ud83e\udd1b', '\ud83e\udd1c', '\ud83d\udc4f', '\ud83d\ude4c', '\ud83d\udc50', '\ud83e\udd32', '\ud83e\udd1d', '\ud83d\ude4f', '\u270d\ufe0f', '\ud83d\udc85', '\ud83e\udd33', '\ud83d\udcaa', '\ud83e\uddbe', '\ud83e\uddbf', '\ud83e\uddb5', '\ud83e\uddb6', '\ud83d\udc42', '\ud83e\uddbb', '\ud83d\udc43', '\ud83e\udde0', '\ud83e\udec0', '\ud83e\udec1', '\ud83e\uddb7', '\ud83e\uddb4', '\ud83d\udc40', '\ud83d\udc41\ufe0f', '\ud83d\udc45', '\ud83d\udc44', '\ud83d\udc76', '\ud83e\uddd2', '\ud83d\udc66', '\ud83d\udc67', '\ud83e\uddd1', '\ud83d\udc71', '\ud83d\udc68', '\ud83e\uddd4', _0x360b84(0x1e1), _0x360b84('\x30\x78\x31\x32\x30'), _0x360b84(0x19f), _0x360b84('\x30\x78\x32\x35\x32'), '\ud83d\udc68\u200d\ud83e\uddb3', _0x360b84(0x166), '\ud83d\udc69', '\ud83d\udc69\u200d\ud83e\uddb0', _0x360b84(0x1ae), _0x360b84('\x30\x78\x66\x65'), '\ud83e\uddd1\u200d\ud83e\uddb1', '\ud83d\udc69\u200d\ud83e\uddb3', '\ud83e\uddd1\u200d\ud83e\uddb3', _0x360b84(0x1fa), _0x360b84(0x154), '\ud83d\udc71\u200d\u2640\ufe0f', _0x360b84(0x13a), '\ud83e\uddd3', '\ud83d\udc74', '\ud83d\udc75', '\ud83d\ude4d', _0x360b84('\x30\x78\x31\x63\x32'), _0x360b84(0x1f3), '\ud83d\ude4e', '\ud83d\ude4e\u200d\u2642\ufe0f', _0x360b84(0x1c6), '\ud83d\ude45', _0x360b84('\x30\x78\x31\x37\x35'), _0x360b84('\x30\x78\x31\x63\x38'), '\ud83d\ude46', _0x360b84(0x29f), _0x360b84(0x14f), '\ud83d\udc81', _0x360b84(0x1ef), '\ud83d\udc81\u200d\u2640\ufe0f', '\ud83d\ude4b', '\ud83d\ude4b\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x31\x63'), '\ud83e\uddcf', '\ud83e\uddcf\u200d\u2642\ufe0f', _0x360b84(0x29a), '\ud83d\ude47', _0x360b84('\x30\x78\x31\x33\x35'), _0x360b84(0x238), '\ud83e\udd26', '\ud83e\udd26\u200d\u2642\ufe0f', _0x360b84(0x165), '\ud83e\udd37', '\ud83e\udd37\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x35\x63'), _0x360b84(0x26a), '\ud83d\udc68\u200d\u2695\ufe0f', _0x360b84('\x30\x78\x31\x38\x32'), _0x360b84(0x2a6), _0x360b84(0x208), _0x360b84('\x30\x78\x31\x32\x62'), _0x360b84('\x30\x78\x31\x33\x66'), '\ud83d\udc68\u200d\ud83c\udfeb', _0x360b84('\x30\x78\x32\x34\x66'), _0x360b84(0x241), _0x360b84(0x171), _0x360b84('\x30\x78\x32\x35\x65'), _0x360b84('\x30\x78\x31\x63\x65'), _0x360b84(0x1dc), _0x360b84(0x1fd), _0x360b84(0x29b), _0x360b84('\x30\x78\x32\x31\x63'), _0x360b84('\x30\x78\x31\x39\x31'), _0x360b84('\x30\x78\x31\x36\x38'), '\ud83d\udc68\u200d\ud83d\udd27', _0x360b84('\x30\x78\x32\x31\x62'), _0x360b84('\x30\x78\x32\x34\x35'), _0x360b84(0x143), _0x360b84('\x30\x78\x31\x62\x62'), _0x360b84('\x30\x78\x31\x36\x39'), _0x360b84(0x137), _0x360b84('\x30\x78\x31\x61\x61'), '\ud83e\uddd1\u200d\ud83d\udd2c', _0x360b84('\x30\x78\x32\x38\x37'), _0x360b84('\x30\x78\x31\x37\x66'), _0x360b84('\x30\x78\x31\x64\x34'), '\ud83d\udc68\u200d\ud83d\udcbb', _0x360b84(0x23f), _0x360b84('\x30\x78\x31\x64\x64'), _0x360b84(0x132), _0x360b84('\x30\x78\x31\x34\x34'), '\ud83e\uddd1\u200d\ud83c\udfa8', _0x360b84('\x30\x78\x32\x34\x37'), _0x360b84(0x183), '\ud83e\uddd1\u200d\u2708\ufe0f', _0x360b84('\x30\x78\x32\x31\x36'), _0x360b84(0x243), '\ud83e\uddd1\u200d\ud83d\ude80', _0x360b84('\x30\x78\x31\x31\x31'), _0x360b84('\x30\x78\x31\x39\x36'), _0x360b84(0x10c), _0x360b84(0x1d5), '\ud83d\udc69\u200d\ud83d\ude92', '\ud83d\udc6e', _0x360b84('\x30\x78\x31\x33\x31'), '\ud83d\udc6e\u200d\u2640\ufe0f', _0x360b84('\x30\x78\x31\x31\x65'), _0x360b84(0x172), _0x360b84(0x23c), '\ud83d\udc82', '\ud83d\udc82\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x30\x36'), '\ud83e\udd77', '\ud83d\udc77', _0x360b84(0x129), _0x360b84(0x204), '\ud83e\udd34', '\ud83d\udc78', '\ud83d\udc73', '\ud83d\udc73\u200d\u2642\ufe0f', '\ud83d\udc73\u200d\u2640\ufe0f', '\ud83d\udc72', '\ud83e\uddd5', '\ud83e\udd35', '\ud83e\udd35\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x61\x62'), '\ud83d\udc70', _0x360b84(0x1bf), _0x360b84('\x30\x78\x32\x38\x65'), '\ud83e\udd30', '\ud83e\udd31', _0x360b84('\x30\x78\x32\x39\x65'), _0x360b84('\x30\x78\x31\x66\x35'), _0x360b84('\x30\x78\x31\x37\x39'), '\ud83d\udc7c', '\ud83c\udf85', '\ud83e\udd36', _0x360b84(0x26d), '\ud83e\uddb8', _0x360b84('\x30\x78\x31\x36\x65'), _0x360b84('\x30\x78\x31\x65\x64'), '\ud83e\uddb9', _0x360b84(0x239), _0x360b84('\x30\x78\x32\x37\x64'), '\ud83e\uddd9', _0x360b84('\x30\x78\x32\x36\x37'), _0x360b84(0x24c), '\ud83e\uddda', _0x360b84(0x19e), _0x360b84('\x30\x78\x31\x39\x30'), '\ud83e\udddb', '\ud83e\udddb\u200d\u2642\ufe0f', '\ud83e\udddb\u200d\u2640\ufe0f', '\ud83e\udddc', _0x360b84('\x30\x78\x31\x30\x33'), _0x360b84(0x180), '\ud83e\udddd', _0x360b84('\x30\x78\x31\x37\x62'), '\ud83e\udddd\u200d\u2640\ufe0f', '\ud83e\uddde', _0x360b84('\x30\x78\x32\x35\x31'), _0x360b84('\x30\x78\x32\x31\x65'), '\ud83e\udddf', _0x360b84('\x30\x78\x32\x61\x33'), _0x360b84(0x1a7), '\ud83d\udc86', _0x360b84(0x121), _0x360b84('\x30\x78\x32\x34\x32'), '\ud83d\udc87', _0x360b84('\x30\x78\x32\x39\x33'), _0x360b84('\x30\x78\x32\x33\x30'), '\ud83d\udeb6', _0x360b84(0x1ca), _0x360b84(0x178), '\ud83e\uddcd', _0x360b84('\x30\x78\x31\x63\x66'), _0x360b84('\x30\x78\x31\x64\x37'), '\ud83e\uddce', _0x360b84('\x30\x78\x32\x61\x30'), _0x360b84(0x173), _0x360b84(0x184), '\ud83d\udc68\u200d\ud83e\uddaf', _0x360b84('\x30\x78\x32\x38\x61'), _0x360b84('\x30\x78\x32\x30\x33'), '\ud83d\udc68\u200d\ud83e\uddbc', _0x360b84('\x30\x78\x32\x37\x34'), _0x360b84(0x15f), '\ud83d\udc68\u200d\ud83e\uddbd', _0x360b84('\x30\x78\x31\x65\x38'), '\ud83c\udfc3', '\ud83c\udfc3\u200d\u2642\ufe0f', _0x360b84(0x266), '\ud83d\udc83', '\ud83d\udd7a', _0x360b84(0x22f), '\ud83d\udc6f', _0x360b84(0x19a), _0x360b84('\x30\x78\x31\x39\x63'), '\ud83e\uddd6', _0x360b84(0x1e7), _0x360b84('\x30\x78\x32\x39\x39'), '\ud83e\uddd7', _0x360b84(0x21a), _0x360b84(0x124), '\ud83e\udd3a', '\ud83c\udfc7', '\u26f7\ufe0f', '\ud83c\udfc2', _0x360b84('\x30\x78\x32\x35\x39'), _0x360b84(0x109), _0x360b84(0x1f0), '\ud83c\udfc4', _0x360b84('\x30\x78\x32\x33\x33'), _0x360b84(0x25d), '\ud83d\udea3', '\ud83d\udea3\u200d\u2642\ufe0f', _0x360b84(0x289), '\ud83c\udfca', _0x360b84(0x268), '\ud83c\udfca\u200d\u2640\ufe0f', '\u26f9\ufe0f', _0x360b84('\x30\x78\x31\x36\x33'), _0x360b84('\x30\x78\x32\x37\x33'), '\ud83c\udfcb\ufe0f', _0x360b84(0x27f), _0x360b84('\x30\x78\x31\x62\x33'), '\ud83d\udeb4', '\ud83d\udeb4\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x31\x39'), '\ud83d\udeb5', _0x360b84('\x30\x78\x31\x38\x65'), _0x360b84(0x114), '\ud83e\udd38', '\ud83e\udd38\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x32\x36\x62'), '\ud83e\udd3c', _0x360b84('\x30\x78\x31\x63\x34'), '\ud83e\udd3c\u200d\u2640\ufe0f', '\ud83e\udd3d', _0x360b84('\x30\x78\x31\x33\x63'), _0x360b84('\x30\x78\x32\x38\x36'), '\ud83e\udd3e', _0x360b84('\x30\x78\x32\x32\x30'), '\ud83e\udd3e\u200d\u2640\ufe0f', '\ud83e\udd39', '\ud83e\udd39\u200d\u2642\ufe0f', _0x360b84('\x30\x78\x31\x34\x65'), '\ud83e\uddd8', _0x360b84(0x285), _0x360b84(0x125), '\ud83d\udec0', '\ud83d\udecc', _0x360b84(0x256), '\ud83d\udc6d', '\ud83d\udc6b', '\ud83d\udc6c', '\ud83d\udc8f', _0x360b84('\x30\x78\x32\x36\x39'), _0x360b84('\x30\x78\x32\x37\x65'), _0x360b84(0x16a), '\ud83d\udc91', _0x360b84(0x1b2), _0x360b84('\x30\x78\x31\x31\x66'), _0x360b84('\x30\x78\x32\x35\x37'), '\ud83d\udc6a', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66', _0x360b84('\x30\x78\x31\x66\x36'), _0x360b84('\x30\x78\x32\x61\x31'), _0x360b84(0x1c3), '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66', _0x360b84(0x17e), _0x360b84('\x30\x78\x31\x32\x32'), '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', _0x360b84('\x30\x78\x31\x35\x36'), _0x360b84(0x22c), _0x360b84(0x26c), _0x360b84('\x30\x78\x31\x36\x37'), _0x360b84('\x30\x78\x31\x35\x31'), _0x360b84(0x27b), _0x360b84(0x290), _0x360b84(0x1a1), _0x360b84(0x1f2), _0x360b84('\x30\x78\x31\x33\x30'), '\ud83d\udc69\u200d\ud83d\udc66', _0x360b84('\x30\x78\x31\x39\x38'), _0x360b84(0x14a), _0x360b84('\x30\x78\x31\x66\x65'), _0x360b84(0x1f1), '\ud83d\udde3\ufe0f', '\ud83d\udc64', '\ud83d\udc65', '\ud83e\udec2', '\ud83d\udc63', '\ud83e\uddb0', '\ud83e\uddb1', '\ud83e\uddb3', '\ud83e\uddb2', '\ud83d\udc35'],
                    _0x547138 = _0x1ba4c8[Math[_0x360b84(0x24d)](Math[_0x360b84(0x104)]() * _0x1ba4c8[_0x360b84('\x30\x78\x31\x62\x65')])];
                _0x28c401[_0x360b84('\x30\x78\x32\x31\x34')](_0x547138);
            }
        }
        if (!_0x3b7982 && _0x20bba8 !== _0xebab09) {
            if (config['\x43\x55\x53\x54\x4f\x4d\x5f\x52\x45\x41\x43\x54'] === '\x74\x72\x75\x65') {
                const _0x124b1b = (config[_0x360b84(0x265)] || _0x360b84(0x1d6))[_0x360b84('\x30\x78\x32\x38\x66')]('\x2c'),
                    _0x3894a1 = _0x124b1b[Math[_0x360b84('\x30\x78\x32\x34\x64')](Math[_0x360b84('\x30\x78\x31\x30\x34')]() * _0x124b1b[_0x360b84(0x1be)])];
                _0x28c401[_0x360b84('\x30\x78\x32\x31\x34')](_0x3894a1);
            }
        }
        if (!_0x3b7982 && _0x20bba8 === _0xebab09) {
            if (config[_0x360b84(0x1c9)] === '\x74\x72\x75\x65') {
                const _0x2992aa = (config[_0x360b84(0x265)] || _0x360b84(0x1d6))[_0x360b84(0x28f)]('\x2c'),
                    _0x322811 = _0x2992aa[Math[_0x360b84(0x24d)](Math[_0x360b84('\x30\x78\x31\x30\x34')]() * _0x2992aa[_0x360b84('\x30\x78\x31\x62\x65')])];
                _0x28c401[_0x360b84(0x214)](_0x322811);
            }
        }
        if (!_0x130447 && config[_0x360b84(0x161)] === _0x360b84('\x30\x78\x31\x62\x64')) return;
        if (!_0x130447 && _0x133d3b && config[_0x360b84(0x161)] === _0x360b84(0x23e)) return;
        if (!_0x130447 && !_0x133d3b && config[_0x360b84(0x161)] === _0x360b84('\x30\x78\x32\x33\x32')) return;
        const _0x46f0fc = require('\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64'),
            _0x3745cc = _0x504e2e ? _0x51dbb9[_0x360b84(0x17c)](0x1)['\x74\x72\x69\x6d']()[_0x360b84(0x28f)]('\x20')[0x0]['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']() : ![];
        if (_0x504e2e) {
            const _0x3024de = _0x46f0fc['\x63\x6f\x6d\x6d\x61\x6e\x64\x73'][_0x360b84(0x12f)](_0x446471 => _0x446471['\x70\x61\x74\x74\x65\x72\x6e'] === _0x3745cc) || _0x46f0fc[_0x360b84(0x12e)][_0x360b84('\x30\x78\x31\x32\x66')](_0x55aecb => _0x55aecb[_0x360b84('\x30\x78\x32\x30\x37')] && _0x55aecb[_0x360b84('\x30\x78\x32\x30\x37')][_0x360b84(0x11a)](_0x3745cc));
            if (_0x3024de) {
                if (_0x3024de[_0x360b84('\x30\x78\x32\x31\x34')]) _0x34efde['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x4a5585, {
                    '\x72\x65\x61\x63\x74': {
                        '\x74\x65\x78\x74': _0x3024de[_0x360b84(0x214)],
                        '\x6b\x65\x79': _0x5d90b1['\x6b\x65\x79']
                    }
                });
                try {
                    _0x3024de[_0x360b84(0x10f)](_0x34efde, _0x5d90b1, _0x28c401, {
                        '\x66\x72\x6f\x6d': _0x4a5585,
                        '\x71\x75\x6f\x74\x65\x64': _0x2f9534,
                        '\x62\x6f\x64\x79': _0x51dbb9,
                        '\x69\x73\x43\x6d\x64': _0x504e2e,
                        '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x2a0ea4,
                        '\x61\x72\x67\x73': _0x58baa7,
                        '\x71': _0x1a5497,
                        '\x69\x73\x47\x72\x6f\x75\x70': _0x133d3b,
                        '\x73\x65\x6e\x64\x65\x72': _0x104244,
                        '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x20bba8,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x33348c,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xebab09,
                        '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x10e82e,
                        '\x69\x73\x4d\x65': _0x4634ff,
                        '\x69\x73\x4f\x77\x6e\x65\x72': _0x130447,
                        '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x529f18,
                        '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x53b51d,
                        '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x1ba224,
                        '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2b8433,
                        '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x4b3f7b,
                        '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x3947be,
                        '\x72\x65\x70\x6c\x79': _0x570ada
                    });
                } catch (_0x48e3ac) {
                    console['\x65\x72\x72\x6f\x72'](_0x360b84(0x235) + _0x48e3ac);
                }
            }
        }
        _0x46f0fc[_0x360b84(0x12e)][_0x360b84('\x30\x78\x31\x38\x35')](async _0x559f61 => {
            const _0x369084 = _0x360b84;
            if (_0x51dbb9 && _0x559f61['\x6f\x6e'] === '\x62\x6f\x64\x79') _0x559f61['\x66\x75\x6e\x63\x74\x69\x6f\x6e'](_0x34efde, _0x5d90b1, _0x28c401, {
                '\x66\x72\x6f\x6d': _0x4a5585,
                '\x6c': l,
                '\x71\x75\x6f\x74\x65\x64': _0x2f9534,
                '\x62\x6f\x64\x79': _0x51dbb9,
                '\x69\x73\x43\x6d\x64': _0x504e2e,
                '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x559f61,
                '\x61\x72\x67\x73': _0x58baa7,
                '\x71': _0x1a5497,
                '\x69\x73\x47\x72\x6f\x75\x70': _0x133d3b,
                '\x73\x65\x6e\x64\x65\x72': _0x104244,
                '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x20bba8,
                '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x33348c,
                '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xebab09,
                '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x10e82e,
                '\x69\x73\x4d\x65': _0x4634ff,
                '\x69\x73\x4f\x77\x6e\x65\x72': _0x130447,
                '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x529f18,
                '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x53b51d,
                '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x1ba224,
                '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2b8433,
                '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x4b3f7b,
                '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x3947be,
                '\x72\x65\x70\x6c\x79': _0x570ada
            });
            else {
                if (_0x5d90b1['\x71'] && _0x559f61['\x6f\x6e'] === _0x369084('\x30\x78\x32\x30\x31')) _0x559f61[_0x369084(0x10f)](_0x34efde, _0x5d90b1, _0x28c401, {
                    '\x66\x72\x6f\x6d': _0x4a5585,
                    '\x6c': l,
                    '\x71\x75\x6f\x74\x65\x64': _0x2f9534,
                    '\x62\x6f\x64\x79': _0x51dbb9,
                    '\x69\x73\x43\x6d\x64': _0x504e2e,
                    '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x559f61,
                    '\x61\x72\x67\x73': _0x58baa7,
                    '\x71': _0x1a5497,
                    '\x69\x73\x47\x72\x6f\x75\x70': _0x133d3b,
                    '\x73\x65\x6e\x64\x65\x72': _0x104244,
                    '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x20bba8,
                    '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x33348c,
                    '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xebab09,
                    '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x10e82e,
                    '\x69\x73\x4d\x65': _0x4634ff,
                    '\x69\x73\x4f\x77\x6e\x65\x72': _0x130447,
                    '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x529f18,
                    '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x53b51d,
                    '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x1ba224,
                    '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2b8433,
                    '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x4b3f7b,
                    '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x3947be,
                    '\x72\x65\x70\x6c\x79': _0x570ada
                });
                else {
                    if ((_0x559f61['\x6f\x6e'] === _0x369084('\x30\x78\x31\x37\x64') || _0x559f61['\x6f\x6e'] === _0x369084('\x30\x78\x32\x31\x38')) && _0x5d90b1[_0x369084(0x1af)] === _0x369084('\x30\x78\x31\x64\x32')) _0x559f61['\x66\x75\x6e\x63\x74\x69\x6f\x6e'](_0x34efde, _0x5d90b1, _0x28c401, {
                        '\x66\x72\x6f\x6d': _0x4a5585,
                        '\x6c': l,
                        '\x71\x75\x6f\x74\x65\x64': _0x2f9534,
                        '\x62\x6f\x64\x79': _0x51dbb9,
                        '\x69\x73\x43\x6d\x64': _0x504e2e,
                        '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x559f61,
                        '\x61\x72\x67\x73': _0x58baa7,
                        '\x71': _0x1a5497,
                        '\x69\x73\x47\x72\x6f\x75\x70': _0x133d3b,
                        '\x73\x65\x6e\x64\x65\x72': _0x104244,
                        '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x20bba8,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x33348c,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xebab09,
                        '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x10e82e,
                        '\x69\x73\x4d\x65': _0x4634ff,
                        '\x69\x73\x4f\x77\x6e\x65\x72': _0x130447,
                        '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x529f18,
                        '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x53b51d,
                        '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x1ba224,
                        '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2b8433,
                        '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x4b3f7b,
                        '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x3947be,
                        '\x72\x65\x70\x6c\x79': _0x570ada
                    });
                    else _0x559f61['\x6f\x6e'] === _0x369084(0x254) && _0x5d90b1['\x74\x79\x70\x65'] === _0x369084(0x219) && _0x559f61[_0x369084(0x10f)](_0x34efde, _0x5d90b1, _0x28c401, {
                        '\x66\x72\x6f\x6d': _0x4a5585,
                        '\x6c': l,
                        '\x71\x75\x6f\x74\x65\x64': _0x2f9534,
                        '\x62\x6f\x64\x79': _0x51dbb9,
                        '\x69\x73\x43\x6d\x64': _0x504e2e,
                        '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x559f61,
                        '\x61\x72\x67\x73': _0x58baa7,
                        '\x71': _0x1a5497,
                        '\x69\x73\x47\x72\x6f\x75\x70': _0x133d3b,
                        '\x73\x65\x6e\x64\x65\x72': _0x104244,
                        '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x20bba8,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x33348c,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xebab09,
                        '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x10e82e,
                        '\x69\x73\x4d\x65': _0x4634ff,
                        '\x69\x73\x4f\x77\x6e\x65\x72': _0x130447,
                        '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x529f18,
                        '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x53b51d,
                        '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x1ba224,
                        '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2b8433,
                        '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x4b3f7b,
                        '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x3947be,
                        '\x72\x65\x70\x6c\x79': _0x570ada
                    });
                }
            }
        });
    });
}
app['\x67\x65\x74']('\x2f', (_0x2b2678, _0x43eede) => {
    const _0x35be88 = _0x2cf529;
    _0x43eede[_0x35be88('\x30\x78\x31\x35\x38')](_0x35be88(0x113));
}), app[_0x2cf529('\x30\x78\x31\x62\x39')](port, () => console[_0x2cf529('\x30\x78\x31\x31\x64')](_0x2cf529(0x1f8) + port)), setTimeout(() => {
    connectToWA();
}, 0xfa0);