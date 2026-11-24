---
name: trilogy-code-connect
description: "Workflow Code Connect Trilogy conservé pour plus tard : à utiliser uniquement après réactivation explicite par l'utilisateur."
disable-model-invocation: true
---

# Code Connect Trilogy

**Suspendu pour le moment.** Ne lance aucune opération Code Connect et ne modifie pas de fichier ou mapping associé, sauf demande ultérieure réactivant explicitement Code Connect. Les instructions ci-dessous sont conservées pour cette éventuelle reprise.

## Objectif

Pour chaque composant Figma et React synchronisé, crée ou actualise son fichier Code Connect `<nom>.figma.ts` dans le dossier du composant afin que Figma puisse afficher un exemple React fidèle. La création du fichier seule ne rend pas le code visible : valide et publie le mapping lorsque les prérequis sont satisfaits. Signale distinctement les étapes préparées, validées et publiées.

## Procédure

1. Charge et suis le guide officiel Figma `figma-code-connect` avant toute opération de mapping. Réutilise la session Figma en cours et identifie le fichier, le composant principal ou component set et son `node-id` réellement vérifiés ; ne devine jamais l'identifiant. Vérifie les droits, le plan et la publication du composant dans une bibliothèque Figma selon les prérequis du guide. Si un prérequis manque, indique le blocage et ne prétends pas que l'exemple est visible.
2. Inspecte les mappings existants, les propriétés réelles du composant Figma et le composant React, ses types, exports et usages. Réutilise ou actualise le mapping pertinent plutôt que créer un doublon ; préserve les mappings sans rapport. Ne modifie pas les comportements fonctionnels. Pour un composant composé, analyse les sous-composants publiés et les slots pertinents, et crée leurs mappings distincts lorsqu'ils possèdent une correspondance vérifiée et utile.
3. Crée un fichier `.figma.ts` parserless par composant, pas de `.figma.tsx` ni `figma.connect()` : utilise `import figma from "figma"`, `figma.selectedInstance` et un export par défaut avec `id` unique et une propriété `example` produite par un template littéral balisé `figma.code`. Ajoute l'URL Figma avec `node-id` dans l'en-tête selon la convention du dépôt. Les imports émis dans l'exemple doivent correspondre aux exports publics réels du package, sans inventer de chemin ni de prop.
4. Associe les propriétés Figma à l'API React uniquement lorsqu'une correspondance réelle existe : texte, booléens, variantes, enfants et slots avec les méthodes Code Connect appropriées. Prends en compte les valeurs par défaut et la distinction entre variantes UI et surcharges helpers. Les propriétés fonctionnelles absentes de Figma ne sont pas inventées ; signale toute propriété Figma non représentable. Pour chaque enum, couvre toutes les valeurs correspondantes et signale les valeurs sans équivalent. Pour les compositions, résous dynamiquement les instances et slots conformément au guide au lieu d'écrire des enfants fictifs.
5. Vérifie que `figma.config.json` inclut chaque fichier généré, sans supprimer les mappings existants ni élargir inutilement la portée. Valide la syntaxe, les imports, les noms et valeurs des propriétés, l'exemple produit et l'absence de doublons ; utilise les commandes et options de validation ou preview disponibles avec la version installée de Code Connect. Ne considère pas un contrôle TypeScript qui exclut les fichiers `.figma.ts` comme une validation de ces fichiers.
6. Publie le mapping avec le mécanisme officiel adapté au format et à la version installée, puis vérifie la connexion ou l'exemple dans Figma. Ne publie que les fichiers ou nœuds demandés et évite de réécrire ou supprimer d'autres mappings. Utilise les identifiants/jetons depuis l'environnement de manière sûre ; ne les affiche ni ne les écris dans les fichiers ou arguments visibles. Si l'accès, la publication ou la vérification est impossible, conserve le fichier préparé et signale précisément l'étape manquante.
