---
name: trilogy-component-architecture
description: "Analyser ou appliquer l'architecture des composants Trilogy, leur composition atomique et la séparation des props UI et fonctionnelles pour les workflows Figma vers React et React vers Figma."
---

# Architecture et composition Trilogy

## Analyse et compatibilité

1. Lis les instructions du dépôt, puis inspecte le composant, ses sous-composants, types, exports, stories, tests, rendus web et natifs et les composants comparables. Préserve les modifications locales. Pour un composant existant, relève le contrat réel, les valeurs par défaut et les différences entre plateformes ; ne déduis pas le comportement uniquement des noms.
2. Distingue les props UI, leurs valeurs et états visuels des props fonctionnelles : événements, navigation, logique métier, sémantique, accessibilité, refs et enfants. Ne supprime, ne réinitialise ni ne modifie les comportements ou props fonctionnels existants ; ne propage pas aveuglément les props UI au DOM ou à React Native.
3. En cas de conflit entre design et code, garde la source de vérité propre à la direction demandée : Figma vérifié pour la synchronisation Figma vers React, code existant pour React vers Figma. Signale les divergences et demande une décision avant toute modification incompatible, fonctionnelle ou non demandée. Ne supprime pas automatiquement une prop UI existante absente du design, sauf autorisation explicite.
4. Ne modifie pas directement un fichier marqué généré sans avoir identifié son générateur et sa source ; si aucun générateur exploitable n'existe, signale le blocage et demande comment procéder.

## Structure et composition

- Respecte l'organisation observée dans `packages/react/src/components` : dossier par composant, `index.ts` et exports publics cohérents, `<nom>.types.ts`, `*UiProps` séparées de `*Props`, rendus `<nom>.web.tsx` et `<nom>.native.tsx`, styles `<nom>.styles.native.ts` avec `makeStyle` pour les styles dépendant du thème, et `<nom>.stories.tsx`. Utilise les conventions réelles du projet et des imports sans suffixe de plateforme dans les barrels ; n'ajoute pas de fichiers vides.
- Privilégie la composition atomique quand un composant possède des zones sémantiques distinctes, réutilisables ou dont le contenu et l'ordre doivent être personnalisables. Comme pour `Alert`, un conteneur peut accepter des `children` et exposer `AlertContent`, `AlertTitle` et `AlertDescription`. Une `Box` avec en-tête et pied de page peut justifier `BoxHeader` et `BoxFooter` acceptant des enfants.
- Ne découpe pas artificiellement les composants autonomes simples comme `Title`, `Text` ou `Button`. N'ajoute que les parties justifiées par la demande ; respecte l'API explicitement demandée et les contrats existants. Utilise des dossiers, exports, refs et règles d'accessibilité adaptés aux sous-composants publics, sans inventer des comportements fonctionnels. Pour un nouveau composant, reprends les conventions fonctionnelles des composants comparables uniquement si nécessaire.
- Lorsqu'un composant sert de modèle, adapte les noms propres au nouveau composant : types, interfaces, enums, variables, classes, fichiers, exports et références Figma. Pour `Text` inspiré de `Title`, préfère `TextUiProps` et `TextLevel` à `TitleUiProps` et `TitleLevel`. Conserve les noms des props et leurs valeurs si les mêmes props sont demandées, réutilise les types génériques et ne renomme pas les symboles du composant source.
