# Documentation des composants

Les exemples et la référence des propriétés proviennent des fichiers `docs.md`
placés à côté des composants React. Les sections Usage et Do & Don't sont
chargées depuis la même API Directus que trilogy-guide, en recherchant le nom
exact du composant. Les données sont mises en cache pendant une heure. Quand
l'API est indisponible ou qu'elle ne contient pas de recommandations pour un
composant, la page reste accessible et indique que celles-ci ne sont pas
disponibles.

Configurer la variable serveur `DIRECTUS_SERVER_HOST` dans le fichier
[.env](.env) de cette application, à partir de [.env.example](.env.example), ou
dans l'environnement de déploiement. Elle doit contenir l'URL de base de
l'instance Directus. Sans cette configuration, les recommandations restent
indisponibles. Les règles affichent uniquement leur contenu textuel.
