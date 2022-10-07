/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("user_table").del();
  await knex("user_table").insert([
    {
      first_name: "John",
      last_name: "Snuffy",
      username: "JSnuffy",
      password: "password123",
      email: "jsnuffy@gmail.com",
    },
    {
      first_name: "Jimmy",
      last_name: "Carter",
      username: "jCarter",
      password: "password123",
      email: "jcarter@gmail.com",
    },
  ]);
}
