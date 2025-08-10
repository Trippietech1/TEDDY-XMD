const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "TEDDY~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdFaDAyUkd4YnROdTJ0cXAvQm50QnlMQ3hsZm1LbFdZaTg3eU45Q0FtST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGFFQXFjNlpUWCtxUlcvYUdmNHdvNHN5ekNxcW1VdkVFM3c3cjdlaVZodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SzBhZ2pXRGFnc25wcGJlZTVua3lCaTgzdjhyQ2JSRFl2Q2RhcnJKNkhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4Y2lFNlRQM09YOWVtbXcrNXNJS2g2azNSWDJyVnVQUlJQamR5NUdUN0djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGYVBoai9LRm1ZYkpZb2hQanpieTVyWnd3c2tOUFdwcnNJYTlpKy9pRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk5aGNhckpCYk81cDVqVWtyOVZnK2gxVUYxT2xObDVtNDQ4L3k0SFEzaGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dmRkp0UUJXNmpxdmFrMTN5Y09vMldKdWlCTzFVaDNrUEY2R3ZNZFoxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGtEMFRoUE9PYy8vb2NuNVJMVEJBNEJCbERyU2ZPOVFMQnB0bk1BaURXRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRQSEhSRytCZDA4MlVubGdiRVhxN2lyeml3UTd5L0ZJckZZbFRsM3p0UG5qWG9aV1hiYmJNRWplMHRHMEdpVG1iZC9TSFQyVHU4bnJyY1lBSjNhbGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJGTENSWm5OSWNRMXJEc2NWMHR4R3IrazlxL3pET2RHR3N2dFI5WFMzbmZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJXMk0xWUc2NyIsIm1lIjp7ImlkIjoiMjU0NzY5Nzg3NTE1OjQ3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRlZGR5LiIsImxpZCI6IjU0OTYzMjgzNzE4Mjc5OjQ3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWVnK0xJQ0VMK1Y0Y1FHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVjk1RUw0MmJNRXZoRDl2UkhFNjU4cWpJNFBUejBZTkdmdE1mVm5BdjZsaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWVFUbW81K3NnYndkVmJVNVBlTVJMakc2Sm9taktiNUZqU1p4aXJHaGVuWSsvSG5wTi9ZSkVJSDZmSExmWkdwcHJxWDVFcTRHVjhUVVp1ZVFPRnh6QlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkRpTldJc3NMVHYrQ3RCMzA0QVA4UythSCtxcTRFM1d6R1Y0aGwyaW9YZEFVTE5CbjJHcVVXTUloNWFDbFVrZmYzVzAyTDJaci96dGpCbkdIRE16VWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY5Nzg3NTE1OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZmZVJDK05tekJMNFEvYjBSeE91ZktveU9EMDg5R0RSbjdUSDFad0wrcFoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVVFBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDgxMTA4NCwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TEDDY-XMD🤍*",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/a0mj3n.jpg",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "TEDDY-XMD",
STICKER_NAME: process.env.STICKER_NAME || "TEDDY-XMD",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "true",
OWNER_NUMBER: process.env.OWNER_NUMBER || "254799963583",
OWNER_NAME: process.env.OWNER_NAME || "𝚃𝚎𝚍𝚍𝚢",
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝚃𝙴𝙳𝙳𝚈-𝚇𝙼𝙳*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/a0mj3n.jpg",
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *TEDDY-XMD*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "public",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "254799963583",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
ANTICALL: process.env.ANTICALL || "true"
};
