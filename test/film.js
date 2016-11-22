const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')
const app = require('../app.js')
const moment = require('moment')
const FModel = require('../app/models/FilmModel.js')

chai.use(chaiHttp)


describe('http routes for film', () => {

    describe('Requests to the get film route', () => {

        it('Returns a 200 status code', (done) => {
            chai.request(app)
                .get('/film')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    done()
                })
        })

        describe('Returns good data', () => {

            it('It should return today film without queryString', (done) => {
                FModel.get(null, (err, data) => {
                    if (err) throw err
                    chai.request(app)
                        .get('/film')
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
})