import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/graphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err))