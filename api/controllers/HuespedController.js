/**
 * HuespedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  huespedView: async function (req, res) {
    res.view('pages/reserva');
  },

  newHuesped: async function (req, res){
    const Nombre = req.param('Nombre');
    const Apellido = req.param('Apellido');
    const FechaNac = req.param('FechaNac');
    const DNI = req.param('DNI');
    const Telefono = req.param('Telefono');
    const Domicilio = req.param('Domicilio');
    const Nacionalidad = req.param('Nacionalidad');

    let fechaActual = new Date().toISOString();

    if(!Nombre || !Apellido || !FechaNac || !DNI || !Telefono || !Domicilio || !Nacionalidad || FechaNac >= fechaActual || DNI <= 0){
      res.redirect('/reserva');
    }

    const hus = await Huesped.create({
      nombre: Nombre,
      apellido: Apellido,
      fechaNacimiento: FechaNac,
      dni: DNI,
      telefono: Telefono,
      domicilio: Domicilio,
      nacionalidad: Nacionalidad,
    }).fetch();

    const person = await Huesped.findOne({id: hus.id});

    if(hus){
      req.session.person = person;
    }

    res.redirect('/reservaConfirm');

  }

};

