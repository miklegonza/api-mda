const { Router } = require('express');
const {
    getComponents,
    getComponentById,
    createComponent,
    updateComponent,
    deleteComponent,
} = require('../controllers/component.controllers');
const {
    getUsers,
    getUserByUsername,
    createUser,
    deleteUser,
    updateUser,
} = require('../controllers/user.controller');
const {
    getOrder,
    getOrderById,
    crearOrder,
    updatedOrder,
    deletedOrder,
} = require('../controllers/order.controller');

const router = Router();

/* Usuarios */
router.get('/users', getUsers);
router.get('/users/:username', getUserByUsername);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

/* Componentes */
router.get('/components', getComponents);
router.get('/components/:id', getComponentById);
router.post('/components', createComponent);
router.put('/components/:id', updateComponent);
router.delete('/components/:id', deleteComponent);

/* Pedidos */
router.get('/orders', getOrder);
router.get('/orders/:id', getOrderById);
router.post('/orders', crearOrder);
router.put('/orders/:id', updatedOrder);
router.delete('/orders/:id', deletedOrder);

module.exports = router;
