import express from 'express';
import connection from '../config/config.js';
// all routes here starting by /articles
const router = express.Router();

// GET ALL
router.get('/', (req, res) => {
    connection.query('SELECT * FROM article', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération des articles !!`);
        } else {
            res.status(200).send(results);
        }
    });
});

// GET ONE
router.get('/:id', (req, res) => {
    connection.query(`SELECT * FROM article WHERE id = ${req.params.id}`, (err, result) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de l\'article !!`);
        }
        else if (result == "") { 
            res.status(404).send('Not found');
        } else {
            res.status(200).send(result);
        }
    });
});

// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    connection.query(`INSERT INTO article SET ?`, req.body, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(`Erreur lors de la création de l\'article !!`);
        } else {
            res.status(200).send(result);
        }
    });
});

// UPDATE
router.post('/:id', (req, res) => {
    console.log(req.body);
    let data = [req.body.title, req.body.content, req.params.id];
    connection.query(`UPDATE article SET title = ?, content = ? WHERE id = ?`, data, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(`Erreur lors de la modification de l\'article !!`)
        } else {
            res.status(200).send(result)
        }
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    connection.query(`DELETE FROM article WHERE id = ${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send(`Erreur lors de la suppression de l\'article !!`)
        } else {
            res.status(200).send(result)
        }
    });
});

export default router;