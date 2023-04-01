module.exports = async function(req, res, proceed){

  if(req.session.existedAdmin){
    return proceed();
  }

  return res.forbidden();
}
