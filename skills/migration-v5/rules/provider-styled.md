# Migration de `TrilogyProviderStyled`

## Contexte

En v5, `TrilogyProviderStyled` ne charge plus automatiquement la feuille CSS. Le CSS doit être ajouté explicitement dans le `<head>` de l’application web.

Version CSS cible : `5.0.0`.

## Migration du thème `default`

Avant :

```tsx
<TrilogyProviderStyled theme="default">
  {children}
</TrilogyProviderStyled>
```

Après :

```tsx
<TrilogyProviderStyled>
  {children}
</TrilogyProviderStyled>
```

Supprimer uniquement la prop `theme="default"`. Ne pas ajouter `mangled`.

Ajouter dans le `<head>` du point d’entrée HTML web :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trilogy-ds/styles@5.0.0/dist/default/trilogy.css" />
```

## Migration du thème `mangled`

Avant :

```tsx
<TrilogyProviderStyled theme="mangled">
  {children}
</TrilogyProviderStyled>
```

Après :

```tsx
<TrilogyProviderStyled mangled={true}>
  {children}
</TrilogyProviderStyled>
```

Ne pas conserver `theme="mangled"`.

Ajouter dans le `<head>` du point d’entrée HTML web :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trilogy-ds/styles@5.0.0/dist/default/trilogy-mangled.css" />
```

## Cas particuliers

- Pour React Native ou Expo, il n’y a pas de `<head>` HTML à modifier. Ne pas ajouter de lien CSS ; migrer uniquement l’API du provider si elle est utilisée dans du code partagé.
- Si le projet utilise `theme="none"`, ne pas choisir automatiquement une feuille CSS. Signaler le cas et demander quelle feuille doit être chargée.
- Si plusieurs applications web sont présentes, traiter chaque provider avec le point d’entrée HTML de son application.
