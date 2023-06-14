module.exports.config = {
  name: "vidgaitiktok",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "nhhoang",
  description: "xem video vidgaitiktok",
  commandCategory: "video ",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/727GpEH.mp4", "https://i.imgur.com/DyR0LG1.mp4", "https://i.imgur.com/tMTug7j.mp4", "https://i.imgur.com/YidxDbU.mp4", "https://i.imgur.com/SQoV4df.mp4", "https://i.imgur.com/kgekWfF.mp4", "https://i.imgur.com/WTRzUS0.mp4", "https://i.imgur.com/05XTetT.mp4", "https://i.imgur.com/cDXr23S.mp4", "https://i.imgur.com/qjIeXci.mp4", "https://i.imgur.com/RGYHHRM.mp4", "https://i.imgur.com/SM1pZJL.mp4", "https://i.imgur.com/eV9IB9N.mp4", "https://i.imgur.com/O0Om6rI.mp4", "https://i.imgur.com/XTnaZaJ.mp4", "https://i.imgur.com/s6OFk18.mp4", "https://i.imgur.com/tIhc3bx.mp4", "https://i.imgur.com/EVt1b5m.mp4", "https://i.imgur.com/WErF3uV.mp4", "https://i.imgur.com/K9TbsGc.mp4", "https://i.imgur.com/Xv6CKpC.mp4", "https://i.imgur.com/mwKOgd8.mp4",
    ];
  var callback = () => api.sendMessage({body:`=== [ 𝗩𝗶𝗱𝗴𝗮𝗶𝘁𝗶𝗸𝘁𝗼𝗸 ] ===\n━━━━━━━━━━━━━━━━━━\n\n[🎭] 𝐕𝐢𝐝𝐞𝐨 𝐕𝐢𝐝𝐠𝐚𝐢𝐭𝐢𝐤𝐭𝐨𝐤 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n[🍃] 𝐒𝐨̂́ 𝐕𝐢𝐝𝐞𝐨: 22\n ━━━━━━━━━━━━━━━━━━\n\n[🐣] Đ𝐮̛𝐨̛̣𝐜 𝐮𝐩𝐝𝐚𝐭𝐞 𝐛𝐨̛̉𝐢 𝐧𝐡𝐡𝐨𝐚𝐧𝐠 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 