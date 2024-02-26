import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"
const MongoClient = mongodb.MongoClient
const uri = `mongodb+srv://rarefigure:HR547s9c4lSnCQLa@cluster0.3tzbhom.mongodb.net/?retryWrites=true&w=majority`

const port = 8000
await MongoClient.connect(
  uri,
  {
   maxPoolSize: 50,
    wtimeoutMS: 2500,
    // useNewUrlParser: true
  }
  )

  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client =>{
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
