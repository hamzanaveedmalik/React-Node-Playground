'use strict';

const server = require('./server.js');
let port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
