# CareCrowd


This is a website dedicated to volunteer management. Users may post volunteer opportunities and search for posts based on their title. Users can also volunteer for a different post.

Live Site Link: [https://volunteer-management-91459.web.app](https://volunteer-management-91459.web.app)

## Features and Characteristics:

- Responsive design for seamless experience across devices
- Secure user authentication and authorization system
- Title-based search to find relevant volunteer opportunities.


## Technology uses

- React
- Express
- MongoDB

## How to run this project in your local machine

1. clone this project in your local machine
```
git@github.com:omor777/volunteer-management-client.git
```
2. install dependencies
```
npm install
```
3. create firebase project

4. replace this with your firebase config
```
// ./src/firebase/firebase.config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

```

5. run project
```
npm run dev
```
