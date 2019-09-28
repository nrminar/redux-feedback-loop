const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', function (req, res) {
    console.log('in feedback POST')
    const feedback = req.body;
    const query = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    pool.query(query, [feedback.feeling, feedback.understand, feedback.support, feedback.comment]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('POST ERRO:', error)
        res.sendStatus(500);
    });
});
router.get('/', function (req, res) {
    console.log('in feedback GET')
    pool.query(`SELECT * FROM "feedback"`)
    .then((result) =>{
        res.send(result.rows)
        console.log('GET RESULTS:', result.rows)
    }).catch((error) =>{
        res.sendStatus(500)
        console.log('GET ERROR:', error)
    })
})
router.delete('/:id', function (req, res) {
    console.log('in feedback DELETE')
    let id = req.params.id;
    const query = `DELETE FROM "feedback" WHERE "id" = $1`
    console.log('req.body', req.body);
    pool.query(query, [id])
    .then((result) =>{
        res.sendStatus(200);
        console.log('DELETE RESULTS:', result);
    }).catch((error) =>{
        res.sendStatus(500)
        console.log('DELETE ERROR:', error);
    })
})
module.exports = router;