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

  cancelacionView: async function (req, res) {
    res.view('pages/cancelacion');
  },

  newReserva: async function (req, res) {
    const FechaIngreso = req.param('FechaIngreso');
    const FechaSalida = req.param('FechaSalida');
    const CantPasajeros = req.param('CantPasajeros');
    const MetodoPago = req.param('MetodoPago');
    const max = 50000;
    const min= 10000;
    const number = Math.random()*(max - min);
    const Codigo = Math.round(number);
    let fechaActual = new Date().toISOString();

    if (!FechaIngreso || !FechaSalida || !CantPasajeros || !MetodoPago || CantPasajeros <= 0 || FechaIngreso < fechaActual || FechaSalida < FechaIngreso) {
      res.redirect('/reservaConfirm');
    }

    const room = await Habitacion.findOne({tipoHabitacion: CantPasajeros}, {estado: 'Disponible'});

    if (!room) {
      res.redirect('/reservaConfirm');
    }

    if(await Reservacion.findOne({fechaIngreso: FechaIngreso}) && await Reservacion.findOne({fechaSalida: FechaSalida})){
      res.redirect('/reservaConfirm');
    } else{
      await Habitacion.updateOne({id: room.id}).set({estado:'Ocupada'});
      const resrv = await Reservacion.create({
        codigo: Codigo,
        fechaIngreso: FechaIngreso,
        fechaSalida: FechaSalida,
        cantidadPasajeros: CantPasajeros,
        metodoPago: MetodoPago,
        montoTotal: room.precio,                     //Precio de habitacion.
        owner: req.session.person.id,                //ID del huesped que creo la reserva.
        usuario: req.session.existedUser.id,         //ID del usuario que creo la reserva.
        habitacionReservada:  room.id,               //ID de la habitacion seleccionada.
      }).fetch();

      const founded = await Reservacion.findOne({id: resrv.id}).populate('owner');

      if(resrv){
        req.session.founded = founded;
      }

      res.redirect('/ComprobanteReserva');
    }

  },


  allReservas: async function (req, res){
    const allreservas =  await Reservacion.find().populate('owner');
    res.view('pages/reservasList', { allreservas });
  },


  cancelarReserva: async function (req, res){
    const deleteCodigo = req.param('Codigo');
    const deleteReserva =  await Reservacion.findOne({codigo: deleteCodigo}).populate('habitacionReservada');

    if(deleteReserva){
      await Habitacion.updateOne({id: deleteReserva.habitacionReservada.id}).set({estado:'Disponible'});
      await Reservacion.destroy({id: deleteReserva.id}).exec((err) => {
        if(err){
          return res.serverError('Something went wrong');
        }
      });
      res.redirect('/');
    }else{
      res.redirect('/cancelacion');
    }

  },

};










/* Reserva 1:
newReserva: async function (req, res) {
    const FechaIngreso = req.param('FechaIngreso');
    const FechaSalida = req.param('FechaSalida');
    const CantPasajeros = req.param('CantPasajeros');
    const CantHabitaciones = req.param('CantHabitaciones');
    const MetodoPago = req.param('MetodoPago');

    let fechaActual = new Date().toISOString();

    if (!FechaIngreso || !FechaSalida || !CantPasajeros || !CantHabitaciones || !MetodoPago || CantPasajeros <= 0 || CantHabitaciones <= 0 || CantHabitaciones > CantPasajeros || FechaIngreso < fechaActual|| FechaSalida < FechaIngreso) {
      res.redirect('/reservaConfirm');
    }

    const resrv = await Reservacion.create({
      fechaIngreso: FechaIngreso,
      fechaSalida: FechaSalida,
      cantidadPasajeros: CantPasajeros,
      cantidadHabitaciones: CantHabitaciones,
      metodoPago: MetodoPago,
      owner: req.session.person.id,                //ID del huesped que creo la reserva.
      usuario: req.session.existedUser.id,         //ID del usuario que creo la reserva.
      habitacionReservada: req.session.habit.id,   //ID de la habitacion.
    }).fetch();

    const founded = await Reservacion.findOne({id: resrv.id}).populate('owner.habitacionReservada.*');
    if(resrv){
      req.session.founded = founded;
    }

    res.redirect('/ComprobanteReserva');
    //res.send(JSON.stringify(founded));
  },

 */
