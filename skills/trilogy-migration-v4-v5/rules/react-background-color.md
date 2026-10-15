# BackgroundColor — Migration React v4 → v5 des couleurs de fond

## Changement

Les props `backgroundColor` de `Hero`, `Section`, `Box`, `BoxContent`, `BoxFooter`, `Icon`, `TableHead` et `TableBody` utilisent maintenant `BackgroundColor` depuis `interfaces/colors`, à la place de `TrilogyColor` depuis `objects/facets/Color`. `BoxHeader.variant` utilise également `BackgroundColor` en v5.

Remplacer l'enum en fonction de la prop et de son ancienne valeur. Ne pas convertir toutes les occurrences de `TrilogyColor` dans le projet : cette migration concerne uniquement ces props de couleur de fond et la prop `highlighted` de `Box`, qui utilise également `BackgroundColor` en v5.

## Correspondances indiquées dans l'enum v5

| Ancienne valeur TrilogyColor | Nouvelle valeur |
|------------------------------|-----------------|
| `TrilogyColor.BACKGROUND` (`'WHITE'`) | `BackgroundColor.PRIMARY` (`'primary'`) |
| `TrilogyColor.MAIN` | `BackgroundColor.SECONDARY` |
| `TrilogyColor.FONT` | `BackgroundColor.SECONDARY` |
| `TrilogyColor.MAIN_FADE` | `BackgroundColor.SECONDARY_SUBTLE` |
| `TrilogyColor.NEUTRAL` | `BackgroundColor.SECONDARY_SUBTLE` |
| `TrilogyColor.DISABLED` | `BackgroundColor.SECONDARY_SUBTLE` |
| `TrilogyColor.STROKE` | `BackgroundColor.SECONDARY_SUBTLE` |
| `TrilogyColor.NEUTRAL_FADE` | `BackgroundColor.PRIMARY_SUBTLE` |
| `TrilogyColor.DISABLED_FADE` | `BackgroundColor.PRIMARY_SUBTLE` |
| `TrilogyColor.STROKE_FADE` | `BackgroundColor.PRIMARY_SUBTLE` |
| `TrilogyColor.FONT_PLACEHOLDER` | `BackgroundColor.SECONDARY_SUBTLE` |
| `TrilogyColor.SUCCESS` | `BackgroundColor.SUCCESS` |
| `TrilogyColor.SUCCESS_FADE` | `BackgroundColor.SUCCESS_SUBTLE` |
| `TrilogyColor.WARNING` | `BackgroundColor.WARNING` |
| `TrilogyColor.WARNING_FADE` | `BackgroundColor.WARNING_SUBTLE` |
| `TrilogyColor.ERROR` | `BackgroundColor.ERROR` |
| `TrilogyColor.ERROR_FADE` | `BackgroundColor.ERROR_SUBTLE` |
| `TrilogyColor.INFO` | `BackgroundColor.INFORMATION` |
| `TrilogyColor.INFO_FADE` | `BackgroundColor.INFORMATION_SUBTLE` |
| `TrilogyColor.ACCENT` | `BackgroundColor.ACCENT` |
| `TrilogyColor.ACCENT_FADE` | `BackgroundColor.ACCENT_SUBTLE` |
| `TrilogyColor.BRAND` | `BackgroundColor.BRAND` |
| `TrilogyColor.BRAND_FADE` | `BackgroundColor.BRAND_SUBTLE` |

Les correspondances reprennent les anciens noms indiqués en commentaires à côté des valeurs de `BackgroundColor`, ainsi que les mappings explicitement confirmés pour `ERROR_FADE` et `FONT_PLACEHOLDER`. Les tokens neutres, disabled et stroke ont des regroupements sémantiques plutôt que des équivalences individuelles : utiliser la correspondance du tableau et vérifier le rendu si l'intention visuelle n'est pas claire.

## Exemple

```tsx
// Avant : utilisation de l'enum legacy
<Hero backgroundColor={TrilogyColor.BACKGROUND} />
<Section backgroundColor={TrilogyColor.MAIN_FADE} />
<Box backgroundColor={TrilogyColor.MAIN} />
<BoxHeader variant={TrilogyColor.ACCENT} />
<Icon name={IconName.INFOS_CIRCLE} backgroundColor={TrilogyColor.INFO_FADE} />
<TableHead backgroundColor={TrilogyColor.MAIN_FADE} />
<TableBody backgroundColor={TrilogyColor.NEUTRAL_FADE} />

// Après
<Hero backgroundColor={BackgroundColor.PRIMARY} />
<Section backgroundColor={BackgroundColor.SECONDARY_SUBTLE} />
<Box backgroundColor={BackgroundColor.SECONDARY} />
<BoxHeader variant={BackgroundColor.ACCENT} />
<Icon name={IconName.INFOS_CIRCLE} backgroundColor={BackgroundColor.INFORMATION_SUBTLE} />
<TableHead backgroundColor={BackgroundColor.SECONDARY_SUBTLE} />
<TableBody backgroundColor={BackgroundColor.PRIMARY_SUBTLE} />
```

Pour `TableHead` et `TableBody`, la prop `color` change aussi d'enum : voir [react-text-color.md](react-text-color.md).

### Valeurs fournies comme chaînes

Les valeurs de `BackgroundColor` sont des chaînes lowercase. Remplacer également les anciennes chaînes enum uppercase par leur valeur v5 :

```tsx
// Avant
<Hero backgroundColor='ACCENT' />
<Section backgroundColor='MAIN_FADE' />
<Box backgroundColor='INFO_FADE' />

// Après
<Hero backgroundColor='accent' />
<Section backgroundColor='secondary-subtle' />
<Box backgroundColor='information-subtle' />
```

On peut aussi préférer les accessors enum `BackgroundColor.ACCENT` et `BackgroundColor.INFORMATION_SUBTLE` pour bénéficier du typage.

Importer `BackgroundColor` depuis le chemin public disponible dans la version v5. Dans le dépôt Trilogy, l'enum est défini dans `interfaces/colors` ; vérifier l'entrypoint du package consommé avant d'utiliser un import profond.

## Valeurs sans correspondance confirmée

- `BackgroundColor.OVERLAY` n'a pas d'équivalent `TrilogyColor` commenté ; ne pas inventer de conversion.

## Hors périmètre

- Ne pas modifier les autres usages de `TrilogyColor` (couleur de texte, icône, styles internes ou autres composants) par analogie.
- Pour `Icon`, migrer uniquement `backgroundColor`. La prop `color` relève de `IconColor` et ne suit pas cette conversion.
- Pour `Box.highlighted`, appliquer le type `BackgroundColor` uniquement si l'usage est bien cette prop et vérifier que la nouvelle valeur correspond au sens de couleur de bordure attendu.

## Vérifications

- Les imports associés à ces props passent de `TrilogyColor` à `BackgroundColor`.
- Les props `backgroundColor` de Hero/Section/Box/Icon/TableHead/TableBody et composants Box concernés, ainsi que `BoxHeader.variant`, utilisent les accessors `BackgroundColor` ou les valeurs string lower-case valides.
- Les usages sans correspondance confirmée sont laissés intacts et rapportés.
- Le projet compile et les tests pertinents passent.
