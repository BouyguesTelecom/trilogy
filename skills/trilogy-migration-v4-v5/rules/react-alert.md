# Alert — Migration React v4 → v5

## Changement

La prop `status` de `Alert` utilise désormais l'enum `ColorsStatus` à la place de `StatusState`.

- Remplacer les imports et usages de `StatusState` associés à `Alert` par `ColorsStatus`.
- Le statut `INFO` devient `INFORMATION`.
- Les valeurs de statut sont `success`, `information`, `warning` et `error`.
- Si `status` est une chaîne, le seul changement nécessaire est `info` → `information`. Les autres chaînes restent inchangées.

## Import

`ColorsStatus` est défini dans `interfaces/colors` dans le dépôt Trilogy. Importer l'enum depuis un chemin réellement exposé par la version v5 installée. Si l'entrypoint interne est disponible, le chemin compilé est :

```tsx
import { ColorsStatus } from '@trilogy-ds/react/lib/interfaces/colors'
```

Vérifier les exports de la version consommée ; ne pas supposer que `ColorsStatus` est ré-exporté depuis `@trilogy-ds/react`.

## Conversion

```tsx
// Avant
<Alert status={StatusState.INFO} />

// Après
<Alert status={ColorsStatus.INFORMATION} />
```

Pour une chaîne :

```tsx
// Avant
<Alert status="info" />

// Après
<Alert status="information" />
```

Cette migration concerne la prop `status` d'Alert. Ne pas remplacer globalement tous les usages de `StatusState` dans d'autres composants sans vérifier leur API v5.

## Vérifications

- `Alert` n'utilise plus `StatusState` dans ses props `status`.
- `ColorsStatus.INFORMATION` ou la chaîne `information` est utilisée pour le statut information.
- Le chemin d'import est valide pour le package v5 installé.
- Les types, tests et exemples concernés passent.
