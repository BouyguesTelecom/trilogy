# Migration des chemins consommateurs `@trilogy-ds/react`

## Contexte

Cette règle cible les projets consommateurs de `@trilogy-ds/react` en v4 qui importaient depuis `objects`.

En v5 :

- `objects` n'existe plus ;
- `facets` et `atoms` n'existent plus ;
- les types/interfaces sont sous `interfaces` ;
- les fonctions utilitaires listées ci-dessous doivent être importées depuis `helpers`.

## Règle de compatibilité de style d'import

Respecter le style d'import du consommateur :

1. si le code source importait depuis un barrel, migrer vers un barrel ;
2. si le code source importait depuis un fichier précis, migrer vers un fichier précis.

Exemples :

- `@trilogy-ds/react/objects/facets` -> `@trilogy-ds/react/interfaces`
- `@trilogy-ds/react/objects/facets/Clickable` -> `@trilogy-ds/react/interfaces/Clickable`
- `@trilogy-ds/react/objects` -> `@trilogy-ds/react/interfaces` (pour les interfaces)
- `@trilogy-ds/react/objects/Status` -> `@trilogy-ds/react/interfaces/Status` (pour les interfaces)

## Transformations obligatoires

### 1) Interfaces : `objects` -> `interfaces`

Remplacer les imports suivants :

- `@trilogy-ds/react/objects/facets/*` -> `@trilogy-ds/react/interfaces/*`
- `@trilogy-ds/react/objects/facets` -> `@trilogy-ds/react/interfaces`
- `@trilogy-ds/react/objects/*` -> `@trilogy-ds/react/interfaces/*`
- `@trilogy-ds/react/objects` -> `@trilogy-ds/react/interfaces`

### 2) Fonctions : importer depuis `helpers`

Les fonctions ci-dessous doivent provenir de `helpers` et non de `objects` ni de `interfaces`.

Mapping par fichier helper :

- `getAlignClassName`, `getAlignStyle` -> `@trilogy-ds/react/helpers/alignable`
- `getBackgroundClassName` -> `@trilogy-ds/react/helpers/background`
- `classify`, `is`, `has` -> `@trilogy-ds/react/helpers/classify`
- `getColorClassName`, `getButtonVariantClassName`, `getButtonColorStyle`, `getColorStyle` -> `@trilogy-ds/react/helpers/color`
- `getJustifyStyle`, `getJustifyClassName`, `getJustifiedClassName`, `getJustifySelfClassName` -> `@trilogy-ds/react/helpers/justifiable`
- `getLoadingClassName` -> `@trilogy-ds/react/helpers/loadable`
- `getRadiusStyle` -> `@trilogy-ds/react/helpers/radius`
- `getStatusClassName`, `getStatusStyle`, `getStatusIconName` -> `@trilogy-ds/react/helpers/status`
- `getTextClassName` -> `@trilogy-ds/react/helpers/text`
- `setTypographyAlign`, `getTypographyBoldClassName`, `getTypographyBoldStyle`, `setTypographyColor` -> `@trilogy-ds/react/helpers/typography`
- `getVariantClassName`, `getVariantStyle` -> `@trilogy-ds/react/helpers/variant`

Compatibilité barrel/fichier :

- import v4 via barrel (`@trilogy-ds/react/objects` ou `@trilogy-ds/react/objects/facets`) : importer via `@trilogy-ds/react/helpers` si le symbole est exporté par le barrel helper ;
- import v4 via fichier (`.../objects/.../<Fichier>`) : importer via `@trilogy-ds/react/helpers/<fichier-helper>`.

### 3) Un seul import par module et par fichier

Fusionner les imports multiples provenant du même module.

Avant :

```ts
import type { TableProps } from '@trilogy-ds/react/interfaces/Table'
import { TableBorderEnum } from '@trilogy-ds/react/interfaces/Table'
```

Après :

```ts
import { TableBorderEnum, type TableProps } from '@trilogy-ds/react/interfaces/Table'
```

## Exceptions

- Si un symbole n'est pas exporté par le barrel cible, basculer en import fichier précis.
- Ne pas réécrire les exports de barrel internes du consommateur (`export * from './...'`) si la migration ne cible que les imports d'API Trilogy.

## Contrôles

Exécuter après migration côté consommateur :

1. Vérifier qu'il ne reste plus de chemins supprimés :

```sh
rg "@trilogy-ds/react/objects|@trilogy-ds/react/objects/facets|@trilogy-ds/react/objects/atoms"
```

2. Vérifier le typage/build du projet consommateur.

3. Vérifier les tests du projet consommateur.
