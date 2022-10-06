let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Indosat : 089516947204
⫹⫺ Via Dana : 089516947204
⫹⫺ Via Saweria :
⫹⫺ https://chat.whatsapp.com/GOdtUKyFn04ECxqqOrFf4G

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
