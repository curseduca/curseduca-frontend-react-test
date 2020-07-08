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
        this.data = this.database.getUsers();
    }

    createToken(payload) {
        return jwt.sign(payload, SECRET_KEY, { expiresIn })
    }

    verifyToken(token) {
        return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
    }

    isAuthenticated({ email, password }) {
        return this.data.find(user => user.email === email && user.password === password)
    }

}

export default Auth;
