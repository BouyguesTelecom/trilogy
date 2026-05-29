---
name: trilogy-ds
description: "Technical skill for building UIs with the Trilogy design system (React). Use when generating React components, layouts, landing pages, or any UI code using @trilogy-ds/react. Covers page structure, grid system, component composition, and self-contained LP generation."
metadata:
  author: bouygues-telecom
  version: "1.0.0"
---

# Trilogy Design System — Technical Skill

Ce skill fournit les règles techniques et les principes de décision pour construire des interfaces React avec le design system Trilogy. Il encode les contraintes **non-négociables** et délègue les détails d'API aux références live.

---

## When to use me

- User asks to generate, create, or build a React component or page using Trilogy
- User asks to create or modify a landing page with @trilogy-ds/react
- User asks about Trilogy layout (Section, Container, Columns, FlexBox)
- User asks how to compose Trilogy components (Card, Accordion, Tabs, etc.)
- User asks about Trilogy responsive patterns or grid system
- User asks to review or audit React code for Trilogy design system compliance
- User asks about Trilogy enums, props, or component API
- User asks to convert HTML/Tailwind/MUI code into Trilogy components

## Live References (toujours consulter pour les détails)

| Ressource | URL | Quand consulter |
|-----------|-----|-----------------|
| Design system complet | `https://design.bouyguestelecom.fr/api/docs?format=markdown` | Vue d'ensemble, setup, fondations |
| Tous les composants | `https://design.bouyguestelecom.fr/api/components/all?format=markdown` | Liste exhaustive et props |
| Un composant spécifique | `https://design.bouyguestelecom.fr/api/components/{Name}?format=markdown` | Props détaillées, exemples |
| Content system | `https://design.bouyguestelecom.fr/api/docs/content?format=markdown` | Ton de voix, microcopy |

**Instruction** : Dès qu'un composant ou une prop n'est pas couvert dans ce skill, **fetch l'URL correspondante** pour obtenir l'information à jour. Préférer les données live à toute supposition.

---

## Installation

```bash
npm i @trilogy-ds/react
```

## CSS requis

```html
<link rel="stylesheet" href="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-styles@4.9.2/default/trilogy.css" />
```

## Setup minimal (Next.js / Vite)

```tsx
import { TrilogyProvider } from '@trilogy-ds/react/lib/context/provider'

function App({ children }) {
  return <TrilogyProvider>{children}</TrilogyProvider>
}
```

---

## Design Philosophy — Règles absolues

1. **UNIQUEMENT** les composants React de `@trilogy-ds/react` — jamais de balises HTML (`<div>`, `<span>`, `<p>`, etc.)
2. **Pas de CSS custom** — ni fichier CSS, ni inline `style={}`, ni className custom
3. **Pas de librairie tierce** pour le layout ou le style (pas de Tailwind, MUI, Chakra)
4. **JSX uniquement** — pas de HTML pur
5. **Import groupé** : `import { Section, Container, Title, ... } from '@trilogy-ds/react'`
6. **Props correctes** : `backgroundColor` (pas `background`), `label` (pas children) pour Sticker, props `title`/`description` pour Alert
7. **Enums** : utiliser les accessors TypeScript pour les enums à valeurs lowercase (`DirectionEnum.ROW`, pas `"ROW"`)
8. **Structure** : toujours `Section` → `Container` → contenu. Jamais de contenu hors Container.
9. **Ne JAMAIS halluciner** : ne jamais inventer de composants, props, enums ou valeurs non référencés dans ce skill ou dans les Live References. En cas de doute, **fetch l'URL de documentation** correspondante. Si l'information n'existe nulle part, ne pas la générer — demander ou signaler le manque.

---

## Rules (fichiers de patterns prescriptifs)

- [layout.md](rules/layout.md) — Structure de page, Section/Container, grille 12 colonnes, FlexBox responsive
- [composition.md](rules/composition.md) — Patterns de composition de composants, sous-composants, Price, Card
- [landing-page.md](rules/landing-page.md) — Génération d'une LP autoportante (template + checklist)

## Agents

- [designer.md](agents/designer.md) — Agent de génération de landing pages Trilogy
- [reviewer.md](agents/reviewer.md) — Agent d'audit de code React pour conformité Trilogy

---

## Composants — Quick Reference

> Pour les **props détaillées** d'un composant, consulter :  
> `https://design.bouyguestelecom.fr/api/components/{Name}?format=markdown`

| Catégorie | Composants |
|-----------|------------|
| Layout | Section, Container, Columns, Column, Rows, Row, Divider, FlexBox, FlexItem |
| Typography | Title, Text, Link |
| Action | Button, ButtonList, Tag, TagList, Sticker, Fab |
| Feedback | Alert, ToasterAlertProvider, Modal, ModalBody, ModalFooter, Popover |
| Data Entry | Input, Select, SelectOption, Checkbox, CheckboxList, CheckboxTile, CheckboxTiles, Radio, RadioList, RadioTile, RadioTiles, Switch, Textarea, AutoComplete, AutoCompleteItem, AutoCompleteMenu, Otp, Range, DatePicker, Timepicker, Calendar |
| Navigation | Tabs, TabList, Tab, TabPanel, TabPanels, Accordion, AccordionItem, AccordionHeader, AccordionBody, Breadcrumb, BreadcrumbItem, Stepper, Step, Pagination, SegmentControl, SegmentControlItem |
| Display | Card, CardContent, CardImage, Box, BoxHeader, BoxContent, BoxFooter, BoxItem, BoxTableContainer, Hero, Price, Timeline, TimelineItem, TimelineContent, TimelineMarker, List, ListItem, Table, TableHead, TableBody, TableTr, TableTh, TableTd, Image, Countdown, Skeleton, Badge, Chips, ChipsList, Progress, ProgressItem, ProgressRadial, ProgressRadialItem, ProductTour |
| Media | Icon |
| Utility | View, AutoLayout, ScrollView, Spacer, Prompt, PromptFiles, PromptFile, PromptTextarea, PromptToolbar, PromptMicrophone, PromptSubmit, PromptTools, PromptButton, PromptInputFile, PromptSelect, PromptSelectOption |

### Sous-composants obligatoires

Toujours utiliser les sous-composants quand ils existent :

| Composant | Sous-composants |
|-----------|-----------------|
| Card | CardImage, CardContent |
| Accordion | AccordionItem, AccordionHeader, AccordionBody |
| Tabs | TabList, Tab, TabPanel, TabPanels |
| Table | TableHead, TableBody, TableTr, TableTd, TableTh |
| List | ListItem |
| Modal | ModalBody, ModalFooter (titre via prop `title` sur Modal) |
| Box | BoxHeader, BoxContent, BoxFooter, BoxItem, BoxTableContainer |
| Breadcrumb | BreadcrumbItem |
| Checkbox | CheckboxList, CheckboxTile, CheckboxTiles |
| Radio | RadioList, RadioTile, RadioTiles |
| Select | SelectOption |
| SegmentControl | SegmentControlItem |
| Stepper | Step |
| Timeline | TimelineItem, TimelineContent, TimelineMarker |
| Chips | ChipsList |
| Tag | TagList |
| AutoComplete | AutoCompleteItem, AutoCompleteMenu |
| Progress | ProgressItem, ProgressRadial, ProgressRadialItem |
| Prompt | PromptFiles, PromptFile, PromptTextarea, PromptToolbar, PromptMicrophone, PromptSubmit, PromptTools, PromptButton, PromptInputFile, PromptSelect, PromptSelectOption |
| Dropdown | DropdownItem, DropdownGroup, DropdownTrigger |

---

## Enums — Référence locale

### Enums à valeurs UPPERCASE (strings majuscules acceptées)

| Enum | Valeurs | Usage |
|------|---------|-------|
| `Align` | CENTER, START, END, STRETCH | Alignement transversal (FlexBox, layout) |
| `BadgeVariant` | SUCCESS, INFO, WARNING, ERROR, MAIN, ACCENT | Variante visuelle Badge |
| `ButtonVariant` | CONVERSION, PRIMARY, SECONDARY, GHOST | Variante de bouton |
| `IconColor` | MAIN, ACCENT, SUCCESS, ERROR, WARNING, INFO, etc. | Couleur des icônes |
| `IconStatus` | SUCCESS, INFO, WARNING, ERROR | Statut d'icône |
| `Justify` | CENTER, START, END, SPACE_BETWEEN, SPACE_AROUND, SPACE_EVENLY | Justification FlexBox |
| `StatusState` | SUCCESS, INFO, WARNING, ERROR | Statut d'alerte/feedback |
| `TagVariant` | MAIN, ACCENT, SUCCESS, WARNING, ERROR, INFO | Variante visuelle Tag |
| `TrilogyColor` | MAIN, ACCENT, BACKGROUND, SUCCESS, ERROR, WARNING, INFO, MAIN_FADE, ACCENT_FADE, NEUTRAL_FADE, etc. | Palette design system |
| `VariantState` | MAIN, ACCENT, INFO | Variante Sticker/Badge |

Pour ces enums, on peut utiliser l'accessor (`ButtonVariant.CONVERSION`) ou la string uppercase (`"CONVERSION"`).

### Enums à valeurs LOWERCASE (toujours utiliser l'accessor enum)

⚠️ Ces enums ont des **valeurs internes en minuscules**. Ne PAS passer de string uppercase.

| Enum | Accessor → Valeur interne | Usage |
|------|----------------------------|-------|
| `DirectionEnum` | ROW → `'row'`, COLUMN → `'column'`, ROW_REVERSE → `'row-reverse'`, COLUMN_REVERSE → `'column-reverse'` | Direction FlexBox |
| `ButtonMarkup` | BUTTON → `'button'`, INPUT → `'input'`, A → `'a'` | Balise HTML du Button |
| `ButtonType` | BUTTON → `'button'`, SUBMIT → `'submit'`, RESET → `'reset'` | Type HTML du Button |
| `CountdownFormat` | DAY_HOUR_MIN_SEC → `'dd-hh-mm-ss'`, HOUR_MIN_SEC → `'hh-mm-ss'`, MIN_SEC → `'mm-ss'`, etc. | Format Countdown |
| `IconName` | ALERT → `'tri-alert'`, ARROW_DOWN → `'tri-arrow-down'`, CHECK_CIRCLE → `'tri-check-circle'`, etc. | Nom d'icône |
| `IconSize` | SMALLER → `'smaller'`, SMALL → `'small'`, MEDIUM → `'medium'`, LARGE → `'large'`, HUGE → `'huge'` | Taille d'icône |
| `InputStatus` | SUCCESS → `'success'`, WARNING → `'warning'`, ERROR → `'error'`, DEFAULT → `'default'` | État visuel input |
| `InputType` | TEXT → `'text'`, PASSWORD → `'password'`, EMAIL → `'email'`, etc. | Type d'input |
| `ModalSize` | SMALL → `'small'`, MEDIUM → `'medium'`, LARGE → `'large'` | Taille de modal |
| `PopoverDirection` | BOTTOM → `'bottom'`, LEFT → `'left'`, RIGHT → `'right'` | Direction popover |
| `TextMarkup` | P → `'p'`, SPAN → `'span'` | Balise HTML du Text |
| `TitleMarkup` | H1 → `'h1'`, H2 → `'h2'`, ..., P → `'p'`, SPAN → `'span'`, DIV → `'div'` | Balise HTML du Title |
| `TypographyAlign` | TEXT_LEFT → `'has-text-left'`, TEXT_CENTERED → `'has-text-centered'`, TEXT_RIGHT → `'has-text-right'` | Alignement typo |
| `TypographyBold` | TEXT_WEIGHT_NORMAL → `'has-text-weight-normal'`, TEXT_WEIGHT_SEMIBOLD → `'has-text-weight-semibold'`, TEXT_WEIGHT_BOLD → `'has-text-weight-bold'` | Poids typo |

```tsx
// DO ✅ — Toujours utiliser l'accessor pour les enums lowercase
<FlexBox direction={DirectionEnum.ROW}>
<Button markup={ButtonMarkup.A} href="/offres">

// DON'T ❌ — Ne JAMAIS passer une string uppercase pour ces enums
<FlexBox direction="ROW">      // ← Erreur TypeScript !
<Button markup="BUTTON">       // ← Erreur TypeScript !
```

### Enums à valeurs numériques

| Enum | Accessor → Valeur | Usage |
|------|-------------------|-------|
| `GapSize` | ZERO → 0, ONE → 1, TWO → 2, ..., TEN → 10 | Espacement (Columns, FlexBox) |
| `PriceLevel` | ONE → 1, TWO → 2, ..., SEVEN → 7 | Niveau typographique du Price |
| `SpacerSize` | ZERO → 0, ONE → 4, TWO → 8, THREE → 12, FOUR → 16, FIVE → 24, SIX → 32, SEVEN → 40, EIGHT → 48, NINE → 56, TEN → 64 | Taille Spacer (px) |
| `TitleLevels` | ONE → 1, TWO → 2, ..., SIX → 6 | Niveau de titre |
| `TextLevels` | ONE → 1, TWO → 2, THREE → 3, FOUR → 4 | Niveau de texte |
| `BoxItemSize` | NONE → 0, SMALL → 16, MEDIUM → 32, LARGE → 64, HUGE → 96 | Taille de BoxItem |

---

## Couleurs (enum `TrilogyColor`)

| Token | Usage |
|-------|-------|
| MAIN | Éléments principaux, texte, titres |
| MAIN_FADE | Fonds légers teintés bleu |
| ACCENT | CTA conversion, accent fort |
| ACCENT_FADE | Fonds d'accent légers |
| SUCCESS / SUCCESS_FADE | Confirmation, validation |
| ERROR / ERROR_FADE | Erreurs, alertes critiques |
| WARNING / WARNING_FADE | Avertissements |
| INFO / INFO_FADE | Informations |
| NEUTRAL | Gris neutre |
| NEUTRAL_FADE | **Fonds de section alternés** (usage recommandé) |
| BACKGROUND | Fond blanc (section par défaut) |
| FONT / FONT_PLACEHOLDER | Texte / placeholder |
| DISABLED / DISABLED_FADE | État désactivé |
| STROKE / STROKE_FADE | Bordures et séparateurs |

---

## Design Principles

### Layout

- Toujours `<Section>` → `<Container>` → contenu
- Alterner les backgrounds : BACKGROUND → NEUTRAL_FADE → BACKGROUND
- `<Hero>` pour le header visuel, toujours envelopper le contenu dans `<Container>`
- `<Columns multiline gap={GapSize.TWO}>` pour les grilles
- `mobileSize={12}` sur les colonnes pour le responsive mobile
- Pas de `size={1}` ou `size={2}` (illisible mobile)

### Composition

- Composer par enfants (children), pas par props complexes
- Toujours utiliser les sous-composants (voir table ci-dessus)
- `<Sticker label="..." />` — jamais de children
- `<Alert title="..." description="..." />` — jamais de children
- `<AccordionItem open>` — jamais `active`
- Import depuis la racine : `import { ... } from '@trilogy-ds/react'`

### Responsive (FlexBox)

- `direction`, `justify`, `align`, `gap`, `wrap` acceptent des objets responsives :
  ```tsx
  <FlexBox
    direction={{ mobile: DirectionEnum.COLUMN, desktop: DirectionEnum.ROW }}
    gap={{ mobile: GapSize.TWO, desktop: GapSize.FOUR }}
  >
  ```

### Erreurs critiques à éviter

| Erreur | Solution |
|--------|----------|
| `<div>` au lieu de `<Section>` | Utiliser `<Section>` |
| Contenu hors `<Container>` | Toujours wrapper dans `<Container>` |
| `className="..."` ou `style={{}}` | Props Trilogy uniquement |
| `background={...}` | `backgroundColor={...}` |
| `<Sticker>text</Sticker>` | `<Sticker label="text" />` |
| `<Alert>contenu</Alert>` | `<Alert title="..." description="..." />` |
| `<FlexBox direction="ROW">` | `<FlexBox direction={DirectionEnum.ROW}>` |
| `<AccordionItem active>` | `<AccordionItem open>` |
| `<Title level={2}>` | `<Title level={TitleLevels.TWO}>` |
