const express = require('express');
const path = require("path");
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const models = require('./models');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('Server is opened');
    });
});
