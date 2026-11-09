# Bouton — Migration HTML/CSS v4 → v5

## Changement de classe pour les variantes et modificateurs de bouton

Les variantes et modificateurs s'écrivent désormais directement, sans le préfixe `is-`.

| Classe v4              | Classe v5           |
| ---------------------- | ------------------- |
| `button is-primary`    | `button primary`    |
| `button is-secondary`  | `button secondary`  |
| `button is-conversion` | `button conversion` |
| `button is-ghost`      | `button ghost`      |
| `button is-loading`    | `button loading`    |
| `button is-fullwidth`  | `button fullwidth`  |

## Exemples d'application

```html
<!-- v4 -->
<button class="button is-primary">Valider</button>
<button class="button is-secondary">Annuler</button>
<button class="button is-conversion">Souscrire</button>
<button class="button is-ghost">Plus d'infos</button>
<button class="button is-primary is-loading">Envoi</button>
<button class="button is-primary is-fullwidth">Continuer</button>

<!-- v5 -->
<button class="button primary">Valider</button>
<button class="button secondary">Annuler</button>
<button class="button conversion">Souscrire</button>
<button class="button ghost">Plus d'infos</button>
<button class="button primary loading">Envoi</button>
<button class="button primary fullwidth">Continuer</button>
```

## Précautions de portée

- **Cible** : Ne migrer que les classes `is-primary`, `is-secondary`, `is-conversion`, `is-ghost`, `is-loading` et `is-fullwidth` appliquées sur un élément ayant la classe `button`.
- **Utilitaires de couleur** : Sur un autre élément (`<p>`, `<span>`, etc.), `is-*` désigne une couleur de texte, à traiter avec [html-text-color.md](html-text-color.md).
- **Autres modificateurs** : Ne pas modifier les autres classes `is-*` d'un bouton : elles ne sont pas couvertes par cette règle.
- **Sélecteurs CSS** : Mettre aussi à jour les sélecteurs personnalisés (ex. `.button.is-primary` devient `.button.primary`, `.button.is-loading` devient `.button.loading`).
