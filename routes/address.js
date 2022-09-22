var express = require('express');

const repo = require('../repositories/addressesJson');

var router = express.Router();


/**
 * Search functions
 */
router.get('/search/street', function (req, res, next){
  const result = repo.searchStreet(req.query.lineOne, req.query.lineTwo)
  return res.json(result);
})

router.get('/search/city', function (req, res, next){
  return res.json(repo.searchCity(req.query.city));
})

router.get('/search/state', function (req, res, next){
  return res.json(repo.searchState(req.query.state));
})

router.get('/search/zip', function (req, res, next){
  return res.json(repo.searchZip(req.query.zip));
})

/**
 * CRUD functions
 */
router.get('/:id', function (req, res){
  const result = repo.get(req.params.id);

  if(result) return res.json(result.address);
  else return res.status(404).send(`${req.params.id} was not found`);
})

router.put('/:id', function (req, res){
  return res.json(repo.update(req.params.id, req.body));
})

router.post('/', function (req, res){
  return res.json({id: repo.add(req.body)} );
})

router.delete('/:id', function (req, res){
  repo.delete(req.params.id);
  return res.end();
})

module.exports = router;
