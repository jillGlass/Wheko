
exports.up = function(knex) {
    return knex.schema.createTable('birds', (table) => {
        table.increments('bird_id')
        table.string('name')
        table.string('info')
        table.string('image')
        table.boolean('found')
        table.string('category')
        table.string('status')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('birds')
};
