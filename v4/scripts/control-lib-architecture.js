// @ts-check
import fs from 'fs'
import { exec } from 'child_process'

const directoryPath = 'lib'
const subfoldersToCheck = ['assets', 'components', 'context', 'events', 'helpers', 'objects', 'services', 'styles']

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('🛑 Error reading directory:', err)
    return
  }

  const subfolders = files.filter((file) => fs.statSync(`${directoryPath}/${file}`).isDirectory())
  const hasAllSubfolders = subfoldersToCheck.every((subfolder) => subfolders.includes(subfolder))

  if (!hasAllSubfolders) {
    console.error(`🛑 The Trilogy library does not have all expected subfolders: ${subfoldersToCheck.join(', ')}.`)
    exec('exit 1', (error, _stdout, stderr) => {
      if (error) {
        console.error(`🛑 Error stopping pipeline: ${error}`)
        process.exit(1)
      }
      console.log(`Pipeline stopped with error: ${stderr}`)
    })
    return
  }

  console.log(`✅ The Trilogy library has all expected subfolders: ${subfoldersToCheck.join(', ')}.`)
})
