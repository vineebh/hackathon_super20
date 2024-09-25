const express = require("express")
const mysql = require('mysql')
const cors = require('cors')

const app= express();
app.use(cors())

const db=  mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"edu-minds"
})
app.get('/',(re,res)=>{
    return res.json("from Backend side")

})
app.get('/course',(req,res)=>{
    const sql = "SELECT * FROM datascience_course"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/courses',(req,res)=>{
    const sql = "SELECT * FROM datascience_course"
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

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
            const [rows] = await db.query('SELECT correct_option FROM python_qna WHERE id = ?', [questionId]);
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

app.listen(1000,()=>{
    console.log("listning")
})