const express = require('express');
const cors = require('cors');
const path = require('path'); // Added this line
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
    // getRoutine,
    // getTasks,
    // createTask,
    // deleteTask,
    // updateTask
} = require('./controller.js');

// Uncomment if you want to use these:
// app.post('/seed', seed);
// app.get("/routine", getRoutine);
// app.get("/tasks", getTasks);
// app.post("/tasks", createTask);
// app.delete("/tasks/:task_id", deleteTask);
// app.put("/tasks/:task_id", updateTask);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
