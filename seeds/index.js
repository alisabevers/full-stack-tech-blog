const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPost = require('./postData');
const models = require('../models');
const User = require('../models/User')

const seedAll = async () => {
    await sequelize.sync({force: true});
    await User.bulkCreate(seedUsers, {
        individualHooks: true,
        returning: true,
    });
    seedUsers();
    seedPost();
    process.exit(0);
};

seedAll();