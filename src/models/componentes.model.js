const mongoose = require('mongoose');

const { Schema } = mongoose;

const ComponentesSchema = new Schema(
    {
        producto: {
            type: String,
            required: true,
        },
        marca: {
            type: String,
            required: true,
        },
        modelo: {
            type: Number,
            required: true,
        },
        caracteristicas: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
        imagen: {
            type: String,
            required: true,
            default: "https://via.placeholder.com/50x50"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model('Componente', ComponentesSchema);
