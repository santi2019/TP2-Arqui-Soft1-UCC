/**
 * HuespedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async function (req, res){
    let email = req.param("email");
    let pass = req.param("password");


    let user = await Huesped.findOne({
      where:{email}
    });

    if(user && sails.argon2.verify(Huesped.password, pass)){
      req.session.user = user;
      res.redirect("/");
    }else{
      req.session.user = null;
      res.redirect("/");
    }
  },

  logout: async function(req, res){
    req.session.user = null;
    res.redirect("/");
  }

};

