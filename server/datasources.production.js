module.exports = {
  db: {
    name: 'db',
    connector: 'memory'
  },
  multas: {
    host: process.env.MULTAS_PG_HOST,
    port: process.env.MULTAS_PG_PORT,
    database: process.env.MULTAS_PG_DATABASE,
    user: process.env.MULTAS_PG_USER,
    password: process.env.MULTAS_PG_PASS,
    ssl: true,
    name: 'multas',
    connector: 'postgresql'
  }
};
