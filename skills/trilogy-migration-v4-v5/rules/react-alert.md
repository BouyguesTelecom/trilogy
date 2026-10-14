# Alert — Migration React v4 → v5

## Changement

La prop `status` de `Alert` utilise désormais l'enum `StatusVariant` à la place de `StatusState`.

- Remplacer les imports et usages de `StatusState` associés à `Alert` par `StatusVariant`.
- Le statut `INFO` devient `INFORMATION`.
- Les valeurs de statut sont `success`, `information`, `warning` et `error`.
- Si `status` est une chaîne, le seul changement nécessaire est `info` → `information`. Les autres chaînes restent inchangées.

## Import

`StatusVariant` est défini dans `interfaces/status` dans le dépôt Trilogy. Importer l'enum depuis un chemin réellement exposé par la version v5 installée. Si l'entrypoint interne est disponible, le chemin compilé est :

```tsx
import { StatusVariant } from '@trilogy-ds/react/lib/interfaces/status'
```

Vérifier les exports de la version consommée ; ne pas supposer que `StatusVariant` est ré-exporté depuis `@trilogy-ds/react`.

## Conversion

```tsx
// Avant
<Alert status={StatusState.INFO} />

// Après
<Alert status={StatusVariant.INFORMATION} />
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
- `StatusVariant.INFORMATION` ou la chaîne `information` est utilisée pour le statut information.
- Le chemin d'import est valide pour le package v5 installé.
- Les types, tests et exemples concernés passent.
