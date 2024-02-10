let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './media/Menu.jpg'
    const { isBanned, Swagat, detect, sSwagat, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
¡Hola! 👋🏻 @⁨Jeffo⁩
 ```sábado, 10 de febrero de 2024```

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
