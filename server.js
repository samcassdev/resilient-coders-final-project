const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://samcasseusdev:finalproject@finalproject-fkjkk.mongodb.net/test?retryWrites=true";
const dbName = "finalproject";

app.listen(3000, () => {
    MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log(`Connected to ${dbName}!`);
    });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  //console.log(db)
  db.collection('answers').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {answers: result})
  })
})

app.post('/answers', (req, res) => {
  db.collection('answers').save({name: req.body.name, msg: req.body.msg}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/nextQuestion', (req, res) => {
  db.collection('answers')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/answers', (req, res) => {
  db.collection('answers').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})
