'use strict';

const { User, Post } = require('../../models');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([

      User.create({
        name: 'johndoe1',
        email: 'johndoe@gmail.com',
        password: bcrypt.hashSync('123456', +authConfig.rounds),
        posts: [
          {
            title: 'Post 1',
            body: 'Content 1',
          },
          {
            title: 'Post 2',
            body: 'Content 2',
          },
        ],
      }, {
        include: 'posts',
      }),

      User.create({
        name: 'janedoe2',
        email: 'janedoe@gmail.com',
        password: bcrypt.hashSync('123456', +authConfig.rounds),
        posts: [
          {
            title: 'Post 3',
            body: 'Content 3',
          },
          {
            title: 'Post 4',
            body: 'Content 4',
          },
        ],
      }, {
        include: 'posts',
      })

    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete('posts', null, {}),
      queryInterface.bulkDelete('users', null, {}),
    ]);
  }
};
