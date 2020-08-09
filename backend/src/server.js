const express = require('express')
// const expressGraphQL = require('express-graphql')
require('./database')

const app = express();

app.listen(4000, () => {
  console.log('Server running at 4000')
})