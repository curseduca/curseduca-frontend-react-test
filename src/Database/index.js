import jsonServer from 'json-server';
import fs from 'fs';

class Database {
    mapClassifieds() {
        return jsonServer.router('./src/Database/data/db.json')
    }

    mapUsers() {
        this.users = JSON.parse(fs.readFileSync('./src/Database/data/users.json', 'UTF-8'))
        return this;
    }

    getUsers() {
        return this.users
    }
}

export default Database;