const { Router } = require('express');
const {
    getUsers,
    getUserByUsername,
    createUser,
    deleteUser,
    updateUser,
} = require('../controllers/user.controller');

const router = Router();

router.get('/users', getUsers);
router.get('/users/:username', getUserByUsername);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
