const express = require('express');
// const { Pool } = require('pg');
const cors = require('cors');

const app = express();


// // Set up connection to PostgreSQL
// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database_name',
//   password: 'your_password',
//   port: 5432,
// });

app.use(cors());
app.use(express.json());

// // Example route to fetch data
// app.get('/api/data', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM your_table_name');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
