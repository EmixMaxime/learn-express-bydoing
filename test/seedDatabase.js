const Faker = require('Faker')
const pg = require('../src/pg')
const SQL = require('sql-template-strings')

const fakeFilm = {
    title: Faker.Lorem.sentence(),
    description: Faker.Lorem.sentence()  + Faker.Lorem.sentence(),
    date_release: "2016-11-08"
    // Faker.Date.past()
}

pg.query(SQL`
    INSERT INTO film(title, description, date_release)
     values(${fakeFilm.title}, ${fakeFilm.description}, ${fakeFilm.date_release})`)
console.log("ENVIRONEMENT MODE", process.env.NODE_ENV )