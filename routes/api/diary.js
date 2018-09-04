const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function(req, res) {
	db.select().from('entries').then(function(data) {
		res.send(data);
	});
});

router.post('/', function(req, res) {
    console.log(req.body);
    db.insert(req.body).returning('*').into('entries').then(function(data) {
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
	db.first().where({id: req.params.id}).from('entries').then(function(data) {
		res.send(data);
	});
});

router.delete('/:id', function(req, res) {
	db.del().where({id: req.params.id}).from('entries').then(function(data) {
		res.json({success: true});
	});
});

router.patch('/:id', function (req, res) {
  db('entries').where({ id: req.params.id }).update(req.body).returning('*').then(function (data) {
    res.send(data);
  });
});

router.put('/:id', function (req, res) {
  db('entries').where({ id: req.params.id }).update({
    data: req.body.data || null
    }).returning('*').then(function (data) {
    res.send(data);
  });
});

router.delete('/:id', function (req, res) {
  db('entries').where({ id: req.params.id }).del().then(function () {
    res.json({ success: true });
  });
});

module.exports = router;

// localhost:8000/api/diary