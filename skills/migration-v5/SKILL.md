---
name: migration-v5
description: "Use when migrating a Trilogy Design System project from v4 to v5, including consumer import paths, TrilogyProviderStyled theme props, and CSS loading."
metadata:
  author: bouygues-telecom
  version: "1.0.0"
---

# Trilogy Design System v5 Migration

Ce skill coordonne les migrations d’un projet Trilogy Design System de la v4 vers la v5. Il est conçu pour accueillir une règle dédiée par changement de version.

## Règles de migration

- [provider-styled.md](rules/provider-styled.md) : remplacement de la prop `theme` et déplacement du CSS vers le `<head>`.
- [path-remapping-v5.md](rules/path-remapping-v5.md) : migration des imports consommateurs `@trilogy-ds/react` (`objects`/`facets`/`atoms` supprimés, interfaces sous `interfaces`, fonctions utilitaires sous `helpers`).

Ajouter chaque futur changement dans un fichier séparé sous `rules/`, puis le référencer ici. Une règle doit décrire le contexte, les transformations avant/après, les exceptions et les contrôles associés.

## Agents

- [discovery.md](agents/discovery.md) : identifie le type de projet, les points d'entrée et les règles applicables, sans modifier les fichiers.
- [remapper.md](agents/remapper.md) : applique les transformations v4 vers v5 en conservant le style d'import du consommateur.
- [reviewer.md](agents/reviewer.md) : vérifie les imports, API et validations restantes après migration, en lecture seule.

Ordre recommandé : `discovery` -> `remapper` -> `reviewer`.

## Déroulement obligatoire

1. Chercher les occurrences de la fonctionnalité concernée et lire les fichiers appelés par ces occurrences.
2. Identifier le type de projet avant toute modification :
   - lire les mots-clés et scripts de `package.json` ;
   - repérer les configurations (`vite.config.*`, `webpack.config.*`, `tsconfig.json`, etc.) ;
   - inspecter `src/` et les fichiers d’entrée.
3. Charger la règle correspondante dans `rules/` et appliquer uniquement les transformations pertinentes.
4. Traiter séparément chaque application lorsque le dépôt en contient plusieurs.
5. Vérifier les anciennes API, imports ou configurations qui doivent disparaître.
6. Lancer le typecheck, le lint ou le test de build disponible pour le projet migré.

## Principes

- Ne pas modifier les versions de dépendances ni les composants sans nécessité pour la migration.
- Ne pas déduire une transformation lorsqu’une règle signale un cas ambigu : le signaler et demander une décision.
- Respecter les conventions et le point d’entrée propres au framework détecté.
- Pour React Native ou Expo, ne pas appliquer les changements propres au HTML web.

## Contrôle de sortie

La migration est correcte lorsque chaque règle applicable a été traitée, que les anciennes API ciblées ne subsistent plus, qu’aucun doublon n’a été introduit et que la validation disponible passe. Les erreurs préexistantes doivent être signalées séparément.
