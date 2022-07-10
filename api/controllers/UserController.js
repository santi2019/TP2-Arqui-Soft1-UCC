/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res){
    let email = req.param('Email');
    let pass = req.param('Password');

    let existedUser = await User.findOne({email: email});

    if(existedUser && await sails.argon2.verify(existedUser.password, pass)){
      req.session.existedUser = existedUser;
      res.redirect('/');
    }else{
      req.session.existedUser = null;
      res.redirect('/login');
    }
  },


  perfilDatos: async function (req, res){
    if(req.session.existedUser){
      const usr = await User.findOne({id: req.session.existedUser.id});
      res.view('pages/perfil', { usr });
    }
  },


  signup: async function (req, res){
    let userName = req.param('name');
    if (await User.findOne({username: userName})) {
      //res.send('Ya existe el usuario');
      res.redirect('/signup');
    } else {
      const users = await User.create({
        username: userName,
        email: req.param('email'),
        password: await sails.argon2.hash(req.param('Pass')),
      }).fetch();
      res.redirect('/');
    }
  },


  logout: async function(req, res){
    req.session.existedUser = null;
    res.redirect('/');
  }

};

