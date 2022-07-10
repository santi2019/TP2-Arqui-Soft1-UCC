/**
 * Habitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {

  attributes: {

    numero: {
      type: 'number', isIn: ['101', '102', '103', '104', '105', '106', '107', '108', '109', '101', '102', '201',
        '202', '203', '204', '205', '206', '207', '208', '206', '207', '208', '209', '210',
        '211', '212', '213', '214', '215', '216', '217', '218', '301', '302', '303', '304',
        '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316',
        '317', '318',], required: true},
    precio: {type: 'number', required: true},
    tipoHabitacion: {type: 'string', isIn: ['Doble', 'Triple', 'Cuadruple'], required: true},
    estado: {type: 'string', isIn: ['Disponible', 'Ocupada'], required: true},

    habitacionReservada: {
      model: 'Reservacion'
    },

  },


  /*
  Cantidad de dobles: 20
  Cantidad de triples: 19
  Cantidad de cuadruples: 6
  */

  /*
  Precio dobles: $5500
  Cantidad de triples: $7000
  Cantidad de cuadruples: $8000
  */

};

