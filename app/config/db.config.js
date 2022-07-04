module.exports = {
  HOST: "us-cdbr-east-05.cleardb.net",
    // HOST: "localhost",
  USER: "bc07a854e57c1e",
  // USER: "root",
  PASSWORD: "712478df",
  // PASSWORD: "",
  DB: "heroku_44150890167a4f1",
  // DB: "e-commerce-api",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};