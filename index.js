const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/blockMainThread', (req, res) => {
  doWork(5000);
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/* 
  blocking the main thread with cpu intensive taks
  open the more than 3 browsers to see the effect of 
  blocking the main thread

  duration: in ms
*/
function doWork(duration) {
  let start = Date.now();
  while (Date.now() - start < duration) {}
}
