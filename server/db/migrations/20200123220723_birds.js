
exports.up = function (knex) {
    return knex.schema.createTable('birds', (table) => {
      table.increments('bird_id')
      table.string('name')
      table.text('info',2000) 
      table.string('image')
      table.bigInteger('number')
      table.boolean('found')
      table.string('category')
      table.string('status')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('birds')
  }

//   table.integer('number')