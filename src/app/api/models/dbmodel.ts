const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });
  
  
const db = { query: (text:string, params:any) => {
      console.log('executed query', text);
      return pool.query(text, params);
    },
    pool: pool
};
export default db;