# TextColor — Migration React v4 → v5 des couleurs de texte

## Changement

La prop `color` de `TableTr`, `TableHead` et `TableBody` utilise maintenant `TextColor` depuis `interfaces/colors`, à la place de `TrilogyColor` depuis `objects/facets/Color`.

Ne pas convertir toutes les occurrences de `TrilogyColor` : cette règle concerne uniquement la prop `color` de ces composants. Pour leur `backgroundColor` (TableHead, TableBody), voir [react-background-color.md](react-background-color.md).

## Correspondances

Correspondances validées par l'équipe Trilogy : appliquer le tableau tel quel.

| Ancienne valeur TrilogyColor | Nouvelle valeur TextColor |
|------------------------------|---------------------------|
| `TrilogyColor.SUCCESS` | `TextColor.SUCCESS` (`'success'`) |
| `TrilogyColor.WARNING` | `TextColor.WARNING` (`'warning'`) |
| `TrilogyColor.ERROR` | `TextColor.ERROR` (`'error'`) |
| `TrilogyColor.INFO` | `TextColor.INFORMATION` (`'information'`) |
| `TrilogyColor.ACCENT` | `TextColor.ACCENT` (`'accent'`) |
| `TrilogyColor.BRAND` | `TextColor.BRAND` (`'brand'`) |
| `TrilogyColor.DISABLED` | `TextColor.DISABLED` (`'disabled'`) |
| `TrilogyColor.MAIN` | `TextColor.PRIMARY` (`'primary'`) |
| `TrilogyColor.FONT` | `TextColor.PRIMARY` (`'primary'`) |
| `TrilogyColor.FONT_PLACEHOLDER` | `TextColor.PLACEHOLDER` (`'placeholder'`) |
| `TrilogyColor.BACKGROUND` (`'WHITE'`) | `TextColor.INVERSE` (`'inverse'`) |
| `TrilogyColor.NEUTRAL` | `TextColor.SECONDARY` (`'secondary'`) |
| `TrilogyColor.STROKE` | `TextColor.SECONDARY` (`'secondary'`) |

Les valeurs `*_FADE` n'ont pas d'équivalent texte : ne pas les convertir automatiquement, les signaler pour arbitrage design.

## Exemple

```tsx
// Avant
<TableHead color={TrilogyColor.MAIN} />
<TableBody color={TrilogyColor.INFO} />
<TableTr color={TrilogyColor.ERROR} />

// Après
<TableHead color={TextColor.PRIMARY} />
<TableBody color={TextColor.INFORMATION} />
<TableTr color={TextColor.ERROR} />
```

### Valeurs fournies comme chaînes

Les valeurs de `TextColor` sont en lowercase :

```tsx
// Avant
<TableTr color='INFO' />

// Après
<TableTr color='information' />
```

Importer `TextColor` depuis le chemin public disponible dans la version v5 installée (défini dans `interfaces/colors` dans le dépôt Trilogy).

## Vérifications

- Les props `color` de TableTr/TableHead/TableBody utilisent `TextColor` ou une chaîne lowercase valide.
- Les valeurs sans équivalent texte sont laissées intactes et rapportées.
- Le projet compile et les tests pertinents passent.
