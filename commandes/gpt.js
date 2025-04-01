const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({
  nomCom: "gpt3",
  reaction: "🤖", // Changed to robot emoji
  categorie: "AI",
  aliases: ["ai", "ask"],
  desc: "ChatGPT-powered AI assistant",
  fromMe: false // Accessible to everyone
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  // Check if question is provided
  if (!arg || arg.length === 0) {
    return repondre(`Please ask a question.\nExample: *${s.PREFIXE}gpt3 What is WhatsApp?*`);
  }

  const question = arg.join(' ');
  
  try {
    // Show typing indicator
    await zk.sendPresenceUpdate('composing', dest);

    const response = await axios.get(`https://test-api-apms.onrender.com/api/chatgpt`, {
      params: {
        text: question,
        name: s.BOT || "Queen-M",
        prompt: "You are a helpful WhatsApp bot AI assistant",
        apikey: "BrunoSobrino"
      },
      timeout: 30000 // 30 seconds timeout
    });

    if (response.data?.resultado) {
      // Format the response with bot branding
      const formattedResponse = `*${s.BOT || '✧LUCKY_MD✧'} AI Response:*\n\n${response.data.resultado}\n\n_Powered by ChatGPT_`;
      
      return repondre(formattedResponse);
    } else {
      return repondre("❌ No response from AI service");
    }
  } catch (error) {
    console.error('GPT Error:', error);
    
    // Different error messages based on error type
    if (error.response) {
      return repondre(`⚠️ API Error: ${error.response.status}`);
    } else if (error.request) {
      return repondre("⌛ The AI is taking too long to respond. Please try again later.");
    } else {
      return repondre("❌ An error occurred while processing your request.");
    }
  }
});
