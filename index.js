const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const { db } = require('./config');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
require('./helpers/strategies')();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.use('/api/user', require('./routes/user/index'));
app.use('/api/transaksi', require('./routes/transactions'));
app.use('/api/admin', require('./routes/admins'));
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/contact', require('./routes/contact'));
app.get('*', (req, res) => {
    res.send('404 Not Found');
});

if (db) {
    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
}
