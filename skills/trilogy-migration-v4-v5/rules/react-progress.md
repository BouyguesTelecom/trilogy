# Progress — Migration React v4 → v5

## Changement

La prop `status` de `Progress` utilise maintenant l'enum `StatusVariant` à la place de `StatusState`. `INFO` devient `INFORMATION` et les valeurs sont en lowercase.

| Valeur v4 | Valeur v5 |
|-----------|-----------|
| `StatusState.INFO` | `StatusVariant.INFORMATION` (`'information'`) |
| `StatusState.SUCCESS` | `StatusVariant.SUCCESS` (`'success'`) |
| `StatusState.WARNING` | `StatusVariant.WARNING` (`'warning'`) |
| `StatusState.ERROR` | `StatusVariant.ERROR` (`'error'`) |

`StatusVariant` est défini dans `interfaces/status` dans le dépôt Trilogy ; importer depuis le chemin public de la version v5 installée (voir [react-alert.md](react-alert.md) pour le détail de l'import).

## Exemple

```tsx
// Avant
<Progress value={40} status={StatusState.INFO} />
<Progress value={40} status='SUCCESS' />
<Progress value={40} status='INFO' />

// Après
<Progress value={40} status={StatusVariant.INFORMATION} />
<Progress value={40} status='success' />
<Progress value={40} status='information' />
```

## Portée

Ne migrer que la prop `status` de `Progress`. `ProgressItem` et `ProgressRadial` utilisent encore `StatusState` : ne pas les convertir sur la base de cette règle. Ne pas remplacer globalement `INFO` ni les chaînes uppercase.

## Vérifications

- Plus aucun `StatusState` ni chaîne uppercase sur la prop `status` de Progress.
- Les chaînes passées à `status` sont en lowercase.
- Le projet compile et les tests pertinents passent.
