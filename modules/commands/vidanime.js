module.exports.config = {
  name: "vidanime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nhhoang",
  description: "xem video vidanime có sẵn trong lệnh",
  commandCategory: "video vidanime",
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
"https://i.imgur.com/RIXOHK7.mp4", "https://i.imgur.com/jabz5y7.mp4", "https://i.imgur.com/zO36tlx.mp4", "https://i.imgur.com/4uqnBwh.mp4", "https://i.imgur.com/yxPxoTk.mp4", "https://i.imgur.com/YfAz1yj.mp4", "https://i.imgur.com/Mnb8ZlI.mp4", "https://i.imgur.com/QQRY3Zk.mp4", "https://i.imgur.com/lMuLeWw.mp4", "https://i.imgur.com/v6YW8jw.mp4", "https://i.imgur.com/1vaSksV.mp4", "https://i.imgur.com/estt2We.mp4", "https://i.imgur.com/gK8y8ek.mp4", "https://i.imgur.com/cb7tqm3.mp4", "https://i.imgur.com/Y5hRZBr.mp4", "https://i.imgur.com/zu06v3Z.mp4", "https://i.imgur.com/poyx7nP.mp4", "https://i.imgur.com/zUu50mm.mp4", "https://i.imgur.com/lixK2bU.mp4", "https://i.imgur.com/DNOixJY.mp4", "https://i.imgur.com/yqPoTTD.mp4", "https://i.imgur.com/u3vpBd3.mp4", "https://i.imgur.com/AggzTzb.mp4", "https://i.imgur.com/ubGTMQB.mp4", "https://i.imgur.com/QefA0Gs.mp4", "https://i.imgur.com/hZCz36h.mp4", "https://i.imgur.com/0vm2yEs.mp4", "https://i.imgur.com/AzBPWbx.mp4",
    "https://i.imgur.com/RSsJj2x.mp4",
    "https://i.imgur.com/iOowufh.mp4",
    "https://i.imgur.com/nPA9V37.mp4",
    "https://i.imgur.com/siUW6Jp.mp4",
    "https://i.imgur.com/cQ1K2de.mp4",
    "https://i.imgur.com/PUBA5eQ.mp4",
    "https://i.imgur.com/tVfyVUv.mp4",
    "https://i.imgur.com/mLzOqdS.mp4",
    "https://i.imgur.com/xtL0vKD.mp4",
    "https://i.imgur.com/UCoTcno.mp4",
    "https://i.imgur.com/2lbhYSO.mp4",
    "https://i.imgur.com/MrWplR5.mp4",
    "https://i.imgur.com/j3dnjCC.mp4",
    "https://i.imgur.com/swiKfQx.mp4",
    "https://i.imgur.com/LrFENbH.mp4",
    "https://i.imgur.com/hGPQ2Ca.mp4",
    "https://i.imgur.com/fEuXl5E.mp4",
    "https://i.imgur.com/XKaKER4.mp4",
    "https://i.imgur.com/qlBs6QU.mp4",
    "https://i.imgur.com/HY2F8gg.mp4",
    "https://i.imgur.com/mOJDMhl.mp4",
    "https://i.imgur.com/UBKXK8v.mp4",
    "https://i.imgur.com/FL5giD8.mp4",
    "https://i.imgur.com/5NWlDqI.mp4",
    "https://i.imgur.com/cl6nDtR.mp4",
    "https://i.imgur.com/19mT2vt.mp4",
    "https://i.imgur.com/hytj4xV.mp4",
    "https://i.imgur.com/Jj4tvMG.mp4",
    "https://i.imgur.com/OvmKQf0.mp4",
    "https://i.imgur.com/hlyKPEN.mp4",
    "https://i.imgur.com/lwfD4r5.mp4",
    "https://i.imgur.com/6Mw45Wc.mp4",
    "https://i.imgur.com/z7FFRdT.mp4",
    "https://i.imgur.com/g1BuXTQ.mp4",
    "https://i.imgur.com/lqyaRGL.mp4",
    "https://i.imgur.com/vaXJcOa.mp4",
    "https://i.imgur.com/xwotzq5.mp4",
    "https://i.imgur.com/h0866u4.mp4",
    "https://i.imgur.com/8prFZex.mp4",
    "https://i.imgur.com/7FOMBAE.mp4",
    "https://i.imgur.com/ehm6LFq.mp4",
    ];
  var callback = () => api.sendMessage({body:`=== [ 𝗩𝗱𝗮𝗻𝗶𝗺𝗲𝗰𝗵𝗶𝗹𝗹 ] ===\n━━━━━━━━━━━━━━━━━━\n\n[🎭] 𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞𝐜𝐡𝐢𝐥𝐥 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲\n[🍃] 𝐒𝐨̂́ 𝐕𝐢𝐝𝐞𝐨: 63\n ━━━━━━━━━━━━━━━━━━\n\n[🐣] Đ𝐮̛𝐨̛̣𝐜 𝐮𝐩𝐝𝐚𝐭𝐞 𝐛𝐨̛̉𝐢 𝐧𝐡𝐡𝐨𝐚𝐧𝐠 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
 