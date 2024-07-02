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
    login,
} = require('../controllers/user.controller');
const {
    getOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/order.controller');

const router = Router();

/* Usuarios */
router.post('/login', login);
router.get('/users', getUsers);
router.get('/users/:usuario', getUserByUsername);
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
router.get('/orders', getOrders);
router.get('/orders/:id', getOrderById);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;
