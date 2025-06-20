const { zokou } = require("../framework/zokou");
const axios = require("axios");

// context ya channel yako
const contextInfo = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363288304618280@newsletter",
    newsletterName: "NEXUS TECH",
    serverMessageId: 1
  }
};

// =============== FLUX AI ===============
zokou({
  nomCom: "fluxai",
  aliases: ["flux", "imagine"],
  categorie: "ai",
  reaction: "📸"
}, async (jid, sock, { ms, repondre, arg }) => {
  const q = arg.join(" ");
  if (!q) return repondre("❌ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚙𝚛𝚘𝚖𝚙𝚝 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎.");
  await repondre("> *𝕘𝕖𝕟𝕖𝕣𝕒𝕥𝕚𝕟𝕘 𝕥𝕙𝕖 𝕚𝕞𝕒𝕘𝕖 𝕗𝕠𝕣 𝕪𝕠𝕦 𝕓𝕠𝕤𝕤📸*");

  try {
    const url = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(q)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });

    await sock.sendMessage(jid, {
      image: Buffer.from(data, "binary"),
      caption: `🌲 *𝛨𝛯𝑅𝛯 𝛪𝑆 𝑊𝛨𝛥𝑇 𝑌𝛩𝑈 𝛥𝑆𝛫𝛯𝐷 𝐹𝛩𝑅 𝐵𝛩𝑆𝑆 𝛭𝛥𝐷𝛯 𝐵𝑌 𝛲𝛫𝐷𝑅𝛪𝐿𝐿𝛯𝑅* 😎\n📸 𝚁𝙴𝙰𝙳𝚈 : *${q}*`,
      contextInfo
    }, { quoted: ms });

  } catch (error) {
    console.error("FluxAI Error:", error);
    repondre(`❌ Error: ${error.message || "Failed to generate image."}`);
  }
});

// =============== STABLE DIFFUSION ===============
zokou({
  nomCom: "stablediffusion",
  aliases: ["sdiffusion", "imagine2"],
  categorie: "ai",
  reaction: "🟢"
}, async (jid, sock, { ms, repondre, arg }) => {
  const q = arg.join(" ");
  if (!q) return repondre("❌ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚙𝚛𝚘𝚖𝚙𝚝 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎.");
  await repondre("> *𝕘𝕖𝕟𝕖𝕣𝕒𝕥𝕚𝕟𝕘 𝕥𝕙𝕖 𝕚𝕞𝕒𝕘𝕖 𝕗𝕠𝕣 𝕪𝕠𝕦 𝕓𝕠𝕤𝕤📸*");

  try {
    const url = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(q)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });

    await sock.sendMessage(jid, {
      image: Buffer.from(data, "binary"),
      caption: `🌲 *𝛨𝛯𝑅𝛯 𝛪𝑆 𝑊𝛨𝛥𝑇 𝑌𝛩𝑈 𝛥𝑆𝛫𝛯𝐷 𝐹𝛩𝑅 𝐵𝛩𝑆𝑆 𝛭𝛥𝐷𝛯 𝐵𝑌 𝛲𝛫𝐷𝑅𝛪𝐿𝐿𝛯𝑅 😎\n✨ 𝚁𝙴𝙰𝙳𝚈: *${q}*`,
      contextInfo
    }, { quoted: ms });

  } catch (error) {
    console.error("StableDiffusion Error:", error);
    repondre(`❌ Error: ${error.message || "Failed to generate image."}`);
  }
});

// =============== STABILITY AI ===============
zokou({
  nomCom: "stabilityai",
  aliases: ["stability", "imagine3"],
  categorie: "ai",
  reaction: "📸"
}, async (jid, sock, { ms, repondre, arg }) => {
  const q = arg.join(" ");
  if (!q) return repondre("❌ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚙𝚛𝚘𝚖𝚙𝚝 𝚏𝚘𝚛 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎.");
  await repondre(">𝕘𝕖𝕟𝕖𝕣𝕒𝕥𝕚𝕟𝕘 𝕥𝕙𝕖 𝕚𝕞𝕒𝕘𝕖 𝕗𝕠𝕣 𝕪𝕠𝕦 𝕓𝕠𝕤𝕤 * 📸*");

  try {
    const url = `https://api.siputzx.my.id/api/ai/stabilityai?prompt=${encodeURIComponent(q)}`;
    const { data } = await axios.get(url, { responseType: "arraybuffer" });

    await sock.sendMessage(jid, {
      image: Buffer.from(data, "binary"),
      caption: `🌲 *𝛨𝛯𝑅𝛯 𝛪𝑆 𝑊𝛨𝛥𝑇 𝑌𝛩𝑈 𝛥𝑆𝛫𝛯𝐷 𝐹𝛩𝑅 𝐵𝛩𝑆𝑆 𝛭𝛥𝐷𝛯 𝐵𝑌 𝛲𝛫𝐷𝑅𝛪𝐿𝐿𝛯𝑅 😎\n📸 : *${q}𝐬𝐚𝐯𝐞 𝐢𝐭*`,
      contextInfo
    }, { quoted: ms });

  } catch (error) {
    console.error("StabilityAI Error:", error);
    repondre(`❌ Error: ${error.message || "Failed to generate image."}`);
  }
});
