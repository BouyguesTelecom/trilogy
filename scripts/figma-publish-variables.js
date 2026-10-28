import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

async function updateFigmaVariable() {
  const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN
  const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY

  try {
    const response = await axios.post(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables`,
      {
        // Liste des modifications à apporter
        variableChanges: [
          {
            action: "UPDATE",
            id: "VariableID:12345", // L'ID de la variable Figma à modifier
            name: "color/primary/500",
          },
        ],
        variableValueChanges: [
          {
            variableId: "VariableID:12345",
            modeId: "ModeID:111", // L'ID du mode (ex: Light Mode)
            value: {
              r: 0.1, // Figma attend des valeurs de couleur normalisées entre 0 et 1
              g: 0.3,
              b: 0.9,
              a: 1,
            },
          },
        ],
      },
      {
        headers: { "X-Figma-Token": FIGMA_API_TOKEN },
      }
    )
    console.log("Variable mise à jour dans Figma avec succès !")
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour :",
      error.response?.data || error.message
    )
  }
}

updateFigmaVariable()
