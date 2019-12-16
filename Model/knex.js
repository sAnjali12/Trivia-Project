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

insertData=(data)=>{
    return knex('Trivia').insert(data)
};

select = (user_data)=>{
    return knex.select("*").from("Trivia")
}
module.exports={insertData,select}