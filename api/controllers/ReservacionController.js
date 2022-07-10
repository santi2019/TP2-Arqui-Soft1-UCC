/**
 * ReservacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  reservaView: async function (req, res) {
    res.view('pages/reservaConfirm');
  },

  newReserva: async function (req, res) {
    let FechaIngreso = req.param('FechaIngreso');
    let FechaSalida = req.param('FechaSalida');
    let CantPasajeros = req.param('CantPasajeros');
    let CantHabitaciones = req.param('CantHabitaciones');
    let MetodoPago = req.param('MetodoPago');

    let fechaActual = new Date().toISOString();

    if (!FechaIngreso || !FechaSalida || !CantPasajeros || !CantHabitaciones || !MetodoPago || CantPasajeros <= 0 || CantPasajeros >= 4 || CantHabitaciones <= 0 || CantHabitaciones > CantPasajeros || FechaIngreso < fechaActual|| FechaSalida < FechaIngreso) {
      res.redirect('/reservaConfirm');
    }

    const resrv = await Reservacion.create({
      fechaIngreso: FechaIngreso,
      fechaSalida: FechaSalida,
      cantidadPasajeros: CantPasajeros,
      cantidadHabitaciones: CantHabitaciones,
      metodoPago: MetodoPago,
      owner: req.session.person.id,                //ID del huesped que creo la reserva
      usuario: req.session.existedUser.id,         //ID del usuario que creo la reserva
      }).fetch();

    const founded = await Reservacion.findOne({id: resrv.id}).populate('owner');

    if(resrv){
      req.session.founded = founded;
    }

    res.redirect('/ComprobanteReserva');
    //res.send(JSON.stringify(founded));
    //res.send(Nombre);
  },


  allReservas: async function (req, res){
    const allreservas =  await Reservacion.find().populate('owner');
    res.view('pages/reservasList', { allreservas });
  },



  cancelarReserva: async function (req, res){
    const allreservas =  await Reservacion.find().populate('owner');

     await Reservacion.destroy({id: allreservas.id}).exec(function(err){
       if(err){
         return res.serverError('Something went wrong');
       }
     });

    await Reservacion.update(allreservas);
    res.view('pages/reservasList', { allreservas });
    },



  /* Cancelar 1
  cancelarReserva: async function (req, res){
    const reservaId = req.session.founded;
    const allreservas =  await Reservacion.find().populate('owner');
    //var userIds = users.map(function(user){return user.id;});

     await Reservacion.destroyOne({id: reservaId.id}).exec(function(err){
       if(err){
         return res.serverError('Something went wrong');
       }
     });

    await Reservacion.update(allreservas);
    res.view('pages/reservasList', { allreservas });
    },
*/

};

