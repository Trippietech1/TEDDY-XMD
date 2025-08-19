/*
Project Name : MALVIN XD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https://github.com/XdKing2/MALVIN-XD
Support      : wa.me/263714757857
*/

const config = require('../settings');
const { malvin } = require('../malvin');
const { runtime } = require('../lib/functions');

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

malvin({
    pattern: "support",
    alias: ["follow", "links"],
    desc: "Display support and follow links",
    category: "main",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const uptimeFormatted = runtime(process.uptime());

        const message = `
╭─『 *TEDDY-XMD SUPPORT* 』─
│ 👤 *Developer* : Mr Lucky 🇺🇬
│ ⚙️ *Mode*      : ${config.MODE}
│ ⏱️ *Uptime*    : ${uptimeFormatted}
│ 💠 *Prefix*    : ${config.PREFIX}
│ 🔖 *Version*   : ${config.version}
│ 🕰️ *Time*      : ${currentTime}
╰─────────────

📢 *Follow & Support TEDDY-XMD* ${readMore}

🔔 *Official WhatsApp Channel*
https://whatsapp.com/channel/0029Vb6NveDBPzjPa4vIRt3n

🎬 *YouTube Channel*
https://youtube.com/@teddytechhub

👨‍💻 *Developer Contact*
wa.me/254799963583?text=Hi%20Teddy,%20I%20need%20support!

>💡Powered By Teddy Tech Hub
        `.trim();

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/a0mj3n.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363421104812135@newsletter',
                    newsletterName: '🪀『 TEDDY-XMD 』🪀',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Support Cmd Error:", e);
        reply(`⚠️ An error occurred:\n${e.message}`);
    }
});
