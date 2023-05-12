const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const models = require('./models');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log('Server is opened');
    });
});
