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
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './media/Menu.jpg'
    let text = `
Hola *@${m.sender.split("@")[0]}*
\`\`\`${horarioFecha}\`\`\`

╭──𝗠𝗘𝗡𝗨 𝗜𝗠𝗚──────
│ 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘰𝘴 ...
│ 𝘪𝘮𝘢́𝘨𝘦𝘯𝘦𝘴  𝘥𝘦
│ 𝘌𝘭𝘪𝘵𝘦𝘉𝘰𝘵𝘎𝘭𝘰𝘣𝘢𝘭.
╰────────────────

» 𝗟𝗢𝗚𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘭𝘰𝘨𝘰 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘭𝘰𝘨𝘰2 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘭𝘰𝘨𝘰3 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘭𝘰𝘨𝘰4 𝙩𝙚𝙭𝙩𝙤
╰━━━━━⋆★⋆━━━━━⬣

» 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘤𝘰𝘳𝘢𝘻𝘰𝘯 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘯𝘢𝘷𝘪𝘥𝘢𝘥 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘤𝘢𝘳𝘵𝘢 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘤𝘶𝘮𝘱𝘭𝘦 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘭𝘰𝘣𝘰 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘱𝘢𝘳𝘦𝘫𝘢 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰2 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘳𝘦𝘵𝘳𝘰3 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘯𝘶𝘣𝘦 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘥𝘣𝘻 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘷𝘪𝘥𝘳𝘪𝘰 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘷𝘪𝘥𝘳𝘪𝘰2 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘤𝘢𝘭𝘭𝘦 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘤𝘢𝘭𝘭𝘦2 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪2 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪3 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪4 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪5 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪6 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪7 𝙩𝙚𝙭𝙩𝙤
│°🔥⃟⃪ᩙᤢᮬ⃪⃫᮪✑ .𝘪𝘮𝘨𝘨𝘳𝘢𝘧𝘪𝘵𝘪8 𝙩𝙚𝙭𝙩𝙤
╰━━━━━⋆★⋆━━━━━⬣
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['men', 'groupinfo', 'infogp'] 
handler.group = true

export default handler
