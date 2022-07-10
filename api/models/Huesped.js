/**
 * Huesped.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {

  attributes: {

    nombre: {type: 'string', required: true},
    apellido: {type: 'string', required: true},
    fechaNacimiento: {type: 'string', required: true},
    dni: {type: 'number', required: true},
    telefono: {type: 'number', required: true},
    domicilio: {type: 'string', required: true},
    nacionalidad: {type: 'string', required: true},

    reservas: {
      collection: 'reservacion',
      via: 'owner'
    }

  },
};
