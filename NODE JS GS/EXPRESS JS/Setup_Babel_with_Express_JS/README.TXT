THIS IS BABEL CODE 
FOR DEVELOPMENT AND PRODUCTION

"scripts": {
    "build": "babel index.js --out-dir prd",
    "start": "npm run build && nodemon prd/index.js",
    "serve": "node prd/index.js"
  },


ONLY FOR DEVELOPMENT :
"scripts": {
    "start": "babel index.js -w --out-dir prd",
    "dev": " nodemon prd/index.js"
  },