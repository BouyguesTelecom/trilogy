# Landing Page Generation — Trilogy

## Objectif

Générer une landing page (LP) autoportante sous forme d'un seul fichier HTML statique, exécutable directement dans le navigateur sans étape de build.

Le fichier utilise :
- **Babel Standalone** pour la transpilation JSX côté client
- **Import Maps** pour résoudre les modules ES (React, Trilogy) via CDN
- **Trilogy CSS** chargé depuis le CDN assets Bouygues Telecom

---

## Template de base

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<title>Landing Page — Trilogy</title>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><circle cx='8' cy='24' r='24' fill='%2325465F'/></svg>">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-styles@4.5.1/default/trilogy.css" />
<script crossorigin="anonymous" src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.3.1",
        "react-dom": "https://esm.sh/react-dom@18.3.1",
        "react-dom/client": "https://esm.sh/react-dom@18.3.1/client",
        "@trilogy-ds/react": "https://esm.sh/@trilogy-ds/react@4.6.0-beta-7/lib/components/index.mjs?external=react,react-dom"
      }
    }
</script>
</head>
<body>
<div id="root"></div>
<script type="text/babel" data-type="module">
    import React from "react";
    import {
      Section, Container, Columns, Column,
      Hero, Title, Text,
      Button,
      Card, CardContent, CardImage,
      Divider, Price, Sticker, Alert,
      Accordion, AccordionItem, AccordionHeader, AccordionBody,
      Icon, Image, Link
    } from "@trilogy-ds/react";

    const App = () => (
      <main>
        {/* 1. Hero — Accroche visuelle */}
        <Hero backgroundColor="MAIN" inverted>
          <Container>
            <Title level="1" inverted>
              {/* Titre principal — voix Speak */}
            </Title>
            <Text inverted>
              {/* Sous-titre — bénéfice client */}
            </Text>
            <Button variant="CONVERSION">
              {/* CTA principal — Infinitif + Objet */}
            </Button>
          </Container>
        </Hero>

        {/* 2. Section offres */}
        <Section>
          <Container>
            <Title level="2">
              {/* Titre de section — voix Speak */}
            </Title>
            <Columns multiline gap={2}>
              {/* Cards offres en colonnes de 4 */}
            </Columns>
          </Container>
        </Section>

        {/* 3. Section avantages (fond alterné) */}
        <Section backgroundColor="NEUTRAL_FADE">
          <Container>
            {/* Contenu avantages */}
          </Container>
        </Section>

        {/* 4. Section FAQ */}
        <Section>
          <Container>
            <Title level="2">Questions fréquentes</Title>
            <Accordion id="faq">
              {/* AccordionItems */}
            </Accordion>
          </Container>
        </Section>

        {/* 5. Section CTA final */}
        <Section backgroundColor="ACCENT_FADE">
          <Container>
            {/* Rappel CTA */}
          </Container>
        </Section>
      </main>
    );

    // Render
    import { createRoot } from "react-dom/client";
    createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>
```

---

## Checklist de génération

### Structure HTML

- [ ] Fichier `.html` unique, autoportant (aucune dépendance locale)
- [ ] `<meta charset="UTF-8" />` et `<meta name="viewport" ...>`
- [ ] Lien CSS Trilogy via CDN (`assets.bouyguestelecom.fr`)
- [ ] `<script>` Babel Standalone chargé avant le code JSX
- [ ] `<script type="importmap">` avec les imports React + Trilogy
- [ ] `<script type="text/babel" data-type="module">` pour le code JSX
- [ ] `<div id="root"></div>` comme point de montage
- [ ] `createRoot(document.getElementById("root")).render(<App />)` en fin de script

### Structure React

- [ ] `<main>` comme racine sémantique du composant App
- [ ] Minimum 3 sections, maximum 7
- [ ] Alternance de fonds (blanc → NEUTRAL_FADE → blanc)
- [ ] Hero en premier
- [ ] CTA final en dernier

### Composants

- [ ] Aucune balise HTML native dans le JSX (`div`, `p`, `h1`, `span`, etc.)
- [ ] Aucun CSS custom (ni inline, ni fichier, ni className custom)
- [ ] Tous les imports depuis `@trilogy-ds/react`
- [ ] Props enum en string lowercase ou UPPERCASE selon l'API (`level="1"`, `variant="CONVERSION"`, `backgroundColor="MAIN"`)
- [ ] Props `inverted` sur les textes/titres quand fond sombre
- [ ] `Sticker` utilise `label="..."` (jamais children)
- [ ] `Alert` utilise props `title` et `description` (jamais children)
- [ ] `backgroundColor` sur Section/Hero (jamais `background`)

### Contenu

- [ ] Titres en voix "Speak" (T1, T2) — phrases naturelles, pas de point final
- [ ] Boutons : `<Infinitif + Objet>`, max 25 caractères
- [ ] Prix au format `XX,XX€/mois`
- [ ] Un seul CTA conversion (ACCENT) répété max 2 fois
- [ ] Pas de lorem ipsum — contenu réaliste ou placeholder explicite

### Responsive

- [ ] `Columns multiline` pour le wrap mobile
- [ ] `mobileSize={12}` sur les Column pour forcer pleine largeur mobile
- [ ] Pas de layout en `size={2}` ou `size={1}` (illisible en mobile)
- [ ] Images avec `alt` descriptif

---

## Anatomie d'une LP type

| Section | Contenu | Background |
|---------|---------|------------|
| Hero | Titre + sous-titre + CTA | MAIN ou image |
| Offres | 2-3 cards en colonnes | blanc |
| Avantages | Icônes + textes ou columns | MAIN_FADE |
| Témoignages / Chiffres | Preuves sociales | blanc |
| FAQ | Accordion 3-5 questions | blanc ou MAIN_FADE |
| CTA final | Rappel du CTA conversion | ACCENT_FADE |

---

## Variantes

### LP offre commerciale (box / forfait)

Focus : comparatif prix, features, CTA conversion. Sections : Hero → Offres (Cards) → Comparatif → FAQ → CTA.

### LP événement (promo / Black Friday)

Focus : urgence, stickers promo, countdown. Sections : Hero visuel → Offres promo → Avantages → CTA.

### LP service (assistance / info)

Focus : clarté, étapes, FAQ. Sections : Hero → Étapes (Stepper) → FAQ → Contact.

---

## Erreurs fréquentes à éviter

| Erreur | Impact | Solution |
|--------|--------|----------|
| Fichier `.tsx` au lieu de `.html` | Nécessite un bundler | Fichier `.html` autoportant avec Babel Standalone |
| Oubli de `type="text/babel"` | JSX non transpilé, erreur navigateur | `<script type="text/babel" data-type="module">` |
| Oubli de `data-type="module"` | `import` non reconnu par Babel | Ajouter `data-type="module"` sur le script |
| Importmap manquant ou mal formé | Modules non résolus | Vérifier le JSON dans `<script type="importmap">` |
| `<div>` au lieu de `<Section>` | Pas de padding/background | Utiliser `<Section>` |
| Contenu hors `<Container>` | Pas de marges, déborde | Toujours wrapper dans `<Container>` |
| `className="..."` | Style cassé, non maintenable | Props Trilogy uniquement |
| Trop de CTA différents | Confusion utilisateur | 1 seul message de conversion |
| Sections sans fond alternant | Page monotone | Alterner blanc/NEUTRAL_FADE |
| `background={...}` sur Section/Hero | Prop inexistante | `backgroundColor="..."` |
| `<Sticker>text</Sticker>` | API incorrecte | `<Sticker label="text" />` |
| `<Alert>contenu</Alert>` | API incorrecte | `<Alert title="..." description="..." />` |
| `centered` sur Hero | Prop inexistante | Gérer via `<Container>` + FlexBox |
| `<AccordionItem active>` | Prop inexistante | `<AccordionItem open>` |
| Utiliser des enums TS (`TitleLevels.ONE`) | Non disponible sans TypeScript | Utiliser les strings : `level="1"` |