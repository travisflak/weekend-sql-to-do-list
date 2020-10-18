const { Router } = require('express');
const express = require('express');
const router = express.Router();

// DB CONNECTION
const pool = require('../modules/pool');

//GET

router.get('/', (req,res) => {
    let queryText = 'SELECT * FROM "tasksToDo"';
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

});



//PUT




//DELETE





module.exports = router;