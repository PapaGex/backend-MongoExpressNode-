const router = require('express').Router();
let Species = require('../models/species.model');

router.route('/').get((req, res) => {
    Species.find()
        .then(species => res.json(species))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const speciesName = req.body.speciesName;

    const newSpecies = new Species({speciesName});

    newSpecies.save()
        .then(() => res.json('Species added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
