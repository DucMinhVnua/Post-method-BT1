const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug')
app.set('views', './views')

// app.body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var lists = [
  'Đi chợ', 'Nấu cơm', 'Rửa bát', 'Học Code trên CoderX'
]

app.get('/', function (req, res) {
  res.render('index', {
    lists: lists
  });
})

app.post('/todos/create', function (req, res) {
  lists.push(req.body.todo);
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
