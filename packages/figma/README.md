# Package Figma

Ce package centralise les fichiers de tokens Figma et les scripts permettant de récupérer les données depuis l’API Figma afin de les réutiliser ou de les uploader dans le dépôt.

## Récupérer les données Figma

Le script `fetch` télécharge le fichier Figma en JSON. Avec `--variables`, il récupère aussi les variables locales du fichier.

Le script charge automatiquement le fichier `.env` à la racine du dépôt. Configurez-y `FIGMA_API_KEY` (ou `FIGMA_ACCESS_TOKEN`) et, si souhaité, `FIGMA_FILE_KEY`. Les variables déjà présentes dans le shell sont prioritaires.

```sh
pnpm figma:fetch
```

Une clé peut également être fournie directement :

```sh
pnpm figma:fetch --file-key <figma-file-key> --variables
```

Les réponses de l’API sont enregistrées en JSON dans `packages/figma/.cache/`, un dossier ignoré par Git. `--output-dir <path>` permet de choisir un autre dossier.

Les fichiers de tokens Figma conservés dans `src/` constituent les données de référence du package. Le fetch récupère les données de l’API ; il ne les modifie pas et ne les publie pas automatiquement dans Figma.
