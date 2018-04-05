const express = require('express')
const router = express.Router()

const todoController = require('../../controllers/todos.controller')

router.get('/', todoController.getTodos)
router.post('/', todoController.createTodo)
router.put('/', todoController.updateTodo)
router.delete('/:id', todoController.removeTodo)

module.exports = router
