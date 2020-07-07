import 'dotenv/config';
import jwt from 'jsonwebtoken'
import fs from 'fs';

const SECRET_KEY = process.env.SECRET_KEY || 'curseduca-test'
const expiresIn  = '8h'

class Auth {
    constructor(database) {
        this.database = database;
        this.init();
    }

    init() {
        this.data = this.database.mapUsers().getUsers();
    }

    createToken(payload) {
        return jwt.sign(payload, SECRET_KEY, { expiresIn })
    }

    verifyToken(token) {
        return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
    }

    isAuthenticated({ email, password }) {
        return this.data.users.findIndex(user => user.email === email && user.password === password) !== -1
    }

    register(err, data) {
        fs.readFile("./src/Database/data/users.json", (err, data) => {
            if (err) {
                return 'erro ao registrar o usuário'
            };

            var data = JSON.parse(data.toString());
            var last_item_id = data.users[data.users.length - 1].id;

            data.users.push({ id: last_item_id + 1, email: email, password: password });
            var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => {
                if (err) {
                    return 'erro ao registrar o usuário'
                }
            });
        });

        return this.createToken({ email, password })
    }
}

export default Auth;