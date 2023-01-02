const router =require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controllers');

//get post form api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza);

//get pist from api/pizzas/id
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;