const router = require('express').Router();
const { Post } = require('../../models');

// localhost:3001/api/posts/
router.post('/', async (req, res) => {
    console.log(req.session.user_id);
    try {
        const userPost = await Post.create({
            ...req.body,
            userId: req.session.user_id
        })
        res.status(200).json(userPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

})

module.exports = router;
