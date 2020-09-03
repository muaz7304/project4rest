const express = require('express');
const router = express.Router();
const FoodEntry = require('../models/foodentry')
const Order = require('../models/order')

//define routes
router.get('/', (req, res) => {

    FoodEntry.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((data) => {
            console.log('Error: ', error); 
        });
});

router.post('/save-menu', (req, res) => {
    const data = req.body;
    const newFoodEntry = new FoodEntry(data)
    newFoodEntry.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'internal server error'});
            return;
        }
        return res.json({
            msg: 'data saved'
        });
        
    });
});

router.post('/save-order', (req, res) => {
    const data = req.body;
    const newFoodEntry = new Order(data)
    newFoodEntry.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'internal server error'});
            return;
        }
        return res.json({
            msg: 'data saved'
        });
        
    });
});

router.get('/random', (req, res) => {
    const data = {
        username: 'azri',
        age: 8
    };
    res.json(data);
});

router.get('/peaky', (req, res) => {
    const data = {
        username: 'john shelby',
        age: 34
    };
    res.json(data);
});

module.exports = router;