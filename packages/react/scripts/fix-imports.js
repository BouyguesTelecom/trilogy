const fs = require('fs')
const path = require('path')
const glob = require('glob')

// Fonction pour corriger les imports dans les fichiers CommonJS
function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  // Corriger les require("./Button") en require("./Button.js")
  content = content.replace(/require\("\.\/([^"]+)"\)/g, (match, moduleName) => {
    // Ne pas ajouter .js si c'est déjà présent ou si c'est un module externe
    if (moduleName.includes('.') || moduleName.startsWith('@')) {
      return match
    }

    // Cas spécial pour les dossiers (comme "./button" -> "./button/index.js")
    const fullPath = path.join(path.dirname(filePath), moduleName)
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
      return `require("./${moduleName}/index.js")`
    }

    return `require("./${moduleName}.js")`
  })

  fs.writeFileSync(filePath, content)
  console.log(`Fixed imports in: ${filePath}`)
}

// Trouver tous les fichiers .js dans lib/
const jsFiles = glob.sync('lib/**/*.js', { cwd: __dirname + '/..' })

jsFiles.forEach((file) => {
  const fullPath = path.join(__dirname, '..', file)
  fixImports(fullPath)
})

console.log('Import fixing completed!')
