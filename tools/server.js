const express = require('express');

const app = express();

app.use(express.static('../chloesil.github.io', {
  extensions: ['html'],
}));

app.listen(8080, () => console.log('Website running on port 8080'));
