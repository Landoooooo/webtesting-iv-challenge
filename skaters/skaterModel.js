const db = require('../data/dbConfig');

module.exports = {
    insert,
    remove,
    all
};

async function insert(skater){
    const [id] = await db('skater_table').insert(skater);

    return db('skater_table')
        .where({ id })
        .first();
}

function remove(id){
    return db('skater_table')
        .where({ id })
        .del()
}

function all(){
    return db('skater_table')
}