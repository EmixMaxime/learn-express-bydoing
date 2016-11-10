const expect = require('chai').expect
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('./../app.js')

const pg = require('./../src/pg.js')
let model = require('./../src/model/FilmScreening.js')
const FilmScreeningModel = new model()
let model2 = require('./../src/model/FilmModel.js')
const FilmModel = new model2()

chai.use(chaiHttp);

describe('http routes for film_screening',  () => {

    describe('Requests to the get film_screening route', () => {

        it('Returns a 200 status code', async () => {
            const response = await chai.request(app)
                .get('/film_screening')
            expect(response).to.have.status(200)
        })

        it('Returns a JSON format', async () => {
            const res = await chai.request(app)
                .get('/film_screening')
            expect(res).to.be.json
        })

        it('Returns good data', async () => {
            let resultExpected = await FilmScreeningModel.getAllForToday() // Get result from database

            const res = await chai.request(app)
                .get('/film_screening')
            const responseData = JSON.stringify(res.body)
            resultExpected = JSON.stringify(resultExpected)

            expect(responseData).to.equal(resultExpected)
        })

    })
})

describe('http routes for film', () => {

    describe('Requests to the get film route', () => {

        it('Returns good data', async () => {
            let resultExpected = await FilmModel.getActualFilm()

            const res = await chai.request(app)
                .get('/film')

            const responseData = JSON.stringify(res.body)
            resultExpected = JSON.stringify(resultExpected)
            expect(responseData).to.equal(resultExpected)
        })
    })
})