const { User } = require('../model/user');
const handleSignin = (bcrypt) => (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('incorrect form submission');
  }

  console.log("MAyank::", password);

  User.findOne({ email: email }).then(data => {

    console.log("user found :", data.password);
    const isValid = bcrypt.compareSync(password, data.password);
    if (isValid) { res.json(data) } else { res.status(400) }
    console.log("isValid", isValid);
  }, err => {
    console.log("Unable to find user", err);
  });
  /*   db.select('email', 'hash').from('login')
      .where('email', '=', email)
      .then(data => {
        const isValid = bcrypt.compareSync(password, data[0].hash);
        if (isValid) {
          return db.select('*').from('users')
            .where('email', '=', email)
            .then(user => {
              res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to get user'))
        } else {
          res.status(400).json('wrong credentials')
        }
      })
      .catch(err => res.status(400).json('wrong credentials'))
  } */
}

module.exports = {
  handleSignin: handleSignin
}