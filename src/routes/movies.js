const express = require('express'); //se crea un objeto que trabaje la ruta
const MoviesController = require('../controllers/MovieController'); //Manipular el SQL es elcontrolador

const router = express.Router(); 

router.get('/movies', MoviesController.index);
router.get('/create', MoviesController.create);
router.post('/create', MoviesController.store);
router.post('/movies/delete', MoviesController.destroy);
router.get('/movies/edit/:id', MoviesController.edit);
router.post('/movies/edit/:id', MoviesController.update);

module.exports = router;