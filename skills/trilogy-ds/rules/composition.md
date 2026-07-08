# Component Composition — Trilogy

## Principes de composition

### 1. Composition par enfants (children)

Les composants Trilogy se composent par imbrication, pas par props complexes.

```tsx
// DO ✅ — Composition naturelle
<Card>
  <CardImage src="..." />
  <CardContent>
    <Title level={TitleLevels.THREE}>Bbox Ultym</Title>
    <Text>La box la plus performante</Text>
    <Price amount={42.99} period="/mois" />
  </CardContent>
</Card>

// DON'T ❌ — Pas de props "slots"
<Card title="Bbox Ultym" description="..." price={42.99} />
```

### 2. Sous-composants

Beaucoup de composants Trilogy ont des sous-composants. Toujours les utiliser quand ils existent :

| Composant | Sous-composants |
|-----------|------------------|
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

> Pour les props de chaque sous-composant : `https://design.bouyguestelecom.fr/api/components/{Name}?format=markdown`

### 3. Props enum

Utiliser les enums TypeScript ou les strings correspondantes :

```tsx
import { 
  Button, 
  ButtonVariant, 
  ButtonMarkup,
  Title,
  TitleLevels,
  Alert,
  StatusState,
  DirectionEnum
} from '@trilogy-ds/react'

// DO ✅ — Enums (toujours correct)
<Button variant={ButtonVariant.CONVERSION}>Choisir</Button>
<Title level={TitleLevels.TWO}>Section</Title>
<Alert status={StatusState.SUCCESS} title="Confirmé" description="Votre action est validée." />

// DO ✅ — Strings UPPERCASE (acceptées pour ButtonVariant, StatusState, Justify, Align, TrilogyColor)
<Button variant="CONVERSION">Choisir</Button>
<Alert status="SUCCESS" title="Confirmé" description="Votre action est validée." />

// DON'T ❌ — Strings minuscules ou nombres
<Button variant="conversion">Choisir</Button>
<Title level={2}>Section</Title>
```

⚠️ **Enums à valeurs lowercase** — Ne JAMAIS passer de string, toujours l'accessor :

```tsx
// DO ✅ — Accessor obligatoire pour DirectionEnum, ButtonMarkup, TextMarkup, TitleMarkup
<FlexBox direction={DirectionEnum.ROW}>
<Button markup={ButtonMarkup.A} href="/offres">

// DON'T ❌ — String uppercase = Erreur TypeScript !
<FlexBox direction="ROW">
<Button markup="A">
```

---

## Patterns de composition courants

### Card offre (forfait / box)

```tsx
<Card>
  <CardContent>
    <Sticker variant="ACCENT" label="-5€/mois pendant 12 mois" />
    <Title level={TitleLevels.THREE}>Bbox fit</Title>
    <Columns>
      <Column size={6}>
        <Text>Débit descendant</Text>
        <Title level={TitleLevels.FOUR}>↓400 Mb/s</Title>
      </Column>
      <Column size={6}>
        <Text>Débit montant</Text>
        <Title level={TitleLevels.FOUR}>↑400 Mb/s</Title>
      </Column>
    </Columns>
    <Divider />
    <Price amount={32.99} period="/mois" />
    <Button variant={ButtonVariant.CONVERSION} fullwidth>
      Choisir cette Bbox
    </Button>
  </CardContent>
</Card>
```

### Accordion FAQ

```tsx
<Accordion id="faq">
  <AccordionItem id="q1" open>
    <AccordionHeader>
      <Title level={TitleLevels.FOUR}>Comment tester mon éligibilité ?</Title>
    </AccordionHeader>
    <AccordionBody>
      <Text>
        Renseignez votre adresse dans le formulaire ci-dessus.
        Vous saurez immédiatement quelle technologie est disponible chez vous.
      </Text>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem id="q2">
    <AccordionHeader>
      <Title level={TitleLevels.FOUR}>Quels sont les délais d'installation ?</Title>
    </AccordionHeader>
    <AccordionBody>
      <Text>
        En moyenne, comptez 2 semaines entre votre commande et l'activation de votre ligne.
      </Text>
    </AccordionBody>
  </AccordionItem>
</Accordion>
```

### Alert contextuelle

```tsx
<Alert
  status="INFO"
  title="Votre offre évolue le 15 mars"
  description="Votre forfait passe automatiquement à 100 Go sans surcoût. Aucune action requise de votre part."
  display
/>
```

### Modal

```tsx
<Modal
  title="Confirmer votre choix"
  active={isOpen}
  onClose={() => setIsOpen(false)}
  trigger={
    <Button variant={ButtonVariant.PRIMARY} onClick={() => setIsOpen(true)}>
      Ouvrir
    </Button>
  }
>
  <ModalBody>
    <Text>Êtes-vous sûr de vouloir changer de forfait ?</Text>
  </ModalBody>
  <ModalFooter>
    <Button variant={ButtonVariant.CONVERSION}>Confirmer</Button>
    <Button variant={ButtonVariant.GHOST} onClick={() => setIsOpen(false)}>Annuler</Button>
  </ModalFooter>
</Modal>
```

### Hero avec CTA

```tsx
<Hero backgroundSrc="/images/hero-fibre.jpg" inverted>
  <Container>
    <Title level={TitleLevels.ONE} inverted>
      Internet partout chez vous
    </Title>
    <Text inverted>
      Découvrez nos offres fibre, box et mobile
    </Text>
    <Button variant={ButtonVariant.CONVERSION}>
      Tester mon éligibilité
    </Button>
  </Container>
</Hero>
```

### Prix complexe

```tsx
<FlexBox align={Align.CENTER} gap={GapSize.TWO}>
  <Price amount={23.99} period="/mois" />
  <Sticker variant="ACCENT" label="-5€/mois" />
</FlexBox>
<Text level={TextLevels.FOUR}>puis 28,99€/mois</Text>
```

### Props `<Price>` — Référence

| Prop | Type | Description |
|------|------|-------------|
| amount | number | Montant principal |
| period | string | Période (`"/mois"`, `"/an"`) |
| level | PriceLevel | Taille (ONE à SEVEN) |
| oldAmount | number | Prix barré (ancien prix) |
| mention | string | Mention légale sous le prix |
| overline | string | Texte au-dessus du prix |
| hideCents | boolean | Masque les centimes |
| inverted | boolean | Texte blanc sur fond sombre |

```tsx
// Prix avec ancien prix barré et mention
<Price
  amount={23.99}
  oldAmount={28.99}
  period="/mois"
  mention="Engagement 12 mois"
  level={PriceLevel.THREE}
/>
```

### Props `<Card>` — Référence

| Prop | Type | Description |
|------|------|-------------|
| flat | boolean | Sans ombre |
| horizontal | boolean | Layout horizontal (image à gauche) |
| floating | boolean | Effet flottant (ombre accentuée) |
| reversed | boolean | Inversé (contenu avant image) |
| active | boolean | État actif (sélection) |
| href | string | Card cliquable (lien) |
| skeleton | boolean | Placeholder de chargement |
| fullheight | boolean | Hauteur 100% |

```tsx
// Card horizontale cliquable
<Card horizontal href="/offres/bbox-fit">
  <CardImage src="/images/bbox-fit.jpg" />
  <CardContent>
    <Title level={TitleLevels.FOUR}>Bbox fit</Title>
    <Text>À partir de 32,99€/mois</Text>
  </CardContent>
</Card>

// Card avec état actif (sélection d'offre)
<Card active={selectedOffer === 'ultym'} onClick={() => setSelectedOffer('ultym')}>
  <CardContent>
    <Title level={TitleLevels.THREE}>Bbox ultym</Title>
  </CardContent>
</Card>
```

### Columns responsive pour cards d'offres

```tsx
<Columns multiline gap={2}>
  {offers.map((offer) => (
    <Column size={4} mobileSize={12} key={offer.id}>
      <Card>{/* ... */}</Card>
    </Column>
  ))}
</Columns>
```

---

## Anti-patterns

| Anti-pattern | Correction |
|--------------|-----------|
| `<div className="columns">` | `<Columns>` |
| `style={{ display: 'flex' }}` | `<FlexBox>` |
| `<h2>Titre</h2>` | `<Title level={TitleLevels.TWO}>` |
| `<p>Texte</p>` | `<Text>` |
| `<button>CTA</button>` | `<Button>` |
| `<a href="...">Lien</a>` | `<Link>` ou `<Button markup={ButtonMarkup.A}>` |
| `<img src="..." />` | `<Image src="..." alt="..." />` |
| CSS modules / Tailwind | Props Trilogy (variant, backgroundColor, inverted...) |
| `className="is-active"` | Props boolean (`open`, `inverted`, etc.) |
| `<Sticker>texte</Sticker>` | `<Sticker label="texte" />` |
| `<Alert>contenu</Alert>` | `<Alert title="..." description="..." />` |
| `background={...}` | `backgroundColor={...}` |

---

## Import pattern

Toujours importer depuis la racine du package :

```tsx
// DO ✅ — Import groupé
import { 
  Section, Container, Columns, Column,
  Title, TitleLevels, Text, TextLevels,
  Button, ButtonVariant,
  Card, CardContent, CardImage,
  Image, Sticker, Price,
  TrilogyColor, StatusState, VariantState
} from '@trilogy-ds/react'

// DON'T ❌ — Imports profonds
import { Section } from '@trilogy-ds/react/components/section'
```

---

## Fallback — API Reference

Pour les props non documentées ici, consulter la référence complète :

```
https://design.bouyguestelecom.fr/api/components/{Name}?format=markdown
```
