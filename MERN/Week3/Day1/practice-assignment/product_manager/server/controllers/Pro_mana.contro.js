const Pro_mana= require ('../models/Pro_mana.model')

module.exports.findAllPro_mana = (req, res) => {
    Pro_mana.find()
      .then(allDaPro_manas => res.json({ Pro_manas: allDaPro_manas }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.findOneSinglePro_mana = (req, res) => {
      Pro_mana.findOne({ _id: req.params.id })
          .then(oneSinglePro_mana => res.json({ Pro_mana: oneSinglePro_mana }))
          .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.createNewPro_mana = (req, res) => {
    Pro_mana.create(req.body)
      .then(newlyCreatedPro_mana => res.json({ Pro_mana: newlyCreatedPro_mana }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.updateExistingPro_mana = (req, res) => {
    Pro_mana.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedPro_mana => res.json({ Pro_mana: updatedPro_mana }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.deleteAnExistingPro_mana = (req, res) => {
    Pro_mana.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };