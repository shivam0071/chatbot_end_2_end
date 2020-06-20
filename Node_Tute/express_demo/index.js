const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // just like os.environ.get(PORT, 3000) of python

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4]);
});

app.get('/api/courses/:id', (req, res) => { // :id is a parameter
    res.send(req.params.id);
});

app.get('/api/courses/:year/:month', (req, res) => { // :id is a parameter
    // res.send(req.params);
    res.send(req.query); // to read the query parameters such as ?sortBy=name in the url

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))