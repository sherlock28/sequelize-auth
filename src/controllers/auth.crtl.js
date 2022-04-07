const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

module.exports = {
    signIn(req, res) {
        let { email, password } = req.body;

        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if (!user) {
                    return res.status(400).send({
                        success: false,
                        payload: null,
                        msg: 'Invalid email or password',
                        error: null
                    });
                }

                if (!bcrypt.compareSync(password, user.password)) {
                    return res.status(400).send({
                        success: false,
                        payload: null,
                        msg: 'Invalid email or password',
                        error: null
                    });
                }

                const userDto = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }

                const token = jwt.sign({ user: userDto }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn
                });

                return res.send({
                    success: true,
                    payload: {
                        user,
                        token
                    },
                    msg: 'User logged in successfully',
                    error: null
                });
            })
            .catch(err => {
                return res.status(400).send({
                    success: false,
                    payload: null,
                    msg: 'Error on the server.',
                    error: {
                        code: 500,
                        msg: 'Internal server error',
                        err: err,
                    }
                });
            });
    },
    signUp(req, res) {
        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);

        User.create({
            name: req.body.name,
            email: req.body.email,
            password
        }).then(user => {
            const userDto = {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }

            let token = jwt.sign({ user: userDto }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            });

            res.json({
                success: true,
                payload: {
                    user: userDto,
                    token
                },
                msg: 'User created successfully',
                error: null
            });
        }).catch(err => {
            res.status(500).json({
                success: false,
                payload: null,
                msg: 'User not created',
                error: {
                    code: 500,
                    msg: 'Internal server error',
                    err: err,
                }
            });
        }
        );
    },
}
