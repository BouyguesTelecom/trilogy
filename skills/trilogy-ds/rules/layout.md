# Layout — Structure de page Trilogy

## Architecture obligatoire d'une page

Toute page Trilogy DOIT suivre cette structure :

```tsx
<main>
  <Section>
    <Container>
      {/* Contenu de la section */}
    </Container>
  </Section>

  <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
    <Container>
      {/* Section suivante */}
    </Container>
  </Section>
</main>
```

### Règles fondamentales

- `<Section>` est le conteneur full-width (gère les backgrounds)
- `<Container>` centre le contenu et donne les marges latérales
- JAMAIS de contenu directement dans `<Section>` sans `<Container>`
- JAMAIS de `<Container>` sans `<Section>` parent
- Alterner les fonds de section pour le rythme visuel (BACKGROUND / NEUTRAL_FADE)

---

## Grille 12 colonnes : Columns + Column

```tsx
import { Columns, Column } from '@trilogy-ds/react'

<Columns multiline gap={2}>
  <Column size={8}>
    {/* Contenu principal (8/12) */}
  </Column>
  <Column size={4}>
    {/* Sidebar (4/12) */}
  </Column>
</Columns>
```

### Props `<Columns>`

| Prop | Type | Description |
|------|------|-------------|
| multiline | boolean | Wrap sur plusieurs lignes |
| gap | GapSize | Espacement entre colonnes. Utiliser l'enum : `GapSize.TWO`, `GapSize.FOUR`, etc. (valeurs 0–10) |
| scrollable | boolean | Colonnes scrollables horizontalement |
| mobile | boolean | Conserve les colonnes sur mobile (sinon stack en 12) |
| marginless | boolean | Supprime les marges |
| fullheight | boolean | Force la hauteur 100% |
| fullBleed | boolean | Supprime le padding latéral |

```tsx
// DO ✅ — Utiliser l'enum GapSize
<Columns multiline gap={GapSize.TWO}>

// ACCEPTABLE — Le nombre brut fonctionne car GapSize.TWO === 2
<Columns multiline gap={2}>
```

### Props `<Column>`

| Prop | Type | Description |
|------|------|-------------|
| size | 1-12 | Largeur sur 12 (défaut tous breakpoints) |
| mobileSize | 1-12 | Largeur sur mobile |
| tabletSize | 1-12 | Largeur sur tablet |
| touchSize | 1-12 | Largeur sur touch (mobile + tablet) |
| desktopSize | 1-12 | Largeur sur desktop |
| widescreenSize | 1-12 | Largeur sur écrans larges |
| fullhdSize | 1-12 | Largeur sur full HD |
| narrow | boolean | Colonne à largeur minimale |
| offset | 1-12 | Décalage à gauche |
| mobileOffset | 1-12 | Décalage sur mobile |
| tabletOffset | 1-12 | Décalage sur tablet |
| desktopOffset | 1-12 | Décalage sur desktop |

### Breakpoints (grille responsive)

- Mobile : toutes les colonnes passent à pleine largeur (sauf si `mobile` prop sur Columns)
- Utiliser `mobileSize={12}` pour forcer le pleine largeur mobile
- Utiliser `tabletSize` pour le breakpoint intermédiaire
- Desktop : layout nominal basé sur `size`

```tsx
{/* Responsive : 3 colonnes desktop, 2 tablet, 1 mobile */}
<Columns multiline>
  <Column size={4} tabletSize={6} mobileSize={12}>
    <Card>...</Card>
  </Column>
  <Column size={4} tabletSize={6} mobileSize={12}>
    <Card>...</Card>
  </Column>
  <Column size={4} tabletSize={12} mobileSize={12}>
    <Card>...</Card>
  </Column>
</Columns>
```

---

## Flexbox : FlexBox + FlexItem

Pour les layouts non-grille (alignement, espacement) :

```tsx
import { FlexBox, FlexItem, DirectionEnum, Justify, Align, GapSize } from '@trilogy-ds/react'

<FlexBox direction={DirectionEnum.ROW} justify={Justify.SPACE_BETWEEN} align={Align.CENTER} gap={GapSize.FOUR}>
  <FlexItem>Gauche</FlexItem>
  <FlexItem>Droite</FlexItem>
</FlexBox>
```

### Props `<FlexBox>`

| Prop | Type | Description |
|------|------|-------------|
| direction | DirectionEnum \| ResponsiveValue | Direction des enfants |
| justify | Justify \| ResponsiveValue | Justification |
| align | Align \| ResponsiveValue | Alignement |
| gap | GapSize \| ResponsiveValue | Espacement entre enfants |
| wrap | boolean \| ResponsiveValue | Wrap des enfants |
| fullheight | boolean | Hauteur 100% |
| fullBleed | boolean | Supprime le padding |
| scrollable | boolean | Contenu scrollable |
| mobile | boolean | Conserve le layout sur mobile |

⚠️ **Direction** : toujours utiliser l'accessor enum (`DirectionEnum.ROW`), jamais une string (les valeurs internes sont en minuscules : `'row'`, `'column'`, etc.)

### Props responsives (FlexBox)

Les props `direction`, `justify`, `align`, `gap` et `wrap` acceptent un **objet responsive** :

```tsx
type ResponsiveValue<T> = {
  mobile?: T
  tablet?: T
  desktop?: T
  widescreen?: T
  fullhd?: T
}
```

Exemple :

```tsx
// Layout qui passe de colonne (mobile) à ligne (desktop)
<FlexBox
  direction={{ mobile: DirectionEnum.COLUMN, desktop: DirectionEnum.ROW }}
  gap={{ mobile: GapSize.TWO, desktop: GapSize.FOUR }}
  justify={{ mobile: Justify.CENTER, desktop: Justify.SPACE_BETWEEN }}
>
  <FlexItem>Premier</FlexItem>
  <FlexItem>Second</FlexItem>
</FlexBox>

// Valeur simple (tous breakpoints)
<FlexBox direction={DirectionEnum.ROW} gap={GapSize.THREE}>
```

### Props `<FlexItem>`

| Prop | Type | Description |
|------|------|-------------|
| narrow | boolean | Largeur minimale |
| size | FlexItemSize (1-12) \| ResponsiveObject | Taille responsive |

```tsx
type FlexSize = {
  mobile?: 1-12
  tablet?: 1-12
  touch?: 1-12
  desktop?: 1-12
  widescreen?: 1-12
  fullhd?: 1-12
}

// FlexItem avec taille responsive
<FlexItem size={{ mobile: 12, tablet: 6, desktop: 4 }}>
  <Card>...</Card>
</FlexItem>
```

### Quand utiliser quoi

| Besoin | Composant |
|--------|-----------|
| Grille à colonnes fixes | `Columns` + `Column` |
| Alignement flexible | `FlexBox` + `FlexItem` |
| Espacement vertical | `Section` multiples |
| Séparateurs | `<Divider />` |

---

## Hero (bannière de page)

Le `Hero` est une section spéciale pour le header visuel :

```tsx
import { Hero, Title, TitleLevels, Text, Button, ButtonVariant, TrilogyColor, Container } from '@trilogy-ds/react'

<Hero backgroundColor={TrilogyColor.MAIN} inverted>
  <Container>
    <Title level={TitleLevels.ONE} inverted>
      Mon titre de page
    </Title>
    <Text inverted>Description de la page</Text>
    <Button variant={ButtonVariant.CONVERSION}>Découvrir</Button>
  </Container>
</Hero>
```

### Props Hero

| Prop | Type | Description |
|------|------|-------------|
| backgroundColor | TrilogyColor | Couleur de fond |
| backgroundSrc | string | Image de fond (URL) |
| inverted | boolean | Texte blanc (pour fonds sombres) |
| overlap | ReactNode[] ou boolean | Contenu superposé en bas du Hero |
| backgroundHeight | BackgroundHeight | Hauteur du fond (100, 150, 200, 300) |

---

## Container — Props

| Prop | Type | Description |
|------|------|-------------|
| medium | boolean | Container de largeur intermédiaire (entre mobile et full-width) |

---

## Section — Props principales

| Prop | Type | Description |
|------|------|-------------|
| backgroundColor | TrilogyColor | Couleur de fond |
| backgroundSrc | string | Image de fond |
| inverted | boolean | Texte blanc (hérité de BackgroundProps) |
| skeleton | boolean | Affichage de chargement |

---

## Patterns de layout LP

### 1 colonne (mobile-first)

```tsx
<Section>
  <Container>
    <Title level={TitleLevels.TWO}>Nos offres</Title>
    <Text>Description</Text>
  </Container>
</Section>
```

### 2 colonnes (texte + image)

```tsx
<Section>
  <Container>
    <Columns>
      <Column size={6} mobileSize={12}>
        <Title level={TitleLevels.TWO}>Fibre</Title>
        <Text>Description de l'offre</Text>
        <Button variant={ButtonVariant.CONVERSION}>Tester mon éligibilité</Button>
      </Column>
      <Column size={6} mobileSize={12}>
        <Image src="..." alt="Illustration fibre" />
      </Column>
    </Columns>
  </Container>
</Section>
```

### 3 colonnes (cards)

```tsx
<Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
  <Container>
    <Columns multiline gap={2}>
      <Column size={4} mobileSize={12}>
        <Card>...</Card>
      </Column>
      <Column size={4} mobileSize={12}>
        <Card>...</Card>
      </Column>
      <Column size={4} mobileSize={12}>
        <Card>...</Card>
      </Column>
    </Columns>
  </Container>
</Section>
```
