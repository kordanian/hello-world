const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://zenji:777tcsotb@ds111993.mlab.com:11993/sandboxdb';
const dbName = 'sandboxdb';
const collectionName = 'decks';
async function start() {
    const client = await MongoClient.connect(
        url,
        { useNewUrlParser: true }
    );
    const db = client.db(dbName);
    const col = db.collection(collectionName);
    const todayTime = new Date();
    //const currentDate = `${todayTime.getFullYear()}-${todayTime.getMonth() + 1}-${todayTime.getDate()}`;
    const docs = await col.find().toArray();


    var msg = 'Hello World';
    console.log(msg);
}
try {
	start();
} catch (err) {
	console.log(err);
}