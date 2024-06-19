const userModel = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
        console.log('🚀 ~ getUsers ~ error:', error);
        res.status(500).send({ message: 'Error al buscar los usuarios' });
    }
};

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userModel.findOne({ username });
        if (!user) {
            res.status(401).send({ message: 'El usuario no existe' });
            return;
        }
        res.status(200).send(user);
    } catch (error) {
        console.log('🚀 ~ getUserByUsername ~ error:', error);
        res.status(500).send({ message: 'Error al buscar el usuario' });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, name, phone, email, password, admin } = req.body;
        const user = new userModel({
            username,
            name,
            phone,
            email,
            password,
            admin,
        });
        const saved = await user.save();
        res.status(200).send(saved);
    } catch (error) {
        console.log('🚀 ~ createUser ~ error:', error);
        res.status(500).send({ message: 'Error al crear el usuario' });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, name, phone, email, password, admin } = req.body;

        const userExists = await userModel.findById(id);

        if (!userExists) {
            res.status(400).send({ message: 'El usuario no existe' });
            return;
        }

        userExists.username = username;
        userExists.name = name;
        userExists.phone = phone;
        userExists.email = email;
        userExists.password = password;
        userExists.admin = admin;

        const updated = await userModel.findByIdAndUpdate(id, userExists, {
            new: true,
        });
        res.status(200).send(updated);
    } catch (error) {
        console.log('🚀 ~ updateUser ~ error:', error);
        res.status(500).send({ message: 'Error al modificar el usuario' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const userExists = await userModel.findById(id);

        if (!userExists) {
            res.status(400).send({ message: 'El usuario no existe' });
            return;
        }

        const deleted = await userModel.deleteOne({ id });
        res.status(200).send(deleted);
    } catch (error) {
        console.log('🚀 ~ deleteUser ~ error:', error);
        res.status(500).send({ message: 'Error al eliminar el usuario' });
    }
};

module.exports = {
    getUsers,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser,
};
