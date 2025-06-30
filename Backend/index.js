const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json');
var natural = require('natural');
//give access to req res
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/getresonse', (req, res) => {
    let input = req.query.data;
    var classifier = new natural.BayesClassifier();
    // Training Data
    data.forEach(item => {
        classifier.addDocument(item.text, item.category);
    });
    classifier.train();
    //apply Predict on qiven question
    var output = classifier.classify(input);
    //response to html file
    res.status(200).send({data :output });

  })
    // presisting  save
    classifier.save('./savedata.json',function(err,classifier){});

// Test Hello 
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`server start on port ${port}`)
})