 module.exports.config = {
	name: "sinhnhatad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "Đếm ngược tới ngày sinh nhật của admin",
	commandCategory: "Công Cụ",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("December 19, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(` ☸𝙎ắ𝙥 𝙩ớ𝙞 𝙨𝙞𝙣𝙝 𝙣𝙝ậ𝙩 𝙘ủ𝙖 𝑽𝒐̃ 𝑵𝒉𝒂̣̂𝒕 𝑯𝒐𝒂̀𝒏𝒈  𝙧ù𝙞 đó〠 ❤️❤️❤️ \n» ${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝘁𝗶𝗲̂́𝗻𝗴 ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 «`, event.threadID, event.messageID);
}