module.exports = {
  db: {
    url: process.env.DATABASE_URL,
    name: 'db',
    connector: 'postgresql'
  },
  multas: {
    url: process.env.DATABASE_URL,
    name: 'multas',
    connector: 'postgresql'
  }
};
