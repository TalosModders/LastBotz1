const infobot = (status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberr,runtime, kyun) => {
return `โโ๐พ *B O T  S T A T I S T I C*

๐จโ๐ป Owner : @${ownerNumberr.split('@')[0]}
โช๏ธ Lib  : Baileys
โธ๏ธ Type  : NodeJs
โ๏ธ Mode : ${status}
โ๏ธ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
๐จโ๐จโ๐งโ๐ฆ Group Chat : ${giid.length}
๐ฅ Personal Chat : ${totalchat.length - giid.length}
๐จโ๐ฉโ๐งโ๐ง Total Chat : ${totalchat.length}
๐ Speed : ${latensii.toFixed(4)} Seconds
๐พ Runtime : ${kyun(runtime)}


โโ๐ฒ *P H O N E  S T A T I S T I C*

๐ช WhatsApp V : ${wa_version}
๐ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
๐ MCC : ${mcc}
๐ MNC : ${mnc}
๐ OS Version : ${os_version}
๐ซ Merk Hp : ${device_manufacturer}
๐ฎ Versi Hp : ${device_model}


โโ๐จโ๐ป *C O N N E C T  W I T H  M E*

โ YouTube : https://youtube.com/c/talosmodders
โ Github : https://github.com/talosmodders
โ Instagram : https://instagram.com/rangga_kinantan17
โ Tiktok : https://tiktok.com/@talosmodders
โ Telegram : https://t.me/talosmodders
โ Telegram CH : https://t.me/talosch
โ Telegram GP : https://t.me/talosgp
โ WhatsApp : https://wa.me/qr/SUNC3IUN5XCQI1
`}

exports.infobot = infobot
 