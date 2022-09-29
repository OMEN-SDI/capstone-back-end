/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("user_table").del();
  await knex("user_table").insert([
    {
      first_name: "Ian",
      last_name: "Gardocki",
      username: "IGardocki",
      password: "password123",
      email: "ian.d.gardocki@gmail.com",
    },
    {
      first_name: "Joshua",
      last_name: "Clodfelter",
      username: "clodman",
      password: "password123",
      email: "clodexample@gmail.com",
    },
    {
      first_name: "Jacob",
      last_name: "Bodenbender",
      username: "mustache",
      password: "password123",
      email: "jbodenbender10@gmail.com",
    },
    {
      first_name: "Mark",
      last_name: "Scarna",
      username: "markscarna",
      password: "password1234",
      email: "markscarna@gmail.com",
    },
  ]);
}
