---
name: trilogy-migration-v4-v5
description: "Guide les migrations de projets Trilogy Design System de la v4 vers la v5. Axé sur la migration des classes HTML/CSS et React (className) de couleur de texte (v4 is-* vers v5 text-*) et de couleur de fond (v4 has-background-* vers v5 bg-*)."
metadata:
  author: bouygues-telecom
  version: "1.0.0"
---

<!-- @todo Ajouter ici les migrations v4 → v5 au fur et à mesure de leur validation. -->

# Trilogy Design System — Migration v4 → v5

Ce skill accompagne l'audit et la migration des projets consommateurs de Trilogy v4 vers v5. Pour l'instant, il est concentré sur la migration des classes HTML et React (`className`) modifiant la couleur du texte et la couleur d'arrière-plan.

## Quand utiliser ce skill

- Migrer un projet consommateur de Trilogy Design System de la v4 vers la v5.
- Auditer le code HTML/CSS et React (`className`) à la recherche des anciennes classes modifiant la couleur de texte ou la couleur de fond.
- Remplacer les classes v4 (`is-*` et `has-background-*`) par les classes utilitaires v5 (`text-*` et `bg-*`).

## Règles de migration

- [html-text-color.md](rules/html/html-text-color.md) — Remplacement des classes HTML/CSS de couleur de texte v4 (`is-*`) par les classes v5 (`text-*`).
- [react-text-color.md](rules/react/react-text-color.md) — Remplacement des classes de couleur de texte v4 (`is-*`) dans la prop `className` des composants React (JSX/TSX).
- [html-background-color.md](rules/html/html-background-color.md) — Remplacement des classes HTML/CSS de couleur de fond v4 (`has-background-*`) par les classes v5 (`bg-*`).
- [react-background-color.md](rules/react/react-background-color.md) — Remplacement des classes de couleur de fond v4 (`has-background-*`) dans la prop `className` des composants React (JSX/TSX).
- [migration-process.md](rules/migration-process.md) — Méthode générale, précautions et vérifications après migration.

## Agents

- [migrator.md](agents/migrator.md) — Agent qui applique les changements documentés dans le code consommateur.
- [reviewer.md](agents/reviewer.md) — Agent qui audite une migration et produit un rapport sans modifier le code par défaut.

## Principes

- Appliquer uniquement les règles validées : les classes de couleur de texte (`text-*`) et de couleur de fond (`bg-*`) documentées dans `rules/html/` et `rules/react/`.
- Ne pas inventer de changements non documentés : si un cas n'est pas couvert, demander confirmation.
- Prêter attention au contexte : ne cibler que les classes servant de helpers de style (texte, fond), sans modifier à l'aveugle les classes d'état ou de variantes propres aux composants.
- Ajouter chaque nouvelle migration validée dans une règle dédiée et la relier depuis cette page.
