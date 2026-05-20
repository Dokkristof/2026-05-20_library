import User from './user.js';
import sequelize from '../database/database.js'
import Books from './books.js';
import Patrons from './patrons.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Books = Books;
db.Patrons = Patrons;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
