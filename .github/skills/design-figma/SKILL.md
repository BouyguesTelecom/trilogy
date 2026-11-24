---
name: design-figma
description: "Créer ou modifier un composant Figma Trilogy avec ses propriétés UI, une page par composant et des variables sémantiques. À utiliser pour concevoir ou actualiser un composant dans Figma via Figma MCP."
argument-hint: "Nom du composant, propriétés UI et spécifications visuelles"
---

# Design de composant Figma

## Objectif et limites

Créer ou modifier le composant demandé dans le véritable fichier Figma à l'aide de Figma MCP. Le livrable comporte exclusivement des propriétés **UI** : variantes, états visuels et propriétés d'instance nécessaires au design. Ne crée pas de props fonctionnelles telles que les callbacks, la navigation ou la logique métier ; ne confonds pas variables, propriétés de variantes et propriétés d'instance. Respecte les spécifications explicites de l'utilisateur.

## Fichier et outils

1. Utilise la clé ou l'URL explicitement fournie ; sinon, utilise `FIGMA_FILE_KEY` dans le `.env` à la racine du dépôt, puis dans l'environnement si elle est absente du fichier. Si aucune cible n'est disponible, demande-la. Lis seulement la clé de fichier nécessaire : ne révèle, ne journalise et ne transmets jamais un jeton ou autre secret dans les messages ou appels d'outils.
2. Utilise le serveur Figma MCP configuré dans le projet. Crée une session dès que la clé est connue avant tout accès au fichier et réutilise-la pour toute la tâche. Charge les guides officiels Figma requis par les outils disponibles, notamment `figma-use` et `figma-generate-library` pour une création ou modification de composant ; respecte leurs prérequis, leur recherche et leur validation. Réutilise la session fournie si cette étape fait partie d'un workflow déjà commencé.
3. Inspecte d'abord les pages, composants locaux, bibliothèques liées, variables et styles pertinents. Recherche un composant existant avant d'en créer un. Si plusieurs candidats sont plausibles, demande lequel utiliser ; ne crée pas de doublon. N'édite pas une bibliothèque externe sans autorisation.

## Organisation et variables

- Une **page Figma dédiée par composant autonome**, nommée d'après celui-ci. Ses variantes, états, exemples et parties liées peuvent partager sa page. Recherche et réutilise une page dédiée existante ; ne place pas plusieurs composants autonomes sur une page commune.
- Si le composant existe sur une page partagée, ne le duplique pas et ne le déplace pas automatiquement : signale la situation et demande confirmation avant un déplacement pouvant affecter ses références ou usages. Pour plusieurs composants, applique cette règle à chacun.
- Lie directement les propriétés visuelles aux **variables sémantiques** du design system, jamais directement aux variables primitives : couleurs de texte et de fond, bordures et leur épaisseur, padding et espacements, tailles, rayons, familles et tailles de police, graisses, et toute autre propriété pertinente et prise en charge par Figma. Les variables sémantiques peuvent elles-mêmes être des alias vers des primitives : conserve ces alias.
- Recherche d'abord les variables sémantiques locales ou de bibliothèque et leurs valeurs, modes et scopes. Respecte les modes, y compris light/dark, et évite les valeurs codées en dur lorsqu'une variable sémantique appropriée existe. Ne modifie pas les primitives ni les variables partagées pour adapter un seul composant.
- Si aucune variable sémantique adaptée n'existe, si une propriété ne peut pas être liée par l'API Figma, si une police ou un mode manque, ou si l'équivalence est incertaine : indique la propriété et le blocage, puis demande une décision avant d'inventer une valeur, d'utiliser une primitive directement ou de créer/modifier un token partagé.

## Création, modification et validation

1. Analyse la demande et identifie les propriétés UI, valeurs, états, contenu éditable, valeurs par défaut et structure attendus. Ne crée pas de variantes ou propriétés non demandées sans justification.
2. Crée le composant manquant ou modifie de façon ciblée le composant local existant, sans le recréer inutilement. Une demande de modification autorise les modifications ciblées nécessaires ; demande confirmation avant une suppression, un remplacement complet ou une modification incompatible non explicitement demandés.
3. Utilise les composants, styles et variables sémantiques pertinents du design system. Pour un composant complexe, organise ses parties réutilisables de façon cohérente avec le design et la demande, sans découper artificiellement un composant simple.
4. Vérifie le composant Figma réellement obtenu : page, structure, propriétés UI et valeurs, variantes, modes, bindings sémantiques et rendu. Signale les liaisons impossibles à réaliser ; ne prétends pas qu'un design incomplet est vérifié. En cas d'accès ou d'outil manquant, précise le blocage et arrête au lieu de simuler la modification.
5. Transmets à l'étape suivante le lien Figma avec identifiant du composant, la page, les propriétés UI et leurs valeurs par défaut, les variables sémantiques utilisées, les modes et les éventuelles limites. Ne modifie pas le code React dans ce skill.
