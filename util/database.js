import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://junkyem0203:wnsrua1324@cluster0.fjlzf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }