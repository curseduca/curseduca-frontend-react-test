import { Router } from 'express';

export default class Router {
    constructor(database, auth) {
        this.database = database;
        this.auth     = auth;
        this.routes   = new Router();
        this.init();
    }

    init() {
        this.routes.get('/', (req, res) => res.json({ message: 'Curseduca API - Teste Frontend' }));
        this.login()
        this.resources()
        this.users()
    }

    login() {
        this.routes.post('/auth/login', (req, res) => {
            console.log("login endpoint called; request body:");
            console.log(req.body);
            const { email, password } = req.body;

            if (( typeof email == 'undefined') || (! email.length) ||
                ( typeof password == 'undefined') || (! password.length)) {
                const status = 400;
                const message = 'Invalid request';
                res.status(status).json({ status, message });
                return;
            }

            if (this.auth.isAuthenticated({ email, password }) === false) {
                const status = 401
                const message = 'Incorrect email or password'
                res.status(status).json({ status, message })
                return
            }

            const access_token = this.auth.createToken({ email, password })
            console.log("Access Token generated:", access_token);
            res.status(200).json({
                access_token: access_token
            })
        })
    }

    resources() {
        this.routes.use(/^(?!\/auth).*$/, (req, res, next) => {
            if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
                const status = 401
                const message = 'Error in authorization format'
                res.status(status).json({ status, message })
                return
            }

            try {
                let verifyTokenResult;
                verifyTokenResult = this.auth.verifyToken(req.headers.authorization.split(' ')[1]);

                if (verifyTokenResult instanceof Error) {
                    const status = 401
                    const message = 'Access token not provided'
                    res.status(status).json({ status, message })
                    return
                }
                next();
            } catch (err) {
                const status = 401
                const message = 'Error access_token is revoked'
                res.status(status).json({ status, message })
            }
        })
    }

    users() {
        this.routes.get('/users', (req, res) => {
            let response = {}
            this.database.getUsers().forEach((value, key) => {
                response[value.id] = {
                    id: value.id,
                    email: value.email
                };
            })
            res.status(200).json(response)
        })
    }
}
