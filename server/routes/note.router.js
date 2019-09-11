const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('isAuth: ', req.isAuthenticated());
    console.log('user: ', req.user);

    const queryString = `SELECT * FROM "notes" WHERE "level" <= $1`;

    if(req.isAuthenticated()){
        pool.query(queryString, [req.user.sec_level])
            .then((response) => {
                res.send(response.rows);
            })
            .catch((err) => {
                console.log(`$err`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(500);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;