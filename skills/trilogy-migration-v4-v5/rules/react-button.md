# Button — Migration React v4 → v5

## Changement

La variante `CONVERSION` est renommée `ACCENT` dans l'API React de Button.

- Remplacer `ButtonVariant.CONVERSION` par `ButtonVariant.ACCENT`.
- Remplacer la chaîne uppercase `"CONVERSION"` passée à la prop `variant` par `"ACCENT"`, si le projet utilise explicitement des chaînes.
- La classe CSS correspondante passe de `is-conversion` à `is-accent`.

## Exemple

```tsx
// Avant
<Button variant={ButtonVariant.CONVERSION}>Continuer</Button>

// Après
<Button variant={ButtonVariant.ACCENT}>Continuer</Button>
```

## Portée

Appliquer le changement seulement aux variantes du composant Button (`variant` ou classe `is-*` sur l'élément Button). Ne pas remplacer globalement le mot `conversion`, qui peut décrire une action métier, un CTA ou une mesure analytics sans rapport avec la variante visuelle.

Pour du HTML/CSS, confirmer que l'élément est bien un bouton Trilogy avant de remplacer `is-conversion` par `is-accent`.

## Vérifications

- Les props `variant` de Button ne référencent plus `ButtonVariant.CONVERSION` ni la chaîne `"CONVERSION"`.
- Les classes de variante des boutons utilisent `is-accent`.
- Les occurrences métier de « conversion » sont préservées.
- Le projet compile et les tests concernés passent.
