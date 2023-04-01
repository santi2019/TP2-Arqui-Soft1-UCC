/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  UserController:{
    perfilDatos: 'isLoggedIn',
    logout: 'isLoggedIn',
  },

  HuespedController:{
    huespedView: 'isLoggedIn',
    newHuesped: 'isLoggedIn',
  },

  ReservacionController:{
    reservaView: 'isLoggedIn',
    newReserva: 'isLoggedIn',
    allReservas: 'isLoggedIn',
    cancelacionView: 'isLoggedIn',
    cancelarReserva: 'isLoggedIn',
  },

  ComprobanteController:{
    comprobanteReserva: 'isLoggedIn',
  },


  AdminController:{
    perfilAdmin: 'isLoggedAdmin',
    logoutAdmin: 'isLoggedAdmin',
  },


  HabitacionController:{
    habitacionesView: 'isLoggedAdmin',
    borrarView: 'isLoggedAdmin',
    newHabitacion: 'isLoggedAdmin',
    deleteRoom: 'isLoggedAdmin',
  },


  // '*': true,

};
