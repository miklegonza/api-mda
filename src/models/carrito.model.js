const mongoose = require('mongoose');

const { Schema } = mongoose;

const carritoSchema = new Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        marca: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
        cantidad: {
            type: [Boolean],
            required: true,
        },
    
        imagen: {
            type: String,
            required: true,
            default: 'https://via.placeholder.com/100x100',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('Carrit', carritoSchema);
