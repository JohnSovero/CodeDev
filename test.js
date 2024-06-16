const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://172.212.108.242:27017/codedev';
    const client = new MongoClient(uri);

    console.log("Attempting to connect to the database...");

    try {
        await client.connect();
        console.log("Successfully connected to the database");
    } catch (err) {
        console.error('Failed to connect to the database', err);
    } finally {
        await client.close();
        console.log("Database connection closed");
    }
}

main().catch(err => console.error("Error in main function:", err));