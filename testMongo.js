const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://hemanthawsrdj:Hemanth%404279@cluster0.1fkmk.mongodb.net/ride?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensure the client closes when finished or if an error occurs
    await client.close();
  }
}

run().catch(console.dir);
