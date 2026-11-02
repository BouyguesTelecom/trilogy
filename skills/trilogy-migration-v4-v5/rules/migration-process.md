# Processus de migration v4 → v5

## Méthode

1. Identifier les surfaces concernées : React, HTML/CSS, ou React Native.
2. Rechercher les usages des anciennes API, valeurs et classes consignées dans les règles du skill.
3. Appliquer les substitutions exactes documentées, sans modifier les usages sans rapport.
4. Vérifier les types et les chemins d'import avec les exports de la version v5 réellement installée.
5. Lancer les vérifications disponibles : types, lint et tests pertinents.
6. Résumer les changements, les vérifications réalisées et les cas qui nécessitent une décision.

## Précautions

- Ne pas appliquer automatiquement une migration propre à un composant aux autres composants.
- Ne pas déduire la présence d'une API d'un nom similaire ou d'une ancienne version.
- Si une migration n'est pas documentée, rechercher une référence fiable dans le dépôt ou la documentation versionnée ; en cas de doute, demander confirmation.
- Maintenir les règles séparées selon la surface, notamment React, HTML/CSS et React Native.

## Ajouter une migration au catalogue

Créer ou compléter une règle qui décrit :

- le composant et la surface concernés ;
- le comportement ou symbole v4 ;
- le comportement ou symbole v5 ;
- les correspondances exactes et exemples ;
- les précautions de portée ;
- les validations à exécuter.

Puis ajouter un lien vers cette règle dans `../SKILL.md`.
