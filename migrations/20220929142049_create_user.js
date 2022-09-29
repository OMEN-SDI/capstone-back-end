/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("user_table", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("username").unique();
    table.string("password");
    table.string("email").unique();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("user_table");
}
