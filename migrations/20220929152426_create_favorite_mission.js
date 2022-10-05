/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("favorite_mission", (table) => {
    table.increments("favorite_id");
    table.integer("msn_id");
    table.foreign("msn_id").references("mission.msn_id").onDelete("CASCADE");
    table.integer("user_id");
    table.foreign("user_id").references("user_table.id");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .alterTable("favorite_mission", (table) => {
      table.dropForeign("msn_id");
      table.dropForeign("user_id");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("favorite_mission");
    });
}
