# Alert — Migration HTML/CSS v4 → v5

## Changement

Cette migration concerne uniquement la classe de statut portée par l'élément racine du composant Alert : l'élément identifié par la classe `alert` dans le markup consommateur. Remplacer sur cet élément la classe `is-*` de statut par la classe utilitaire `has-background-*-subtle` correspondante.

**Ne pas effectuer de remplacement global** de `is-success`, `is-info`, `is-warning` ou `is-error` dans le projet. Ces classes peuvent être utilisées par d'autres composants ou éléments ; les laisser intactes hors d'un Alert. Ne pas modifier les classes des descendants de l'Alert non plus, sauf si une autre règle documente explicitement ce changement.

| Ancienne classe v4 | Classe v5 |
|--------------------|-----------|
| `is-success` | `has-background-success-subtle` |
| `is-info` | `has-background-information-subtle` |
| `is-warning` | `has-background-warning-subtle` |
| `is-error` | `has-background-error-subtle` |

Le statut information s'écrit `information` en v5, et non `info`.

## Portée et exemple

Avant, seule la classe de statut sur l'élément portant `alert` est migrée :

```html
<div class="alert is-warning">...</div>
<div class="button is-warning">...</div>
```

Après, l'Alert change et l'autre composant reste inchangé :

```html
<div class="alert has-background-warning-subtle">...</div>
<div class="button is-warning">...</div>
```

Si `is-*` se trouve sur un élément sans classe/identification d'Alert ou si le markup ne permet pas d'identifier clairement le composant, ne pas le modifier automatiquement : le signaler pour vérification.

## Vérifications

- Les classes de couleur ont été remplacées uniquement sur les éléments racines identifiés comme Alert.
- Les mêmes classes `is-*` sur les autres composants et éléments sont inchangées.
- La classe d'information emploie `has-background-information-subtle`.
- Les autres classes de l'Alert ne sont pas modifiées sans migration documentée.

Cette règle couvre les classes HTML/CSS. Pour la prop `status` dans React, consulter [react-alert.md](react-alert.md).
