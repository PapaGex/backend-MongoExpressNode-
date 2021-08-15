const router = require('express').Router();
let Gecko = require('../models/gecko.model');

router.route('/').get((req, res) => {
    Gecko.find()
        .then(gecko => res.json(gecko))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const geckoName = req.body.geckoName;
    const description = req.body.description;
    const hatchDate = Date.parse(req.body.date);
    const gender = req.body.gender;
    const purchasePrice = Number(req.body.purchasePrice);

    const newGecko = new Gecko({
        geckoName,
        description,
        hatchDate,
        gender,
        purchasePrice,
    });

    newGecko.save()
       .then(() => res.json('Gecko added!'))
       .catch(err => res.status(400).jsono('Error: ' + err));
});

module.exports = router;