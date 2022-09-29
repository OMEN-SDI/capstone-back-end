/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("mission", (table) => {
    table.increments("msn_id");
    table.string("msn_title");
    table.dateTime("msn_date");
    table.integer("msn_type");
    table.foreign("msn_type").references("mission_type.msn_type_id");
    table.string("msn_obj");
    table.string("supporting_players");
    table.string("situation");
    table.string("key_grids");
    table.string("fires");
    table.string("assets");
    table.string("intel");
    table.string("comms");
    table.integer("user_id");
    table.foreign("user_id").references("user_table.id");
    table.string("location");
    table.string("latitude");
    table.string("longitude");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .alterTable("mission", (table) => {
      table.dropForeign("msn_type");
      table.dropForeign("user_id");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("mission");
    });
}
