# INFRASTRUCTURE ET DEVOPS - RENDU

## Table des matières :

1. Informations Générales
2. Outils et logiciels
3. À l'installation
4. Versions
5. Getting Started with Create React App

---

## 1- Informations générales

Membres du groupe : Julien Barri, Elea Brochin, Marie Fabre

Theme : anime et manga

Lien repository GitHub : https://github.com/elea128/anime_manga.github.io

Lien Netlify : https://anime-mon-manga.netlify.app

Lien Heroku (lien db hébergée) : https://anime-mon-manga.herokuapp.com/

Ports utilisés en local :

- Port du site : 3000
- Port de la BDD : 3004

---

## 2- Outils et logiciels

- Eslint, version 8.17.0
- Husky, version 8.0.0
- Nodemon, version 2.0.16
- Prettier, version 2.7.1
- GitFlow
- Cypress
- Gitmoji
- Heroku, pour héberger la db en ligne

---

## 3- À l'installation

### `Clôner le répertoire suivant` :

```
$ git clone https://github.com/elea128/anime_manga.github.io.git
```

### `Se rendre dans le fichier et installer npm` :

```
$ npm install
```

### `Installer le react-router-dom package` :

```
$ npm install react-router-dom
```

### `Ouvrir la base de données` :

Dans un second terminal :

```
$ npm install -g json-server
$ json-server --watch db.json --port 3004
```

### `Ouvrir l'application` :

Revenir dans le premier terminal sans fermer le second

```
$ npm run start / $ npm start
```

### `Récupération du code et passage sur la branch develop` :

```
$ git checkout .
$ git pull origin main
$ git checkout develop
```

Vous pouvez coder !

---

## 4- Versions

### `Version 1.0.0`

Création de l'ensemble des fonctionnalités du projet sans style

### `Version 2.0.0`

Mis en place du css sur l'ensemble des pages

### `Version 2.0.1`

Patch correctif pour sur Netlify + quelques correctifs de css

### `Version 2.0.2`

Déploiement de la db sur heroku pour Netlify

### `Version 2.0.3`

Corrections bugs redirections sur Netlify

### `Version 2.0.4`

Patch redirection routes

### `Version 2.1.4`

MAJ du Readme
Ajout de la data

### `Version 2.2.4`

Modification du lien de redirection dans DisplayEvent "Save" -> "Edit"

---

## 5- Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
