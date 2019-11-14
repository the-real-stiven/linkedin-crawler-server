const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

callback = (req, res) => {
  console.log(req.body);
  res.status(200).send();
};

app.post('/', callback);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
