const apii = 'https://apikanekiflop.tk/gaisexy'
module.exports.config = {
	name: "duyet",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "DungUwU",
	description: "duyệt box dùng bot xD",
	commandCategory: "quản trị viên",
    cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
}

module.exports.run = async ({ event,Threads, api, args }) => {
	const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
      const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
	let msg = "";
    let idBox = (args[0]) ? args[0] : threadID;
    if (args[0] == "list") {
    	msg = "𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐂𝐚́𝐜 𝐁𝐨𝐱 Đ𝐚̃ Đ𝐮̛𝐨̛̣𝐜 𝐀𝐝𝐦𝐢𝐧 𝐏𝐡𝐞̂ 𝐃𝐮𝐲𝐞̣̂𝐭";
    	let count = 0;
    	for (e of data) {
    		msg += `\n${count+=1}. ${e}`;
    	}
    	api.sendMessage(msg, threadID, messageID);
    }
    else if (args[0] == "del") {
    	idBox = (args[1]) ? args[1] : event.threadID;
    	if (isNaN(parseInt(idBox))) return api.sendMessage("=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\nKhông phải một con số", threadID, messageID);
    	if (!data.includes(idBox)) return api.sendMessage("=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\nBox không được duyệt từ trước!", threadID, messageID);
    	api.sendMessage("=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\nBox đã bị gỡ khỏi danh sách được phép dùng bot", threadID, () => {
    		data.splice(data.indexOf(idBox), 1);
    		fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    	}, messageID)
    }
    else if (isNaN(parseInt(idBox))) api.sendMessage("=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\nID bạn nhập không hợp lệ", threadID, messageID);
    else if (data.includes(idBox)) api.sendMessage(`=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\nID ${idBox} đã được phê duyệt từ trước!`, threadID, messageID);
   	else api.sendMessage("=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\n» BOX ĐÃ ĐƯỢC ADMIN BOT PHÊ DUYỆT!\n» sử dụng bot vui vẻ", idBox, (error, info) => {
   		api.changeNickname(` [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "" : global.config.BOTNAME}`, idBox, global.data.botID);
      api.sendMessage(`=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\n» Kết nối thành công\n ${prefix}help để xem các lệnh hiện có`, idBox);
   		if (error) return api.sendMessage("=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\nĐã có lỗi xảy ra, đảm bảo rằng id bạn nhập hợp lệ và bot đang ở trong box!", threadID, messageID);
   		else {
   			data.push(idBox);
   			fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
   			api.sendMessage(`=== [ 𝗗𝗨𝗬𝗘̣̂𝗧 𝗕𝗢𝗫 ] ===\n━━━━━━━━━━━━━━━━━━\n» Phê duyệt thành công box:\n${idBox}`, threadID, messageID);
   		}
   	});
}