import knex from "knex";
import knexfile from "../knexfile.js";

export const myKnex = knex(knexfile.development);

// export default myKnex;
