require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');

// settings 
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes 
app.use('/api', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });
});
