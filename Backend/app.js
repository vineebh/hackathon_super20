const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "eduMinds"
});

// Test route
app.get('/', (req, res) => {
    return res.json("from Backend side");
});

// Get all courses
app.get('/courses', (req, res) => {
    const sql = "SELECT * FROM courses";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Question routes
app.route('/questions/:id')
    .get(async (req, res) => {
        const questionId = req.params.id;
        try {
            const [rows] = await db.query('SELECT id, questions, option_1, option_2, option_3, option_4 FROM python WHERE id = ?', [questionId]);
            if (rows.length === 0) {
                return res.status(404).send('Question not found');
            }
            res.json(rows[0]);
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    })
    .post(async (req, res) => {
        const questionId = req.params.id;
        const userSelectedOption = req.body.selectedOption;
        try {
            const [rows] = await db.query('SELECT correct_option FROM python WHERE id = ?', [questionId]);
            if (rows.length === 0) {
                return res.status(404).send('Question not found');
            }
            const correctOption = rows[0].correct_option;
            res.status(200).json({ message: userSelectedOption === correctOption });
        } catch (err) {
            console.error(err);
            res.status(500).send('Server Error');
        }
    });
    


// Start the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
