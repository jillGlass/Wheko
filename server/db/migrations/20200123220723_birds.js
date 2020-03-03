
exports.up = function(knex) {
    return knex.schema.createTable('birds', (table) => {
        table.increments('bird_id')
        table.text('name')
        table.text('info')
        table.text('image')
        table.integer('number')
        table.boolean('found')
        table.text('category')
        table.text('status')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('birds')
};
