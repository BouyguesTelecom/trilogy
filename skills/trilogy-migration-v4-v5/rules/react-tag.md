# Tag — Migration React v4 → v5

## Changement

La prop `variant` de `Tag` utilise toujours `TagVariant`, mais la variante `INFO` est renommée `INFORMATION` et les valeurs de l'enum sont maintenant en lowercase.

| Valeur v4 | Valeur v5 |
|-----------|-----------|
| `TagVariant.INFO` | `TagVariant.INFORMATION` (`'information'`) |
| `TagVariant.SUCCESS` | `TagVariant.SUCCESS` (`'success'`) |
| `TagVariant.WARNING` | `TagVariant.WARNING` (`'warning'`) |
| `TagVariant.ERROR` | `TagVariant.ERROR` (`'error'`) |

Les variantes v4 absentes de l'enum v5 (par exemple `MAIN` ou `ACCENT`) n'ont pas de correspondance documentée : ne pas les convertir, les signaler.

## Exemple

```tsx
// Avant
<Tag label='Nouveau' variant={TagVariant.INFO} />
<Tag label='Validé' variant='SUCCESS' />
<Tag label='Info' variant='INFO' />

// Après
<Tag label='Nouveau' variant={TagVariant.INFORMATION} />
<Tag label='Validé' variant='success' />
<Tag label='Info' variant='information' />
```

## Portée

Ne migrer que la prop `variant` de `Tag`. Ne pas remplacer globalement `INFO` : `StatusState`, `IconColor`, `TrilogyColor` et d'autres enums ont leurs propres règles.

## Vérifications

- Plus aucun `TagVariant.INFO` ni chaîne `'INFO'` sur la prop `variant` de Tag.
- Les chaînes passées à `variant` sont en lowercase.
- Le projet compile et les tests pertinents passent.
