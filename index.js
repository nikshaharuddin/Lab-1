// const express = require('express')
// const bcrypt = require('bcrypt')
// const app = express()
// const port = process.env.PORT || 3000;
// const saltRounds = 10
// var jwt = require('jsonwebtoken');

// app.use(express.json())

// app.post('/register', async (req, res) => {
// try {
// const hash = bcrypt.hashSync(req.body.password, 10);

// let user = await client.db("Lab3").collection("Register").findOne({
// username : req.body.username
// })

// if(user){
// res.send("Username already existed")
// return
// } 

// let result = await client.db("Lab3").collection("Register").insertOne({
// username: req.body.username,
// password: hash,
// name: req.body.name,
// email: req.body.email
// });
// res.send("Successfully Registered");
// } catch (err) {
// console.error("Error during registration: " ,err);
// res.status(500).send("Error during registration");
// }
// });

// //get user profile
// app.get('/login', async (req, res) => {
//   // findOne

//   let result = await client.db('Lab3').collection('Register').findOne({
//     username: req.body.username,
//   })

//   if (!result) {
//     res.send("User not found");
//     return
//   }

//   if (bcrypt.compareSync(req.body.password, result.password) == true) {
//     res.send(`Successfully login!`)
//   } else {
//     res.send("Incorrect password");
//   }

// })

// app.get('/', (req, res) => {
//   res.send('Nikki was here')
// })


// app.patch('/updateUser', async (req, res) => { //check if there is any value that req from user/client in posman, res from server
// try {
// const { currentUsername, updatedInfo } = req.body;
// //check if the current Username exists in the database
// const user = await client.db("Lab3").collection("Register").findOne({ username :
// currentUsername }); 
// if (!user) {
// return res.status(404).send("User not found");
// }
// //update the user info
// //Hash the updated password if it exists
// if (updatedInfo.password) {
// updatedInfo.password = bcrypt.hashSync(updatedInfo.password, 10);
// }
// // Update the user's information
// const updateResult = await client.db("Lab3").collection("Register").updateOne(
// { username: currentUsername },
// { $set: updatedInfo }
// );
// if (updateResult.modifiedCount === 1) {
// res.send("User updated successfully");
// } else {
// res.status(500).send("Failed to update user's information");
// }
// } catch (err) {
// console.error("Error during user update:", err);
// res.status(500).send('Internal server error');
// }
// });

// // new user registration
// app.post('/user', async (req, res) => {
//   // check if username already exist ??
//   let existing = await client.db("instagram").collection("account").findOne({
//     username: req.body.username
//   })

//   if (existing) {
//     res.status(400).send("username already exist")
//   } else {
//     // insertOne the registration data to mongo
//     const hash = bcrypt.hashSync(req.body.password, 10);

//     let result = await client.db("instagram").collection("account").insertOne(
//       {
//         username: req.body.username,
//         password: hash,
//         name: req.body.name,
//         email: req.body.email
//       }
//     )
//     res.send(result)
//   }
// })

// app.post('/login', async (req, res) => {
//   // step #1: req.body.username ??
//   if (req.body.username != null && req.body.password != null) {
//     let result = await client.db("instagram").collection("account").findOne({
//       username: req.body.username
//     })

//     if (result) {
//       // step #2: if user exist, check if password is correct
//       if (bcrypt.compareSync(req.body.password, result.password) == true) {
//         // password is correct
//         var token = jwt.sign(
//           { _id: result._id, username: result.username },
//            'osnfonsfnewif'
//           );
//         res.send(token)
//       } else {
//         // password is incorrect
//         res.status(401).send('wrong password')
//       }

//     } else {
//       // step #3: if user not found
//       res.status(401).send("username is not found")
//     }
//   } else {
//     res.status(400).send("missing username or password")
//   }
// })

// // get user profile
// app.get('/user/:siapadia/:emaildia', async (req, res) => {
//   // findOne

//   let token = req.headers.authorization.split(' ')[1]

//   let decoded = jwt.verify(token, 'password')

//   if (decoded._id != req.params.id) {
    
//   }

//   let result = await client.db('instagram').collection('collection').findOne({
//     username: req.params.siapadia,
//     email: req.params.emaildia
//   })
//   res.send(result)
// })

// app.get('/', (req, res) => {
//   res.send('Khai was here')
// })

// app.delete("/deleteUser/:username", async (req,res) => {
// try {
// const username = req.params.username;
// // Delete the user account from the database
// const deleteResult = await client.db('Lab3').collection('Register').deleteOne({ username: username });
// if (deleteResult.deletedCount === 1) {
// res.send("User account deleted successfully");
// } else {
// res.status(404).send("User not found");
// }
// } catch (err) {
// console.error("Error deleting user account:", err);
// res.status(500).send("Internal server error");
// }
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// //////////////////////////////////////////////////////////////////////////////////////////////

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://nikkii:nik123@nikki.uimfopa.mongodb.net/?retryWrites=true&w=majority&appName=Nikki";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)

//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });

//     console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // let testSubject2 = await client.db(`sample_analytics`).collection(`customers`).findOne(
    //   {name: "Leslie Martinez"}
    // )

    // console.log(testSubject2)

    // let testSubject = await client.db(`sample_analytics`).collection(`customers`).aggregate(
    //   [
    //     {
    //       '$match': {
    //         'name': 'Leslie Martinez'
    //       }
    //     }, {
    //       '$lookup': {
    //         'from': 'accounts', 
    //         'localField': 'accounts', 
    //         'foreignField': 'account_id', 
    //         'as': 'accounts'
    //       }
    //     }
    //   ]
    // ).toArray()

    // console.log("Result:")
    // console.log(testSubject)

//   } finally {
//     // Ensures that the client will close when you finish/error
//     //await client.close();
//   }
// }
// run().catch(console.dir);
///////////////////////////////////////////////////////////////////////////////////////////////