/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("mission_type").del();
  await knex("mission_type").insert([
    { msn_type_name: "Security Forces" },
    { msn_type_name: "Submarine" },
    { msn_type_name: "CAS" },
  ]);
}
