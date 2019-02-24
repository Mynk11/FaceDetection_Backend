const { User } = require('../model/user');
//need to handle client side 
const handleProfileGet = (req, res) => {
  const { id } = req.params;
  Users.findById({ id }).then((data) => {
    console.log("profile data is:", data);
    res.json(data)
  }, (err) => {
    console.log("profile error is:", err);
    res.status(400).json('Not found');
  }).catch(err => res.status(400).json('error getting user'));
  // db.select('*').from('users').where({ id })
  //   .then(user => {
  //     if (user.length) {
  //       res.json(user[0])
  //     } else {
  //       
  //     }
  //   })
  // .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfileGet
}