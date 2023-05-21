const { exchangeRates } = require('../src/util.js');
const express = require("express");
const router = express.Router();

	router.get('/rates', (req, res) => {
		return res.status(200).send(exchangeRates);
	})

	router.post('/currency', (req, res) => {
		details = {
			alias: req.body.alias,
			name: req.body.name,
			ex: req.body.ex
		}
		
		// check if there are missing parameters
		for(property in details){
			if(details[property] === undefined) return res.status(400).send({
				'error': `Invalid parameter ${property}`
			})
		}

		// checking the type of parameters
		if(typeof details.name !== 'string' 
		|| details.name.length === 0 
		|| typeof details.ex !== 'object'
		|| Object.keys(details.ex).length === 0
		|| typeof details.alias !== 'string'
		|| details.alias.length === 0 
		) 
		return res.status(400).send({
			'error': `Invalid parameter`
		})

		// checking for duplicate alias
		duplicate = exchangeRates.find(rate => rate.alias === details.alias)

		if(duplicate) return res.status(400).send({
			'error': `Duplicate alias`
		})

		res.status(200).send({
			'success': "OK"
		})

	})

module.exports = router;
