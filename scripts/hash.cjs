// @ts-check
const fs = require('fs')
const crypto = require('crypto')
const packageJSON = require('../package.json')

const hash = crypto.createHash('sha256').update(packageJSON.version).digest('hex')

fs.writeFile('lib/hash.json', JSON.stringify({ HASH: hash.slice(0, 7) }, null, 4), () => {
  console.log('Hash has been created.')
})
