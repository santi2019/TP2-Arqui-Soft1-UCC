/**
 * Reservacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaIngreso: {type: 'string', required: true},
    fechaSalida: {type: 'string', required: true},
    cantidadPersonas: {type: 'number', required: true},
    tipoHabitacion: {type: 'string', isIn: ['Single', 'Double', 'Triple', 'Cuadruple'], required: true},
    metodoPago: {type: 'string', isIn: ['Debito/Credito', 'Efectivo'], required: true},


    //Referencia a huesped
    owner: {
      model: 'huesped'
    },

    //Referencia a habitacion
    habitaciones: {
      collection:'habitacion',
      via: 'ownerHab'
    },

    //Referencia a comprobante
    comprobantes: {
      collection:'comprobante',
      via: 'ownerC'
    }

  },

};

