/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/



  '/': { view: 'pages/homepage' },

  //USUARIO:
  'GET /login': { view: 'pages/login' },
  'POST /login': 'UserController.login' ,
  '/perfil': 'UserController.perfilDatos',
  '/logout': 'UserController.logout',
  'GET /signup': {view: 'pages/signup'},
  'POST /signup': 'UserController.signup',


  //ADMIN:
  'GET /loginAdmin': { view: 'pages/loginAdmin' },
  'POST /loginAdmin': 'AdminController.loginAdmin' ,
  '/perfilAdmin': 'AdminController.perfilAdmin',
  '/logoutAdmin': 'AdminController.logoutAdmin',

  //ABOUT US:
  'GET /about': { view: 'pages/about' },

  //HUESPED:
  'GET /reserva': 'huespedController.huespedView', //{ view: 'pages/reserva' },
  'POST /huesped': 'huespedController.newHuesped',

  //RESERVA (ESTADIA) + COMPROBANTE:
  'GET /reservaConfirm': 'ReservacionController.reservaView', //{ view: 'pages/reservaConfirm' },
  'POST /estadia': 'ReservacionController.newReserva' ,
  '/reservasList': 'ReservacionController.allReservas' ,
  '/ComprobanteReserva': 'ComprobanteController.comprobanteReserva',

  //CANCELACION:
  'GET /cancelacion': 'ReservacionController.cancelacionView',
  'POST /cancelar': 'ReservacionController.cancelarReserva',

  //CREACION DE HABITACIONES:
  'GET /habitacionesBuild': 'HabitacionController.habitacionesView',
  'POST /Build': 'HabitacionController.newHabitacion',
  '/habitacionesList': 'HabitacionController.allHabitaciones' ,
  'GET /borrarHabitacion': 'HabitacionController.borrarView',
  'POST /borrar': 'HabitacionController.deleteRoom' ,




  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
