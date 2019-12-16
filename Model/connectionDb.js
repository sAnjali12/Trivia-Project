const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'navgurukul',
        database: 'Trivia_Project'
    }
}

const knex = require('knex')(options);

knex.schema.createTable('Trivia', (table) => {
    table.increments('id')
    table.string('Questions')
    table.string('Answer')
})
    .then(() => {
        console.log("table created")
    })

.catch((err) => { console.log(err); throw err })
.finally(() => {
    knex.destroy();
});