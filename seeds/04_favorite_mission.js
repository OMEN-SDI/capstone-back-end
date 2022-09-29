/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("favorite_mission").del();
  await knex("favorite_mission").insert([
    { msn_id: 1, user_id: 1 },
    { msn_id: 2, user_id: 4 },
  ]);
}
