const express = require('express')
const app = express();

const port = 3021 || 0;

app.get('/', (reg,res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})