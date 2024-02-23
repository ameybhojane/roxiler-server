const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let transactionsRouter = require('./routes/transactions');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());

app.use('/users', usersRouter);
app.use('/transactions', transactionsRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})