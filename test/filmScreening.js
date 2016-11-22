const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const moment = require('moment')
const FSModel = require('../app/models/FilmScreeningModel.js')

chai.use(chaiHttp)

describe('http routes for film-screening',  () => {

    describe('Requests to the get film-screening route', () => {

        it('Returns a 200 status code', (done) => {
            chai.request(app)
                .get('/film-screening')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    done()
                })
        })

        it('Returns a JSON format', (done) => {
            chai.request(app)
                .get('/film-screening')
                .end((err, res) => {
                    expect(res).to.be.json
                    done()
                })
        })

        it('It should returns todays film_screening', (done) => {
            FSModel.getAllForToday((err, data) => { // Get result from database
                if (err) throw err
                chai.request(app)
                    .get('/film-screening')
                    .end((err, res) => {
                        const responseData = JSON.stringify(res.body.data)
                        const resultExpected = JSON.stringify(data)

                        expect(responseData).to.equal(resultExpected)
                        done()
                    })
            })

        })

        it('It should returns future film_screening to queryString date', (done) => {
            const toDate = moment().add(2, 'days')
            const toDateFormat = toDate.format('YYYY-MM-DD')

            FSModel.getFilmScreeningToDate(toDate, (err, data) => {
                chai.request(app)
                    .get(`/film/affiche?to=${toDateFormat}`)
                    .end((err, res) => {
                        const responseData = JSON.stringify(res.body.data)
                        const resultExpected = JSON.stringify(data)
                        expect(responseData).to.equal(resultExpected)
                        done()
                    })
            })

        })

    })
})