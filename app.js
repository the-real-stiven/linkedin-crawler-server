const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use(express.json());

callback = (req, res) => {
  console.log(req.body);
  res.status(200).send();
};

app.post('/', callback);

app.get('/', function(req, res) {
  res.send(JSON.stringify({ Hello: 'World' }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
