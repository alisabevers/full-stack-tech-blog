const express = require('express');
const path = require("path");
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({});

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };
  
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controllers);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('Server is opened');
    });
});
