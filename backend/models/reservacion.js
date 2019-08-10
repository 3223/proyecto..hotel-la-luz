const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReservacionSchema = new Schema({
    Nombre: { type: String, required: true },
    Telefono: { type: String, required: true },
    Email: { type: String, required: true },
    FechaEnt: { type: Date },
    FechaSal: { type: Date },
    TipHab: { type: String, required: true },
    NumHab: { type: Number, required: true },
    RegAlo: { type: String, required: true }

});

module.exports = mongoose.model('Reservacion', ReservacionSchema);