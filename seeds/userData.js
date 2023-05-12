const { User } = require('../models/Index');

const userData = [
    {
        username: "test1",
        password:  "test"
    },
    {
        username: "test2",
        password:  "test"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;