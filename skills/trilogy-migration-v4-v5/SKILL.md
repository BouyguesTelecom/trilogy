---
name: trilogy-migration-v4-v5
description: "Guide les migrations de projets Trilogy Design System de la v4 vers la v5. À utiliser pour auditer ou migrer du code React, HTML ou CSS existant, notamment les composants Alert et leurs statuts/couleurs."
metadata:
  author: bouygues-telecom
  version: "1.0.0"
---

<!-- @todo Ajouter ici les migrations v4 → v5 au fur et à mesure de leur validation. -->

# Trilogy Design System — Migration v4 → v5

Ce skill accompagne l'audit et la migration des projets consommateurs de Trilogy v4 vers v5. Il sépare les règles de migration par surface (React, HTML/CSS) et les agents de migration/audit.

## Quand utiliser ce skill

- Migrer un projet consommateur de Trilogy Design System de la v4 vers la v5.
- Auditer le code à la recherche d'API, de valeurs ou de classes impactées par la montée de version.
- Appliquer uniquement les changements documentés dans les règles ci-dessous.

## Règles de migration

- [react-alert.md](rules/react-alert.md) — Prop `status` d'Alert, remplacement de `StatusState` par `StatusVariant` (défini dans `interfaces/status`) et changement `info` → `information`.
- [react-button.md](rules/react-button.md) — Variante visuelle de Button, renommage `ButtonVariant.CONVERSION` → `ButtonVariant.ACCENT` et classe `is-conversion` → `is-accent`.
- [react-background-color.md](rules/react-background-color.md) — Couleurs de fond de Hero, Section, Box, BoxHeader et Icon : remplacement ciblé de `TrilogyColor` par `BackgroundColor`, y compris les chaînes legacy.
- [react-icon-color.md](rules/react-icon-color.md) — Renommage ciblé des anciennes valeurs `IconColor` pour la couleur du glyphe d'Icon.
- [html-alert.md](rules/html-alert.md) — Migration des classes de couleur HTML/CSS d'Alert de `is-*` vers `has-background-*`.
- [html-box.md](rules/html-box.md) — Pour Box, BoxContent et BoxFooter, conserver le préfixe v4 `has-background-` et migrer les anciens noms de couleur (notamment `info` → `information`).
- [html-hero.md](rules/html-hero.md) — Sur la racine Hero uniquement, conserver `has-background-` et migrer les anciens noms de couleur, notamment `info` → `information`.
- [html-section.md](rules/html-section.md) — Sur la racine Section uniquement, conserver `has-background-` et migrer `info` → `information`.
- [html-icon.md](rules/html-icon.md) — Pour le fond de la racine Icon uniquement, conserver `has-background-` et migrer les anciens noms de couleur, notamment `info` → `information`.
- [migration-process.md](rules/migration-process.md) — Méthode générale, précautions et vérifications après migration.

## Agents

- [migrator.md](agents/migrator.md) — Agent qui applique les changements v4 → v5 documentés dans le code consommateur.
- [reviewer.md](agents/reviewer.md) — Agent qui audite une migration et produit un rapport sans modifier le code par défaut.

## Principes

- Ne pas inventer de changements : si une API v5 n'est pas documentée ici, vérifier les exports et les sources de référence ou demander confirmation.
- Ne pas généraliser un changement d'`Alert` à d'autres composants sans preuve.
- Distinguer React, HTML/CSS et React Native, car leurs API peuvent différer.
- Ajouter chaque nouveau changement confirmé dans une règle dédiée et relier cette règle depuis cette page.
