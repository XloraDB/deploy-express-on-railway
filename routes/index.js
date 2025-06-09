const express = require('express');
const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL);
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  db.one("SELECT NOW()")
    .then(function (data) {
      // Render the page only after receiving the data
      res.render('index', { title: 'Hello World, Railway!', timeFromDB: data.now });
      router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello Xlora 👋' });
});
    })
    .catch(function (error) {
      console.error("ERROR:", error);
      // If there’s an error, send a 500 response and do not call res.render
      res.status(500).send("Error querying the database");
    });
});

module.exports = router;
