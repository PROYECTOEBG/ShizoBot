let handler = async (m, { conn, participants, groupMetadata }) => {
  
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './media/Menu.jpg'
    const { isBanned, Swagat, detect, sSwagat, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `┏━━━━━━━━━━━━━━━━━━
┣┅⟣✦ 𝗛𝗼𝗹𝗮👋, 𝗦𝗼𝘆 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗠𝗗
┣┅⟣✦ 𝗘𝗻 𝗴𝗿𝘂𝗽𝗼𝘀:  *@${m.sender.split("@")[0]}*

┣┅⟣✦ 𝗢𝘄𝗻𝗲𝗿: 𝙹𝙴𝙵𝙵𝙾
┣┅⟣✦ 𝗙𝗲𝗰𝗵𝗮: ${date}
┣┅⟣✦ 𝗟𝗶𝗻𝗱𝗼 𝗱𝗶𝗮 𝗽𝗮𝗿𝗮 𝘁𝗶
┗━━━━━━━━━━━━━━━━━━┛

`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['menu', 'comandos', 'allmenu'] 
handler.group = true

export default handler
