const expess = require('express');
const cors = require('cors');

const app = expess();

app.use(cors());
app.use(expess.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Contact book Application' });
});

module.exports = app;