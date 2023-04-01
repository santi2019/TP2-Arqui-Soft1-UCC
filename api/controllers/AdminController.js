/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  loginAdmin: async function (req, res){
    let email = req.param('Email');
    let pass = req.param('Password');

    let existedAdmin = await Admin.findOne({email: email});

    if(existedAdmin && await sails.argon2.verify(existedAdmin.password, pass)){
      req.session.existedAdmin = existedAdmin;
      res.redirect('/');
    }else{
      req.session.existedAdmin = null;
      res.redirect('/loginAdmin');
    }
  },


  perfilAdmin: async function (req, res){
    if(req.session.existedAdmin){
      const adm = await Admin.findOne({id: req.session.existedAdmin.id});
      res.view('pages/perfilAdmin', { adm });
    }
  },

  logoutAdmin: async function(req, res){
    req.session.existedAdmin = null;
    res.redirect('/');
  }

};

