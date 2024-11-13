const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ZoyaTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923414047467";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_31_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkRmc0UVo5Y1BoWmRzWWx3TGlCbWtLQUltYTM3b3N3L3lpd0I0c2NTNFN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkN3I0N3VCSFFIQ3QyTXVLbVgtREpRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhhNzdjMTA1LTU0OTUtNGZiYy05NzM4LTQ1MDNmMWI4YTcwNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxMzQsXG4gICAgICAyNDAsXG4gICAgICAxNzgsXG4gICAgICA1MCxcbiAgICAgIDIyOSxcbiAgICAgIDEwMixcbiAgICAgIDE2LFxuICAgICAgMTcyLFxuICAgICAgMTkwLFxuICAgICAgMjUsXG4gICAgICAxMTQsXG4gICAgICAyMTksXG4gICAgICA0MCxcbiAgICAgIDE0NCxcbiAgICAgIDQ5LFxuICAgICAgMjEwLFxuICAgICAgMzUsXG4gICAgICAxNTksXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgOTYsXG4gICAgICA0NixcbiAgICAgIDEwNSxcbiAgICAgIDE1NixcbiAgICAgIDEyNCxcbiAgICAgIDkwLFxuICAgICAgMTY1LFxuICAgICAgMTQ2LFxuICAgICAgOTQsXG4gICAgICA0LFxuICAgICAgMjAxLFxuICAgICAgMTcwLFxuICAgICAgMjQwLFxuICAgICAgMTU1LFxuICAgICAgMyxcbiAgICAgIDcyLFxuICAgICAgMjE1LFxuICAgICAgMjksXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTjdRRU1LUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE0MDQ3NDY3OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTAxNTY4MjE0MTgwMTM6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJLK0kwREVQcmowYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmK0g5SHVlYVJWVzNOSHNJSnQ2c2ZHaFpKTVRRRjhpcnN3M1hZekJxOWpzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitENy9KR0pmVjZLNVNwNlNqQXVBeUZkSXV5bzB1NnJjS0M1cytXaVhJaGtmWGpRdG9FT3l1aGYySVBORHNta2JvTHRKMzlmUGFoWlFraWdoQVBSV0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxxQjNNY3BtQ2lJYUlLWDBWa0JXdEt2QWkrWlN1QmpmMEh1ZldIT21kWVVOenRkMW1xYUVPWVNUOEdPMnFiTmIxck1MMzVuK2Z4QnYvd2twSWlKb0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQxNDA0NzQ2NzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0OTAzMDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQaVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpVS5qc29uIjogIntcImtleURhdGFcIjpcImtTQ0xkNWNMUjlGc1ZTMHY4U0FLR1BhV09DbnIwN1dhNjh2RHBBSDBLakE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODM0NTQ0OTgxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxNDkwMjU1NzEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ZoYA-MD",
  ownername:process.env.OWNER_NAME|| "Zoiii-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "zoiii"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
