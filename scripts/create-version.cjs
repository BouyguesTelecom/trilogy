// @ts-check
const fs = require('fs')
const packageJSON = require('../package.json')

const [major, minor] = packageJSON.version.split('.')

const combinedVersion = `${major}${minor}`

fs.writeFile('packages/react/version.json', JSON.stringify({ VERSION: combinedVersion }, null, 4), () => {
  console.log('Version has been created.')
})
