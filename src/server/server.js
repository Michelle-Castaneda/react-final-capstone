const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//endpoints
const {
    seed,
    getCar,
    getReviews
} = require('./controller.js');



app.post('/seed', seed);
app.get("/car_listing", getCar);
app.get("/user_reviews", getReviews);





const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
