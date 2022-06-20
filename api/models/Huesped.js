/*
 * Huesped.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models


module.exports = {

  attributes: {

    nombreCompleto: {type: 'string', required: true},
    apellidoCompleto: {type: 'string', required: true},
    DNI: {type: 'number', required: true},
    telefono: {type: 'number', required: true},
    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
    calle: {type: 'string', required: true},
    nro: {type: 'number', required: true},
    barrio: {type: 'string', required: true},
    ciudad: {type: 'string', required: true},



    reservaciones: {
      collection: 'Reservacion',
      via: 'owner'
    }

  },
};

*/

/*unsubscribeReason: {
type: 'string',
isIn: ['boring', 'too many emails', 'recipes too difficult', 'other'],
required: true
}*/
