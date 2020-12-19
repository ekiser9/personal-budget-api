const express = require('express');
const router = express.Router();
const userModel = require('../models/userSchema');

// Create
router.post('/', async (req,res) => {
    const user = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        budget: {
            item0: {
                title: null,
                budget: 0
            },
            item1: {
                title: null,
                budget: 0
            },
            item2: {
                title: null,
                budget: 0
            },
            item3: {
                title: null,
                budget: 0
            },
            item4: {
                title: null,
                budget: 0
            },
            item5: {
                title: null,
                budget: 0
            },
            item6: {
                title: null,
                budget: 0
            },
            item7: {
                title: null,
                budget: 0
            },
            item8: {
                title: null,
                budget: 0
            },
            item9: {
                title: null,
                budget: 0
            }
        },
        spent: {
            item0: 0,
            item1: 0,
            item2: 0,
            item3: 0,
            item4: 0,
            item5: 0,
            item6: 0,
            item7: 0,
            item8: 0,
            item9: 0
        },
        year: {
            Jan: 0,
	    	Feb: 0,
		    Mar: 0,
		    Apr: 0,
	    	May: 0,
		    Jun: 0,
	    	Jul: 0,
		    Aug: 0,
		    Sep: 0,
		    Oct: 0,
		    Nov: 0,
		    Dec: 0
        }
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Read
router.get('/', async (req,res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', getUser, (req,res) => {
    res.json(res.user);
})

// Update
router.patch('/:id', getUser, async (req,res) => {
    if (req.body.budget != null) {
        if (req.body.budget.item0 != null) {
            res.user.budget.item0.title = req.body.budget.item0.title;
            res.user.budget.item0.budget = req.body.budget.item0.budget;
        }
        if (req.body.budget.item1 != null) {
            res.user.budget.item1.title = req.body.budget.item1.title;
            res.user.budget.item1.budget = req.body.budget.item1.budget;
        }
        if (req.body.budget.item2 != null) {
            res.user.budget.item2.title = req.body.budget.item2.title;
            res.user.budget.item2.budget = req.body.budget.item2.budget;
        }
        if (req.body.budget.item3 != null) {
            res.user.budget.item3.title = req.body.budget.item3.title;
            res.user.budget.item3.budget = req.body.budget.item3.budget;
        }
        if (req.body.budget.item4 != null) {
            res.user.budget.item4.title = req.body.budget.item4.title;
            res.user.budget.item4.budget = req.body.budget.item4.budget;
        }
        if (req.body.budget.item5 != null) {
            res.user.budget.item5.title = req.body.budget.item5.title;
            res.user.budget.item5.budget = req.body.budget.item5.budget;
        }
        if (req.body.budget.item6 != null) {
            res.user.budget.item6.title = req.body.budget.item6.title;
            res.user.budget.item6.budget = req.body.budget.item6.budget;
        }
        if (req.body.budget.item7 != null) {
            res.user.budget.item7.title = req.body.budget.item7.title;
            res.user.budget.item7.budget = req.body.budget.item7.budget;
        }
        if (req.body.budget.item8 != null) {
            res.user.budget.item8.title = req.body.budget.item8.title;
            res.user.budget.item8.budget = req.body.budget.item8.budget;
        }
        if (req.body.budget.item9 != null) {
            res.user.budget.item9.title = req.body.budget.item9.title;
            res.user.budget.item9.budget = req.body.budget.item9.budget;
        }
    }
    
    if (req.body.spent != null) {
        if (req.body.spent.item0 != null) {
            res.user.spent.item0 = req.body.spent.item0;
        }
        if (req.body.spent.item1 != null) {
            res.user.spent.item1 = req.body.spent.item1;
        }
        if (req.body.spent.item2 != null) {
            res.user.spent.item2 = req.body.spent.item2;
        }
        if (req.body.spent.item3 != null) {
            res.user.spent.item3 = req.body.spent.item3;
        }
        if (req.body.spent.item4 != null) {
            res.user.spent.item4 = req.body.spent.item4;
        }
        if (req.body.spent.item5 != null) {
            res.user.spent.item5 = req.body.spent.item5;
        }
        if (req.body.spent.item6 != null) {
            res.user.spent.item6 = req.body.spent.item6;
        }
        if (req.body.spent.item7 != null) {
            res.user.spent.item7 = req.body.spent.item7;
        }
        if (req.body.spent.item8 != null) {
            res.user.spent.item8 = req.body.spent.item8;
        }
        if (req.body.spent.item9 != null) {
            res.user.spent.item9 = req.body.spent.item9;
        }
    }

    if (req.body.year != null) {
        if (req.body.year.Jan != null) {
            res.user.year.Jan = req.body.year.Jan;
        }
        if (req.body.year.Feb != null) {
            res.user.year.Feb = req.body.year.Feb;
        }
        if (req.body.year.Mar != null) {
            res.user.year.Mar = req.body.year.Mar;
        }
        if (req.body.year.Apr != null) {
            res.user.year.Apr = req.body.year.Apr;
        }
        if (req.body.year.May != null) {
            res.user.year.May = req.body.year.May;
        }
        if (req.body.year.Jun != null) {
            res.user.year.Jun = req.body.year.Jun;
        }
        if (req.body.year.Jul != null) {
            res.user.year.Jul = req.body.year.Jul;
        }
        if (req.body.year.Aug != null) {
            res.user.year.Aug = req.body.year.Aug;
        }
        if (req.body.year.Sep != null) {
            res.user.year.Sep = req.body.year.Sep;
        }
        if (req.body.year.Oct != null) {
            res.user.year.Oct = req.body.year.Oct;
        }
        if (req.body.year.Nov != null) {
            res.user.year.Nov = req.body.year.Nov;
        }
        if (req.body.year.Dec != null) {
            res.user.year.Dec = req.body.year.Dec;
        }
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Delete
router.delete('/:id', getUser, async (req,res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Middleware to get user by id
async function getUser(req,res,next) {
    let user;
    try{
        user = await userModel.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
}

module.exports = router;