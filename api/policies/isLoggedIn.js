module.exports = async function(req, res, proceed){

  if(req.session.existedUser){
    return proceed();
  }

  return res.forbidden();
}
