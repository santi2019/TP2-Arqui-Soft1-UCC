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

    let user = await User.findOne({ email: email});

    if(user && await sails.argon2.verify(user.password, pass)){
      req.session.user = user;
      res.redirect('/');
    }else{
      req.session.user = null;
      res.redirect('/');
    }
  },

  logout: async function(req, res){
    req.session.user = null;
    res.redirect('/');
  }

};

