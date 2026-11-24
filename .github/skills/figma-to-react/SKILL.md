---
name: figma-to-react
description: "Synchroniser un composant Figma vérifié avec ses implémentations React web et React Native Trilogy, en préservant les comportements fonctionnels et en ajoutant des tests unitaires. À utiliser pour traduire Figma en composant React ou mettre à jour son UI."
argument-hint: "Lien du composant Figma, props UI et règles de compatibilité"
---

# Figma vers React et React Native

## Préparation et contrat

1. Lis les instructions du dépôt, les composants comparables, leurs types, exports, styles, tokens, stories et tests. Identifie et préserve les changements locaux existants. Utilise le fichier et le composant Figma explicitement fournis ; si la tâche suit `design-figma`, réutilise sa session et son résultat vérifié.
2. Utilise Figma MCP et charge le guide officiel `figma-design-to-code` avant l'inspection détaillée du design. Récupère le contexte et une capture du composant, puis inspecte les détails nécessaires : propriétés UI effectivement exposées, valeurs et défauts, variantes, variables sémantiques, modes et liaisons. Si le contexte est insuffisant, complète l'inspection ; ne fabrique pas un design de référence.
3. Sépare les props UI réellement présentes dans Figma des props fonctionnelles. Ne supprime, ne réinitialise et ne modifie pas les comportements et props fonctionnels existants : événements, navigation, sémantique, accessibilité, refs, enfants et logique métier. Ne propage pas aveuglément les props UI au DOM ou à React Native.
4. Pour un nouveau composant, reprends les conventions fonctionnelles des composants comparables uniquement si nécessaire. Si une décision fonctionnelle ou une modification de contrat existant est indispensable, demande confirmation. Ne supprime pas automatiquement une prop UI existante absente du design : demande comment préserver la compatibilité, sauf autorisation explicite de suppression.
5. Ne modifie pas directement un fichier marqué généré sans avoir identifié son générateur et sa source. Si aucun générateur exploitable n'existe, signale le blocage et demande comment le traiter ; ne prétends pas avoir généré un fichier manuellement.

## Compétences partagées obligatoires

Charge et applique intégralement :

- [Architecture et composition Trilogy](../trilogy-component-architecture/SKILL.md) pour le contrat, la structure, la composition et la compatibilité.
- [Styles et tokens Trilogy](../trilogy-styles-tokens/SKILL.md) pour les styles propres au composant, styles natifs et variables sémantiques.
- [Tests des composants Trilogy](../trilogy-component-tests/SKILL.md) pour les tests, stories et vérifications des composants créés ou modifiés.

Code Connect est suspendu : ne crée, ne modifie, ne publie et ne consulte pas de mapping ni de fichier `.figma.ts` dans ce workflow, sauf si l'utilisateur réactive explicitement Code Connect dans une demande ultérieure. Les tests et la synchronisation UI restent obligatoires.

Résume les fichiers modifiés, les props UI réellement prises en charge, les comportements fonctionnels préservés, la composition retenue, les vérifications et les limites. Ne présente pas une étape bloquée comme terminée.
