const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
  {console.log(__dirname);
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'))}
  );


