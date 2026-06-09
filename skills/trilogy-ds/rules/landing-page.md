# Landing Page Generation — Trilogy
---

## Objectif

Générer une landing page (LP) autoportante sous forme d'un seul fichier HTML statique, exécutable directement dans le navigateur sans étape de build.

Le fichier utilise :
- **Babel Standalone** pour la transpilation JSX côté client
- **Import Maps** pour résoudre les modules ES (React, Trilogy) via CDN
- **Trilogy CSS** chargé depuis le CDN assets Bouygues Telecom

---

## Quand appliquer ces règles

> ⚠️ **Ce fichier ne s'applique QUE lorsque l'utilisateur demande explicitement une landing page _autoportante_** (un seul fichier HTML statique, exécutable sans build).
>
> **Sinon, ne PAS suivre ce template.** Par défaut, générer du **Trilogy en React classique** :
> composants `.tsx`/`.jsx` dans un projet (Next.js, Vite, CRA…), imports ES standards depuis
> `@trilogy-ds/react`, `TrilogyProvider`, build via le bundler du projet. Aucun fichier HTML
> unique, ni Babel Standalone, ni import map, ni CDN esm.sh.
>
> Indices déclencheurs de ce mode autoportant : « page autoportante », « un seul fichier HTML »,
> « sans build », « ouvrable en double-clic », « fichier `.html` statique ». En l'absence de ces
> demandes, rester sur du React classique.

---

## ⚠️ Pièges runtime VÉRIFIÉS — à lire avant toute génération

> Ces règles évitent le symptôme nº1 : **page blanche** (le JSX compile, mais le rendu
> React plante au montage avec une erreur minifiée du type
> `TypeError: Cannot read properties of undefined (reading '1')`).
> Elles sont confirmées empiriquement sur le bundle
> `@trilogy-ds/react@4.6.0-beta-7` servi via `esm.sh` (le bundle du template).

### 1. Composants NON exportés par ce bundle esm.sh — NE PAS les importer

| Composant importé | Symptôme | Remplacer par |
|-------------------|----------|---------------|
| `FlexBox` / `FlexItem` | `does not provide an export named 'FlexBox'` → page blanche | `Columns` + `Column` (grille 12) |
| `Box` / `BoxContent` (pour un simple bloc) | rendu instable | `Card` + `CardContent` |
| `TrilogyProvider` | `export named 'TrilogyProvider'` introuvable | **Rien** : inutile, les composants fonctionnent sans Provider |
| `Spacer` (selon versions) | montage KO | `<Divider invisible />` |

> ⚠️ Le SKILL.md principal cite `FlexBox`/`FlexItem` comme primitives responsive.
> **Dans une LP autoportante via ce CDN, elles ne sont pas disponibles** : rester sur
> `Columns`/`Column`. Pour les layouts verticaux, empiler les composants + `<Divider invisible />`.

### 2. Valeurs d'enum qui font CRASHER le rendu

| Valeur | Symptôme | Solution |
|--------|----------|----------|
| `backgroundColor="ACCENT_FADE"` sur `Section`/`Hero` | `Cannot read properties of undefined (reading '1')` → page blanche | Utiliser `"MAIN_FADE"` ou `"NEUTRAL_FADE"` (les seuls `_FADE` vérifiés OK) |

> Règle de prudence : pour les fonds de section, se limiter à `MAIN`, `NEUTRAL_FADE`,
> `MAIN_FADE`, `BACKGROUND`. Ne pas utiliser de token `_FADE` non vérifié.

### 3. Ouverture SANS serveur (double-clic `file://`)

- ✅ **La page S'OUVRE en `file://`** (double-clic) **dès lors que le code React est correct** :
  les `import` de l'importmap pointent vers des URL `https://esm.sh`, pas vers le disque.
- L'avertissement console `'file:' URLs are treated as unique security origins` est **bénin**
  (il concerne des ressources annexes) et **n'empêche pas** le rendu.
- 🔑 **Conséquence** : si la page est blanche en `file://`, le problème n'est PAS le `file://`
  mais une **erreur de composant/enum** (voir §1 et §2). Ne pas perdre de temps à monter un
  serveur — corriger le JSX.

### 4. Composants & props VÉRIFIÉS OK (utiliser ce sous-ensemble en priorité)

`Section`, `Container`, `Columns`, `Column` (`size`, `mobileSize`), `Hero`
(`backgroundColor`, `inverted`), `Title` (`level="1"`…`"6"`, `inverted`), `Text`
(`inverted`), `Button` (`variant="CONVERSION|SECONDARY|GHOST"`, `fullwidth`,
`markup="a"` + `href`), `Card` (`fullheight`, `floating`, `flat`), `CardContent`,
`Divider` (`invisible`), `Price` (`amount`, `period`, `mention`), `Sticker`
(`variant`, `label`), `Alert` (`status`, `title`, `description`, `display`),
`Accordion` + `AccordionItem` (`open`) + `AccordionHeader` + `AccordionBody`,
`Icon` (`name="tri-…"`, `color`, `status`, `size`, `markup="span"`), `Link` (`href`).

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
        <Section backgroundColor="MAIN_FADE">
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
- [ ] **Aucun import de `FlexBox`, `FlexItem`, `TrilogyProvider`** (non exportés par le bundle esm.sh → page blanche)
- [ ] **Layout via `Columns`/`Column` uniquement** (pas de FlexBox) ; espacement vertical via `<Divider invisible />`
- [ ] **Aucun `backgroundColor="ACCENT_FADE"`** — se limiter à `MAIN`, `MAIN_FADE`, `NEUTRAL_FADE`, `BACKGROUND`
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
| CTA final | Rappel du CTA conversion | MAIN_FADE |

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
| `centered` sur Hero | Prop inexistante | Gérer via `<Container>` + Columns |
| `<AccordionItem active>` | Prop inexistante | `<AccordionItem open>` |
| Utiliser des enums TS (`TitleLevels.ONE`) | Non disponible sans TypeScript | Utiliser les strings : `level="1"` |
| Importer `FlexBox` / `FlexItem` | `does not provide an export named 'FlexBox'` → **page blanche** | Layout en `Columns` / `Column` |
| Importer `TrilogyProvider` | Export introuvable sur le bundle esm.sh | Le retirer : inutile |
| `backgroundColor="ACCENT_FADE"` | `Cannot read properties of undefined (reading '1')` → **page blanche** | `"MAIN_FADE"` ou `"NEUTRAL_FADE"` |
| Monter un serveur à cause d'une page blanche en `file://` | Perte de temps : le `file://` n'est pas la cause | Corriger le composant/enum fautif (§1 et §2 ci-dessus) |
| Diagnostiquer une erreur React minifiée à l'aveugle | Stack illisible | Bissection : envelopper les sections suivantes dans `{false && (<>…</>)}` et réactiver une à une |