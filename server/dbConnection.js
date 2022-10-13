import knex from "knex";
import knexfile from "../knexfile.js";

export const myKnex = knex(knexfile[process.env.NODE_ENV || "development"]);
