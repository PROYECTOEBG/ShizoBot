
import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd,DD [de] MMMM [del] YYYY│[Hora:]HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `

*¡Hola! ⭐ @${m.sender.split("@")[0]}*

\`\`\`${horarioFecha}\`\`\`

╭━━━━━━⋆★⋆━━━━━━─
┃ ⏤͟͟͞͞𝗖𝗥𝗘𝗔𝗗𝗢𝗥 𝗘𝗕𝗚:
┃ 👤 Wa.me/593993370003
┃ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ 
╰━━━━━━⋆★⋆━━━━━━─

╭━━━[ 𝗚𝗨𝗜𝗔 𝗘𝗕𝗚 💻 ]━⬣
┃ 𝐴𝑞𝑢𝑖́ 𝑡𝑖𝑒𝑛𝑒𝑠 𝑢𝑛 𝑎𝑚𝑝𝑙𝑖𝑜 𝑢𝑠𝑜  
┃ 𝑑𝑒 𝐸𝑙𝑖𝑡𝑒 𝐵𝑜𝑡 𝐺𝑙𝑜𝑏𝑎𝑙.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊➺ 🔐 .𝘶𝘯𝘦𝘵𝘦 𝘦𝘯𝘭𝘢𝘤𝘦
┊➺ 🔐 .𝘣𝘤𝘴𝘶𝘣𝘣𝘰𝘵 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤𝘨𝘤 𝘵𝘦𝘹𝘵𝘰
┊➺ 🔐 .𝘣𝘤 𝘵𝘦𝘹𝘵𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙

 `.trim()
 
const img = ['https://telegra.ph/file/ab5b12cfc135095198fe4.png',
'https://telegra.ph/file/ab5b12cfc135095198fe4.png',
'https://telegra.ph/file/ab5b12cfc135095198fe4.png']
await conn.sendMessage(m.chat, { image { url: img.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
