const { User } = require('../model/user');
const handleRegister = (req, res, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    console.log("in if of register", email, name, password);
    return res.status(400).json('incorrect form submission');
  }

  const hash = bcrypt.hashSync(password);


  var user = new User({ name: name, password: hash, email: email });
  user.save().then((D) => {
    console.log("Saved Succesfully", user);
    res.setHeader('Content-Header', 'application/json');
    res.json(user);
  })




}
module.exports = {
  handleRegister: handleRegister
};


