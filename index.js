const { WAConnection } = require('@adiwajshing/baileys')

;(async () => {
  const conn = new WAConnection()
  await conn.connect()
  console.log('CONECTED')
  
  const contacts = Object.keys(conn.contacts).map(jid => jid.slice(0, jid.indexOf('@')))
  const status = contacts.find(el => el === 'status')
  console.dir({ status })
})()