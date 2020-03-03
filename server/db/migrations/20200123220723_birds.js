
exports.up = function(knex) {
    return knex.schema.createTable('birds', (table) => {
        table.increments('bird_id')
        table.string('name')
        table.text('info')
        table.string('image')
        table.integer('number')
        table.boolean('found')
        table.string('category')
        table.string('status')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('birds')
};
