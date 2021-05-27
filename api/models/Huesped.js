/**
 * Huesped.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    primer_nombre: {type: 'string', required: true},
 // segundo_nombre: {type: 'string', required: false},
    primer_apellido: {type: 'string', required: true},
 /* segundo_apellido: {type: 'string', required: true},
    DNI: {type: 'number', required: true},
    telefono: {type: 'number', required: true}, */
    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
 /*  calle: {type: 'string', required: true},
    Nro: {type: 'number', required: true},
    barrio: {type: 'string', required: true},
    ciudad: {type: 'string', required: true},
*/
  },

};

