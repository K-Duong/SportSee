# SportSee App
SportSee est le projet 12 de la formation "Développeur d'application Javascript-React. Dans ce projet, l'application contient un tableau de bord d'analytics de coaching sportif.
L'objectif est d'intégrer des graphiques et des diagrammes en utilisant React et de récupérer des données via une API.

## Pré-requis :
- [@yarn](https://yarnpkg.com)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 

## Structure du projet : 
- Le back-end, disponible ici :  [@sportSee/back-end](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- Le front-end (ce dépôt)

## Installer l'environnement du front-end :
Clonez le projet : 
```
$ git clone https://github.com/K-Duong/SportSee.git
```
Allez au repo cloné :
```
$ cd SportSee
```
Installez les dépendances avec Yarn : (décrits dans `package.json`) :
```
$ yarn install
```
Lancez le projet en mode dev :
```
$ yarn dev
```
Ouvrez votre navigateur et allez à l'adresse : `http://127.0.0.1:5173/`

## Lancer le back-end : 

Clonez le projet : 
```
$ git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```
Allez au repo cloné :
```
$ cd P9-front-end-dashboard
```
Suivez les instructions dans README.md du repo cloné lancer la partie back-end.

**Attention : Actuellement, seuls deux IDs utilisateurs sont disponibles pour les tests : "12" et "18". Vous pouvez les modifier manuellement en changeant la variable "id" dans "src/context/UserProvider.jsx".**