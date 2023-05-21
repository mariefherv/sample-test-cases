const chai = require('chai');
const{ assert }= require('chai');
const http = require('chai-http');
chai.use(http);

describe('forex_api_test_suite', () => {
	
	it('test_api_get_rates_is_running', (done) => {
		chai.request('http://localhost:5001').get('/forex/getRates')
		.end((err, res) => {
			assert.isDefined(res);
			done();
		})
	})
	
	it('test_api_get_rates_returns_200', (done) => {
		chai.request('http://localhost:5001')
		.get('/forex/rates')
		.end((err, res) => {
			assert.equal(res.status,200)
			done();	
		})		
	})
	
	it('test_api_post_currency_returns_200_if_complete_input_given', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			name: 'Shadowrun Nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,200)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_name_is_missing', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_name_is_not_a_string', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			name: 2,
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_name_is_an_empty_string', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			name: '',
			alias: 'nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_ex_is_missing', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			name: 'Shadowrun Nuyen',
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_ex_is_not_an_object', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			name: 'Shadowrun Nuyen',
			ex: 'object'
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_ex_returns_an_empty_object', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			name: 'Shadowrun Nuyen',
			ex: {}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_alias_is_missing', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			name: 'Shadowrun Nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_alias_is_not_a_string', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 1,
			name: 'Shadowrun Nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_alias_is_an_empty_string', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: '',
			name: 'Shadowrun Nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_400_if_field_is_complete_but_there_is_duplicate_alias', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'yuan',
			name: 'Shadowrun Nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,400)
			done()
			
		})
	})

	it('test_api_post_currency_returns_200_if_all_fields_are_complete_and_there_are_no_duplicate_aliases', (done) => {
		chai.request('http://localhost:5001')
		.post('/forex/currency')
		.type('json')
		.send({
			alias: 'nuyen',
			name: 'Shadowrun Nuyen',
			ex: {
				'peso': 0.47,
		        'usd': 0.0092,
		        'won': 10.93,
		        'yuan': 0.065
			}
		})
		.end((err, res) => {
			assert.equal(res.status,200)
			done()
			
		})
	})

})
