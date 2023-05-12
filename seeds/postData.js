const Post = require('../models');

const postsData = [
    {
        title: "test",
        content: "this is a testing post.",
        post_id: 1,
    },
];

const seedPosts = () => Post.bulkCreate(postsData);

module.exports = seedPosts;