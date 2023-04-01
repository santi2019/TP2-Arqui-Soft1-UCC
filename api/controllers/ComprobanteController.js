/**
 * ComprobanteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  comprobanteReserva: async function (req, res){

    let fechaActual = new Date().toISOString();

    const com = await Comprobante.create({
      fecha: fechaActual,
      reserva: req.session.founded.id,                //ID del la reserva
    }).fetch();

    const result = await Comprobante.findOne({id: com.id}).populate('reserva.owner.habitacionReservada.*');

    res.view('pages/ComprobanteReserva', {result});
    //res.send(JSON.stringify(result));
  }

};
