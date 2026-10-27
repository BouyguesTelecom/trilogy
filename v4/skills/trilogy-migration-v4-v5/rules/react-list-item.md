# ListItem — Migration React v4 → v5

## Changement

La prop `status` de `ListItem` utilise toujours l'enum `ListIconStatus`, mais `INFO` est renommé `INFORMATION` et les valeurs de l'enum sont maintenant en lowercase.

| Valeur v4 | Valeur v5 |
|-----------|-----------|
| `ListIconStatus.INFO` | `ListIconStatus.INFORMATION` (`'information'`) |
| `ListIconStatus.SUCCESS` | `ListIconStatus.SUCCESS` (`'success'`) |
| `ListIconStatus.WARNING` | `ListIconStatus.WARNING` (`'warning'`) |
| `ListIconStatus.ERROR` | `ListIconStatus.ERROR` (`'error'`) |

## Exemple

```tsx
// Avant
<ListItem status={ListIconStatus.INFO}>...</ListItem>
<ListItem status='SUCCESS'>...</ListItem>
<ListItem status='INFO'>...</ListItem>

// Après
<ListItem status={ListIconStatus.INFORMATION}>...</ListItem>
<ListItem status='success'>...</ListItem>
<ListItem status='information'>...</ListItem>
```

## Portée

Ne migrer que la prop `status` de `ListItem`. Ne pas remplacer globalement `INFO` ni les chaînes uppercase : `StatusState`, `TagVariant`, `IconColor` et d'autres enums ont leurs propres règles.

## Vérifications

- Plus aucun `ListIconStatus.INFO` ni chaîne `'INFO'` sur la prop `status` de ListItem.
- Les chaînes passées à `status` sont en lowercase.
- Le projet compile et les tests pertinents passent.
