# IconColor — Migration React v4 → v5

## Changement

L'enum `IconColor` de l'API Icon a renommé certaines valeurs. Mettre à jour les accessors `IconColor` utilisés pour la prop `color` d'Icon selon ce tableau :

| Ancien accessor v4 | Nouvel accessor v5 |
|--------------------|--------------------|
| `IconColor.INFO` | `IconColor.INFORMATION` |
| `IconColor.MAIN` | `IconColor.PRIMARY` |
| `IconColor.BACKGROUND` | `IconColor.INVERSE` |
| `IconColor.NEUTRAL` | `IconColor.PRIMARY` |
| `IconColor.WHITE` | `IconColor.INVERSE` |
| `IconColor.GREY` | `IconColor.PRIMARY` |

Exemple :

```tsx
// Avant
<Icon name={IconName.INFOS_CIRCLE} color={IconColor.INFO} />

// Après
<Icon name={IconName.INFOS_CIRCLE} color={IconColor.INFORMATION} />
```

## Portée

Appliquer ces remplacements uniquement aux membres de l'enum `IconColor` utilisés comme valeur de couleur d'icône, notamment sur la prop `color` d'Icon. Ne pas changer automatiquement les enums homonymes ou des couleurs de fond : la migration du fond `Icon.backgroundColor` est décrite dans [react-background-color.md](react-background-color.md).

Ne pas faire de remplacement global des mots `INFO`, `MAIN`, `BACKGROUND`, `NEUTRAL`, `WHITE` ou `GREY` ; des composants et enums sans rapport peuvent employer ces noms.

## Chaînes

Cette règle décrit les membres enum. Si le projet passe des chaînes à la prop `color`, vérifier la valeur réellement acceptée par `IconColor` dans la version v5 installée avant de la modifier ; ne pas déduire une conversion de chaîne différente des mappings documentés ici.

## Vérifications

- Les anciennes références `IconColor.INFO`, `.MAIN`, `.BACKGROUND`, `.NEUTRAL`, `.WHITE` et `.GREY` de la couleur d'Icon ont été remplacées par les valeurs du tableau.
- Les usages d'`IconColor` hors couleur d'icône et les props `backgroundColor` ne sont pas modifiés par cette règle.
- Les types et tests concernés passent.
