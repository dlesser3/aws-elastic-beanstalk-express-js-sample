const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello from CI/CD tutorial-now with the full pipeline review'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
