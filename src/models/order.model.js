const mongonse = require('mongoose')


const orderShema = mongonse.Schema({
    nombre: {
        type: String,
        require: true
    },
    telefono: {
        type: Boolean,
        require: true

    },
    correo: {
        type: String,
        require: true
    },
    producop: {
        type: [],
        require: true

    },
    medioPago: {
        type: String,
        require: true

    },
    total: {
        type: Boolean,
        require: true

    }
}, {
    timestamps: true,
    versionKey: false
}

)

module.exports = mongoonse.model('order', orderShema)
