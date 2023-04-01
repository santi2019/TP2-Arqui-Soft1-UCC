/**
 * HabitacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  habitacionesView: async function (req, res) {
    res.view('pages/habitacionesBuild');
  },

  borrarView: async function (req, res) {
    res.view('pages/borrarHabitacion');
  },

  newHabitacion: async function (req, res){
    const Numero = req.param('Numero');
    const Precio = req.param('Precio');
    const Tipo = req.param('Tipo');
    const Descripcion = req.param('Descripcion');
    const Estado = req.param('Estado');

    if(!Numero || !Precio || !Tipo || !Descripcion || !Estado){
      res.redirect('/habitacionesBuild');
    }

    if (await Habitacion.findOne({numero: Numero})) {
      res.redirect('/habitacionesBuild');
    } else{
      const hab = await Habitacion.create({
        numero: Numero,
        precio: Precio,
        tipoHabitacion: Tipo,
        descripcion: Descripcion,
        estado: Estado,
      }).fetch();

      const habit = await Habitacion.findOne({id: hab.id});

      if(hab){
        req.session.habit = habit;
      }

      res.redirect('/');
    }
  },


  allHabitaciones: async function (req, res){
    const allhabitaciones =  await Habitacion.find();
    res.view('pages/habitacionesList', { allhabitaciones });
  },


  deleteRoom: async function (req, res){
    const deleteNum = req.param('NumRoom');
    const deleteRoom =  await Habitacion.findOne({numero: deleteNum});

    if(deleteRoom){
      await Habitacion.destroy({id: deleteRoom.id}).exec((err) => {
        if(err){
          return res.serverError('Something went wrong');
        }
      });
      res.redirect('/');
    }else{
      res.redirect('/borrarHabitacion');
    }

  },


};

