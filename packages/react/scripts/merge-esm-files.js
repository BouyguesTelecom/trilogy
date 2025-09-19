const fs = require('fs')
const path = require('path')

function renameAndCopyFilesRecursively(srcDirectory, destDirectory) {
  fs.readdir(srcDirectory, { withFileTypes: true }, (err, files) => {
    if (err) {
      return console.error('Erreur de lecture du répertoire: ' + err)
    }

    files.forEach((file) => {
      const oldPath = path.join(srcDirectory, file.name)
      const newDir = path.join(destDirectory, path.dirname(file.name))

      if (file.name.endsWith('.json') || file.name.startsWith('jest') || file.name.endsWith('.md')) {
        return
      }

      if (file.isDirectory()) {
        fs.mkdir(newDir, { recursive: true }, (mkdirErr) => {
          if (mkdirErr) console.error('Erreur de création du dossier: ' + mkdirErr)
          renameAndCopyFilesRecursively(oldPath, path.join(destDirectory, file.name))
        })
      } else {
        let newName = file.name

        if (file.name.endsWith('.js')) {
          newName = file.name.replace('.js', '.mjs')
        } else if (file.name.endsWith('.d.ts')) {
          newName = file.name.replace('.d.ts', '.d.mts')
        }

        const newPath = path.join(newDir, newName)

        fs.rename(oldPath, newPath, (renameErr) => {
          if (renameErr) {
            fs.copyFile(oldPath, newPath, (copyErr) => {
              if (copyErr) console.error('Erreur de copie du fichier: ' + copyErr)
            })
          }
        })
      }
    })
  })
}

const srcDir = path.join(__dirname, '../lib-esm')
const destDir = path.join(__dirname, '../lib')
renameAndCopyFilesRecursively(srcDir, destDir)
