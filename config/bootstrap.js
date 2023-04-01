/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  sails.argon2 = require('argon2');
  if (await User.count() > 0) {
    console.log('No Vacia');
    return;
  }

  console.log('Vacia');
  await User.createEach([
    { username: 'Santiago',
      email: 'santiagovietto5@hotmail.com',
      password: await sails.argon2.hash('manzana123') },

    { username: 'Silvia',
      email: 'silviacasermeiro@hotmail.com',
      password: await sails.argon2.hash('manzana111') },
  ]);


  await Admin.createEach([
    { username: 'Laura',
      email: 'libertadorhotel2011@hotmail.com',
      password: await sails.argon2.hash('hotel123') },
  ]);

};
