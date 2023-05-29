<p align="center">
  <img src="frontend/sportsee/src/assets/logo.svg"  alt="" width="256">
</p>

<h1 align="center">SportSee</h1>

<p align="center">
  This is the source code for SportSee analytics dashboard.
</p>

## Prerequisites

- [NodeJS (at least v16.0)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Npm](https://www.npmjs.com)

You need to have SportSee's API running. [Read more here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

## Install

Clone this repository
```bash
git clone https://github.com/MahavishnuT/Projet_12 SportSee && cd frontend/sportsee
```

Install dependencies
```bash
yarn install or npm install
```


Start the app in development mode
```bash
yarn start or npm start
```
Launch the backend first that you can find in the /api file, follow the instructions for the backend on the other repo. Then launch the app.
The app is served at [http://localhost:3001](http://localhost:3001) if the API is served on port 3000 (default). The page will reload if you make edits.

## Usage
As the authentification is not yet implemented, you need to provide a user id through the GET param `userId`.
Two buttons were implemented to navigate through the app, but they will be taken off as the app development carries on.

***Currently, two users have been mocked in the provided API. They have id 12 and 18 respectively***

## Deploy

Build the app for production to the `build` folder.
```bash
yarn build or npm build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

Read Create-React-App doc about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
