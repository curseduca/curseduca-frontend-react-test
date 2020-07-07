import jsonServer from 'json-server';
import fs from 'fs';

class Database {
    getMappedRoutes() {
        return jsonServer.router('./src/Database/data/db.json')
    }

    getUsers() {
        if (! this.users) {
            this.users = JSON.parse(fs.readFileSync('./src/Database/data/users.json', 'UTF-8'))
        }
        return this.users
    }
}

export default Database;
