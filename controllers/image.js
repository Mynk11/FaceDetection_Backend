const { User } = require('../model/user');
const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: '69ffc9dbe7a14ca7af4af1d08193dc2e'
});

const handleApiCall = (req, res) => {
  console.log("handleApiCall" + req.body);
  app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      console.log("image data is:", data)
      res.status(200).json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res) => {
  const { id } = req.body;
  console.log("handleImage", req.body, id);
  User.findOne({ id: id }).then((data) => {
    console.log("From handle image :" + data);
    res.status(200).json(data);
  }, (nope) => {
    console.log("returned nothing" + nope);
    res.status(400).json(nope);
  }).catch(err => res.status(400).json('unable to get entries'));
  // db('users').where('id', '=', id)
  //   .increment('entries', 1)
  //   .returning('entries')
  //   .then(entries => {
  //     res.json(entries[0]);
  //   })

}

module.exports = {
  handleImage,
  handleApiCall
}