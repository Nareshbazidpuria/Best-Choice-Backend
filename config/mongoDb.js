import mongoose from 'mongoose'

export const connectToMongodb = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true })
  mongoose.connection.once('open', () => {
    console.log('Datbase Connected')
  }).on('error', function (error) {
    console.log('error is :', error)
  })
}