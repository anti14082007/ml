module.exports.config = {
    name: "banner",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie convert từ Goat",
    description: "Tạo banner",
    commandCategory: "tạo ảnh thông tin",
    usages: "<facebook> | <zalo> | <phone> | <momo> | <title> | <subtitle> | <titlefacebook> | <info> | [<link ảnh/reply>",
    cooldowns: 5,
    envConfig: {
        APIKEY: "ntkhangGoatBot" 
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { APIKEY } = global.configModule.banner,
      axios = global.nodemodule.axios,
      fs = global.nodemodule['fs-extra'],
      { threadID, messageID } = event,
      content = args.join(' ').trim().replace(/\s+/g, ' ').replace(/(\s+\|)/g, '|').replace(/\|\s+/g, '|').split('|'),
      apikey = APIKEY,
      facebook = content[0],
      zalo = content[1],
      phone = content[2],
      momo = content[3],
      title = content[4],
      subtitle = content[5],
      titlefacebook = content[6],
      info = content[7],
      avatarurl = event.messageReply.attachments[0].url || content[8]
    if (!avatarurl) {
      return api.sendMessage('Vui lòng reply hoặc nhập link hình ảnh', event.threadID)
    }
    const params = {
      facebook: facebook,
      zalo: zalo,
      phone: phone,
      momo: momo,
      title: title,
      subtitle: subtitle,
      titlefacebook: titlefacebook,
      info: info,
      avatarurl: avatarurl,
      apikey: apikey,
    }
    for (let i in params)
      if (!params[i]) {
        return api.sendMessage(SyntaxError(), event.threadID)
      }
    api.sendMessage('Đang khởi tạo hình ảnh, vui lòng chờ trong giây lát', event.threadID)
    const pathsave = __dirname + ('/cache/banner' + event.threadID + '.jpg')
    let imageBuffer
    try {
      const response = await axios.get('https://goatbot.tk/taoanhdep/banner1', {
        params: params,
        responseType: 'arraybuffer',
      })
      imageBuffer = response.data
    } catch (error) {
      console.log(error)
      const err = JSON.parse(error.response.data.toString())
      return api.sendMessage('Đã xảy ra lỗi ' + err.error + ' ' + err.message, event.threadID)
    }
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer, 'utf-8'))
    api.sendMessage({body: 'Banner <3', attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID)
  }  