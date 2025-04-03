import util from 'util';

handler.before = async function (m, { conn }) {
    if (m.messageStubType === 68 && m.messageStubParameters) {
        let chat = m.key.remoteJid;
        let message = await conn.loadMessage(chat, m.messageStubParameters[0]);
        
        if (message) {
            let sender = message.pushName || message.participant || "Unknown";
            let content = getContentFromMessage(message.message);
            
            if (content) {
                let text = `*Anti-Delete Detected!*\n👤 *Sender:* @${message.participant.split('@')[0]}\n📩 *Recovered Message:* ${content}`;
                await conn.sendMessage(chat, { text, mentions: [message.participant] });
            }
        }
    }
};

function getContentFromMessage(msg) {
    if (!msg) return null;
    if (msg.conversation) return msg.conversation;
    if (msg.extendedTextMessage) return msg.extendedTextMessage.text;
    if (msg.imageMessage) return "[Image]";
    if (msg.videoMessage) return "[Video]";
    if (msg.documentMessage) return "[Document]";
    if (msg.stickerMessage) return "[Sticker]";
    if (msg.audioMessage) return "[Voice Note]";
    return "[Unsupported Message Type]";
}

export default handler;
