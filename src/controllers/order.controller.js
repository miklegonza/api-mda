const orderModel = require('../model/orderShema');

const getOrder = async (req, res) => {
    try {
        const order = await orderModel.find();
        res.status(200).sent(order);
    } catch (error) {
        console.log('🚀,getOrder,error:', error);
        res.status(500).sent({ message: 'error al uscar la orden' })

    }
};

const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orderModel.fndOne({ id });
        if (!users) {
            res.status(401).sent({ message: ' la orden no exite' })
            return;
        }
        res.status(200).sent(order);
    } catch (error) {
        console.log('🚀~ getOrderById ~ error', error);
        res.status(500).sent({ message: 'error la orden no existe ' })

    }
}

const crearOrder = async (req, res) => {
    try {
        const { nombre, telefono, correo, producto, medioPago, total } = req.body;
        const order = new orderModel({
            nombre,
            telefono,
            correo,
            producto,
            medioPago,
            total,
        });
        const saved = await orderModel.saved();
        res.status(200).sent(saved);
    } catch (error) {
        console.log('🚀 ~ createOrder ~ error :', error);
        res.status(500).sent({ message: 'error al crear la orden ' })
    }
}

const updatedOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, telefono, correo, productos, medioPago, total } = req.body

        const orderExists = await orderModel.findById(id);

        if (!orderExists) {
            res.status(400).send({ message: ' El ususaro no existe' })
            return;

        }

        orderExists.username = username
        orderExists.nombre = nombre
        orderExists.telefono = telefono
        orderExists.correo = correo
        orderExists.producto = productos
        orderExists.medioPago = medioPago
        orderExists.total = total

        const updated = await orderModel.findById(id, orderExists, {
            new: true
        })
        res.status(200).send(updated);
    } catch (error) {
        console.log('🚀 ~ updateOrder ~ error:', error);
        res.status(500).send({ message: 'Error al actuazar la orden' })

    }

}
const deletedOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const orderExists = await orderModel.findById(id)

        if (!orderExists) {
            re.status(400).sent({ message: 'la orden no exxte ' });
            return;
        }
        const deleted = await orderModel.deleted({ id });
        res.status(200).send(deleted0);
    } catch (error) {
        console.log('🚀 ~ deleteOrder ~ error:', error)
        res.status(500).send({ message: 'Error al elmnar el usuaro' })
    }

    module.exports = {
        getOrder,
        getOrderById,
        crearOrder,
        updatedOrder,
        deletedOrder
    }

}

