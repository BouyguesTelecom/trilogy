---
name: react-to-figma
description: "Analyser un composant React et React Native Trilogy existant puis créer ou synchroniser son design Figma, ses variantes UI et ses variables sémantiques à partir du code. À utiliser pour code vers Figma."
argument-hint: "Nom ou chemin du composant React et fichier Figma cible"
---

# React vers Figma

## Source de vérité et limites

Le code existant est la source de vérité pour le comportement et l'apparence de cette opération. La destination est Figma. Par défaut, inspecte le code en lecture seule : ne modifie ni composants, ni tests, ni styles, ni tokens du dépôt sans demande explicite. Une demande de synchronisation Figma n'autorise pas une réécriture du code. Ne crée ni ne modifie de Code Connect automatiquement ; c'est une opération distincte.

## Procédure

1. Identifie le composant demandé et inspecte ses types, exports, implémentations web et natives, sous-composants, styles SCSS, helpers, thème, tokens, stories et tests. Si plusieurs composants correspondent, demande lequel choisir. Charge et applique [l'architecture Trilogy](../trilogy-component-architecture/SKILL.md), [les styles et tokens Trilogy](../trilogy-styles-tokens/SKILL.md) et [les tests des composants Trilogy](../trilogy-component-tests/SKILL.md). Dans cette direction, applique le mode lecture seule des vérifications.
2. Construis un relevé vérifiable des props UI effectivement prises en charge : noms, valeurs, défauts, variantes, états visuels, parties composables et correspondances de tokens. Distingue les props purement fonctionnelles et ne les expose pas comme propriétés UI Figma. Une prop ayant un effet visuel et fonctionnel peut avoir une représentation visuelle, sans reproduire sa logique fonctionnelle.
3. Vérifie les différences entre web et natif, entre code et Figma, et entre les tokens et leurs valeurs. Si le comportement ou l'apparence divergent et que la cible n'est pas claire, présente les différences et demande quelle plateforme ou variante sert de référence, au lieu de choisir silencieusement. Ne crée pas d'état ou de correspondance non vérifié.
4. Charge les guides Figma officiels pertinents pour le code vers design : `figma-generate-design`, `figma-use` et `figma-generate-library` pour les composants réutilisables. Pour la première capture d'une page web, suis les consignes applicables de capture et de construction ; une capture n'est pas un composant éditable et ne remplace pas la création du composant. Pour mettre à jour un design déjà capturé, modifie le design existant ; ne le recrée pas inutilement.
5. Charge et applique [design-figma](../design-figma/SKILL.md) pour identifier le fichier cible, ouvrir ou réutiliser la session Figma, rechercher le composant et les variables sémantiques, créer ou modifier le composant sur sa page dédiée, et valider les liaisons et le rendu. Figma suit le code pour cette tâche ; ne modifie pas une bibliothèque externe ni un contrat existant de façon destructive sans accord. Si une variable sémantique ou une police manque, suis la règle de blocage de ce skill.
6. Vérifie que le composant Figma correspond au code choisi : propriétés UI, valeurs et défauts, structure, variantes, variables sémantiques, modes et rendu. Signale les écarts ou impossibilités, ainsi que les tests exécutés et les limites ; ne présente pas une capture ou une étape bloquée comme une synchronisation complète.
