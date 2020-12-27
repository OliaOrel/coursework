const MongoClient = require("mongodb").MongoClient;

class DatabaseService {
    async connect(url) {
        this.client = await new MongoClient(
            url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
         ).connect();
        this.logs = this.client.db('db24').collection('contacts');
    }

    async insert(data) {
        return this.logs.insertOne(data);
    }
}

module.exports = DatabaseService;
