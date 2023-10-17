
# 🎞 Movies Offline

The Movies offline is a system that lists popular movies from themoviedb API and works offline in PWA mode



## 📜 Summary

It's necessary to subscribe and generate an API key in:

[developer.themoviedb.org](https://developer.themoviedb.org/docs)

and after you need to create a folder inside src, with the following path:

```shell
  $ tree
  .
  ├── src
  │   └── config
  |       └── key.js
```

and paste the key:

```javascript
//key.js

const apiKey = "your_key_the_movie_db"

export { apiKey }
```





## ⚙️ Deploy

First of all, install by npm the dependencies, after you make the build of the project in PWA mode and at last you start the project to run a browser:

```bash
  npm install
  quasar build -m pwa
  quasar dev -m pwa
```

## 📲 Demo

![movies-offline](https://github.com/cristiankozlowski/movies-offline/assets/26977328/9c3d7713-e11e-4d11-8bac-20394bc3de86)



