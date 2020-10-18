const { Router } = require('express');
const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

//GET

router.get('/', (req,res) => {
    let queryText = 'SELECT * FROM "tasksToDo" ORDER BY "id";';
    pool.query(queryText).then((result) => {
        console.log('result', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log("error with get request", error);
        res.sendStatus(500);
    })
});// end GET


//POST
router.post('/', (req,res) => {
    let todo = req.body;
    let queryText = `INSERT INTO "tasksToDo"( "person", "taskName", "taskNotes", "taskComplete" )
    VALUES($1, $2, $3, $4);`;
    pool.query(queryText, [todo.person, todo.taskName, todo.taskNotes, todo.taskComplete])
    .then((result)=>{
        console.log('back from POST pg,', result.rows);
        res.sendStatus(200);
    }).catch((err)=>{
        console.log('error in POST pg', err);
        res.sendStatus(500);
    })
})//end POST

//PUT
router.put('/:idParam', (req,res) => {
    // console.log('in PUT request', req.params.idParam);
    let param=req.params.idParam;
    let queryText= `UPDATE "tasksToDo" SET "taskComplete" = 'Y'
    WHERE "id" = $1;`;
    pool.query(queryText, [param])
    .then((result) => {
        console.log('in PUT request', req.params.idParam);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('error in PUT pg', err);
        res.sendStatus(500);
    })
})//end PUT

//DELETE
// router.put('/:idParam', (req,res) => {
//     let param=req.params.idParam;
//     let queryText= `UPDATE "tasksToDo" SET "taskComplete" = 'Y'
//     WHERE "id" = $1;`;
//     pool.query(queryText, [param])
//     .then((result) => {
//         console.log('in PUT request', req.params.idParam);
//         res.sendStatus(200);
//     }).catch((err) => {
//         console.log('error in PUT pg', err);
//         res.sendStatus(500);
//     })
// })//end DELETE



module.exports = router;