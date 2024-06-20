const componentesModel = require('../models/componentes.model');

exports.crearProducto = async (req, res) => {
    try {
        let producto = new componentesModel(req.body);
        await producto.save();
        res.status(200).send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al guardar el producto");
    }
}

exports.consultarProductos = async (req, res) => {
    try {
        const componentesData = await componentesModel.find()
        res.status(200).send(componentesData)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar las peliculas");
    }
}

exports.consultarUnProducto = async (req, res) => {
    try {
        const { id } = req.params
        let componentesData = await componentesModel.findById(id)

        if (componentesData) {
            res.status(200).send(componentesData)
        } else {
            res.status(404).send({ mensaje: "no se pudo consultar el producto" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al consultar el producto");
    }
}

exports.actualizarProducto = async (req, res) => {
    try {
        const { producto, marca, modelo, caracteristicas, precio, imagen } = req.body;
        let componentesData = await componentesModel.findById(req.params.id)

        if (!componentesData) {
            res.status(404).send({ mensaje: "No se encontró el producto" })
            return
        }

        componentesData.producto = producto;
        componentesData.marca = marca;
        componentesData.modelo = modelo;
        componentesData.caracteristicas = caracteristicas;
        componentesData.precio = precio;
        componentesData.imagen = imagen;

        await componentesData.findByIdAndUpdate(req.params.id, componentesData);
        res.status(200).send({ mensaje: "producto  actualizado", componentesData })

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al actualizar el producto");
    }
}


exports.borrarProducto = async (req, res) => {
    try {
        let componentesData = await componentesModel.findById(req.params.id)
        console.log('componentesData:', componentesData)
        if (!componentesData) {
            res.status(404).send({ mensaje: "No se encontró el producto" })
            return
        }
        await componentesModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ mensaje: "producto eliminado" })

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un problema al eliminar el producto");
    }
}

