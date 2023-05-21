const express = require("express");
const router = express.Router();
const { users } = require("../src/util.js")

router.post("/register", (req, res) => {
	if(!req.body.hasOwnProperty("name")){
		return res.status(400).send({
			error: 'Bad Request - missing required parameter NAME'
		})
	}

	if(!req.body.hasOwnProperty("age")){
		return res.status(400).send({
			error: 'Bad Request - missing required parameter AGE'
		})
	}

	if(!req.body.hasOwnProperty("username")){
		return res.status(400).send({
			error: 'Bad Request - missing required parameter USERNAME'
		})
	}

	if(typeof req.body.age !== 'number'){
		return res.status(400).send({
			error : 'Bad Request: AGE has to be a number'
		})
	}
})

router.post('/login',(req,res)=>{

    
    let foundUser = users.find((user) => {
        // stretch goal
        // return only if it matches both username & pw
        if(user.username === req.body.username && user.password === req.body.password) return user
    });

    if(!req.body.hasOwnProperty("username")){
        return res.status(400).send({
            'error' : 'Bad Request: missing required parameter USERNAME'
        })
    }

    if(!req.body.hasOwnProperty("password")){
        return res.status(400).send({
            'error' : 'Bad Request: missing required parameter PASSWORD'
        })
    }

    if(foundUser){
        return res.status(200).send({
            'success': 'Thank you for logging in.'
        })
    } else {
        // return 403 if foundUser return null/undefined
        return res.status(403).send({
            'error': 'Invalid credentials'
        })
    }

})

module.exports = router;