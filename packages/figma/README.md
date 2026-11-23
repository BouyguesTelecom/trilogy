# Package Figma

Ce package centralise les fichiers de tokens Figma et les scripts permettant de récupérer les données depuis l’API Figma afin de les réutiliser ou de les uploader dans le dépôt.

## Récupérer les données Figma

Le script `fetch` télécharge le fichier Figma et ses variables locales. Il reconstruit les fichiers JSON attendus par le package : `primitives.json`, `Light.tokens.json`, `Dark.tokens.json`, `Dimensions.tokens.json` et `Fonts.tokens.json`.

Le script charge automatiquement le fichier `.env` à la racine du dépôt. Configurez-y `FIGMA_API_KEY` (ou `FIGMA_ACCESS_TOKEN`) et, si souhaité, `FIGMA_FILE_KEY`. Les variables déjà présentes dans le shell sont prioritaires.

```sh
npm run figma:fetch
```

Une clé peut également être fournie directement :

```sh
npm run figma:fetch -- --file-key <figma-file-key>
```

Les réponses brutes de l’API sont conservées dans `packages/figma/.cache/`, un dossier ignoré par Git. `--output-dir <path>` permet de choisir un autre dossier pour ces réponses. Ajoutez `--no-variables` pour ne télécharger que le document Figma.

Les fichiers de tokens dans `src/` sont remplacés par les collections récupérées depuis Figma. Le script ne publie pas de changements vers Figma.

## Générer les enums de couleurs React

Après avoir récupéré les tokens, générez les enums `BackgroundColors`, `BorderColors` et `TextColors` utilisés par le package React :

```sh
pnpm generate:interfaces
```

Le script lit `variables/Light.tokens.json` et met à jour les fichiers correspondants dans `packages/react/src/interfaces/`.
