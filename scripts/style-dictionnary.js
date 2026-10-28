import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import StyleDictionary from "style-dictionary"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// --- OPTIONNEL : Transform personnalisé natif ---
// Si Figma exporte des nombres bruts pour les dimensions (ex: spacing: 16),
// ce transform ajoute automatiquement "px" aux tokens de type dimension ou spacing.
StyleDictionary.registerTransform({
  name: "size/px-native",
  type: "value",
  // On applique le transform uniquement aux tokens de type dimension ou spacing
  matcher: (token) =>
    token.type === "dimension" ||
    token.type === "spacing" ||
    token.path.includes("spacing"),
  transformer: (token) => {
    const val = token.value
    if (typeof val === "number") {
      return `${val}px`
    }
    return val
  },
})

// --- OPTIONNEL : Récupération automatique depuis l'API Figma ---
/*
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function fetchFigmaTokens() {
  const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
  const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
  
  if (!FIGMA_API_TOKEN || !FIGMA_FILE_KEY) {
    console.log("Variables d'environnement Figma manquantes. Utilisation du fichier local.");
    return;
  }

  try {
    console.log("Téléchargement des variables Figma...");
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
      { headers: { 'X-Figma-Token': FIGMA_API_TOKEN } }
    );
    
    fs.writeFileSync(
      path.join(__dirname, '../tokens/figma-tokens.json'),
      JSON.stringify(response.data, null, 2)
    );
    console.log("Tokens Figma téléchargés avec succès !");
  } catch (error) {
    console.error("Erreur lors de la récupération des tokens Figma :", error.message);
  }
}
*/

async function runBuild() {
  // Décommentez la ligne ci-dessous si vous utilisez l'API Figma
  // await fetchFigmaTokens();

  console.log("Début de la compilation des tokens avec Style Dictionary...")

  // En Style Dictionary v4, on instancie directement la classe avec "new"
  const sd = new StyleDictionary({
    // Source : le chemin vers vos fichiers JSON Figma
    source: ["tokens/**/*.json"],

    platforms: {
      // Plateforme 1 : Génération de variables CSS
      css: {
        // On utilise le transformGroup natif 'css'
        transformGroup: "css",
        // On ajoute notre transform personnalisé 'size/px-native' à la liste des transforms appliqués
        transforms: ["name/kebab", "color/css", "size/px-native"],
        buildPath: "src/styles/",
        files: [
          {
            destination: "variables.css",
            format: "css/variables",
            options: {
              outputReferences: true, // Conserve les alias/références entre tokens
            },
          },
        ],
      },

      // Plateforme 2 : Génération d'un fichier JS/ES6 pour vos composants React (ex: CSS-in-JS, Tailwind, inline styles)
      js: {
        transformGroup: "js",
        buildPath: "src/styles/",
        files: [
          {
            destination: "tokens.js",
            format: "javascript/es6",
          },
        ],
      },

      // Plateforme 3 : Optionnel - Fichier de déclaration TypeScript
      ts: {
        transformGroup: "js",
        buildPath: "src/styles/",
        files: [
          {
            destination: "tokens.d.ts",
            format: "typescript/es6-declarations",
          },
        ],
      },
    },
  })

  try {
    // En Style Dictionary v4, les méthodes de build sont asynchrones
    await sd.cleanAllPlatforms()
    await sd.buildAllPlatforms()
    console.log("\n✔ Compilation terminée avec succès !")
  } catch (err) {
    console.error("\n❌ Échec de la compilation :", err)
  }
}

runBuild()
