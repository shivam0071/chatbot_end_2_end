const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // just like os.environ.get(PORT, 3000) of python


app.use(express.json()); // a middleware for request processing, POST json body

const Joi = require('@hapi/joi'); // json body validation n stuff


// Add some courses 
const courses = [
  {id:1, name:'course 1'},
  {id:2, name:'course 2'},
  {id:3, name:'course 3'},
];

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => { // :id is a parameter
    // res.send(req.params.id);
    let course = courses.find(c => c.id === parseInt(req.params.id)); // like [1,2,4].find(2) of python
    // here we are iterating over a list of dict so the inline function(arrow)
    // parseInt is same as int("3") of python
    if (!course){
        res.status(404).send("The course with the given ID was not found")
    }
    res.send(course);
});


// POST ---
// app.post('/api/courses', (req, res) => {
//     const course = {
//         id:courses.length + 1,
//         name: req.body.name // lets do an input validation here....just like flask_marshmallow or reqparser of pyhton
//     }
//     courses.push(course); // [].append(course) of python
//     res.send(course);
// });

// POST WITH VALIDATION

app.post('/api/courses', (req, res) => {
   const schema = Joi.object({
        name: Joi.string()
        .min(3)
        .max(30)
        .required(),
   });

   const result = schema.validate(req.body);
   console.log(result);

   if(result.error) {
       res.status(400).send(result.error.details[0].message);
       return;
   }
    const course = {
        id:courses.length + 1,
        name: req.body.name // lets do an input validation here....just like flask_marshmallow or reqparser of pyhton
    };
    courses.push(course); // [].append(course) of python
    res.send(course);
});

app.put('/api/courses/:id',(req, res) => {

    let course = courses.find(c => c.id === parseInt(req.params.id)); // like [1,2,4].find(2) of python
    // here we are iterating over a list of dict so the inline function(arrow)
    // parseInt is same as int("3") of python
    if (!course){
        res.status(404).send("The course with the given ID was not found");
    }

    const schema = Joi.object({
        name: Joi.string()
        .min(3)
        .max(30)
        .required(),
   });

   const result = schema.validate(req.body);

   if(result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
    }
    course.name = req.body.name
    res.send(course);
});


app.delete('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id)); 
    if (!course){
        return res.status(404).send("The course with the given ID was not found");
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(courses);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))