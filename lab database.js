// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://Nikki:Nikki12345@nikki.uimfopa.mongodb.net/?retryWrites=true&w=majority&appName=Nikki";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function main() {
//   try {
//     await client.connect();

//     const db = client.db('test');

//     // Define the query
//     const query = {
//       name: 'Leslie Martinez'
//     };

//     // Define the lookup
//     const lookup = {
//       from: 'accounts',
//       localField: 'accounts',
//       foreignField: 'accounts_id',
//       as: 'ACCOUNTDETAIL'
//     };

//     // Define the projection
//     const projection = {
//       name: 1,
//       email: 1,
//       accounts: 1
//     };

//     // Perform the aggregation
//     const result = await db.collection('users').aggregate([
//       { $match: query },
//       { $lookup: lookup },
//       { $project: projection }
//     ]).toArray();

//     console.log(result);

//   } catch (error) {
//     console.error(error);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);