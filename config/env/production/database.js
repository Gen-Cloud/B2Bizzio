//const parse = require("pg-connection-string").parse;
//const config = parse(process.env.DATABASE_URL);

module.exports = () => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "db-postgres-do-user-211953-0.b.db.ondigitalocean.com",
        port: "25060",
        database: "defaultdb",
        username: "doadmin",
        password: "PHLXMyWRhDzwJw8J",
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {},
    },
  },
});
//postgres://${db-postgres.USERNAME}:${db-postgres.PASSWORD}@${db-postgres.HOSTNAME}:${db-postgres.PORT}/${db-postgres.DATABASE}
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "127.0.0.1"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "b2bizzio"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "h0db!zz1o"),
//       ssl: env.bool("DATABASE_SSL", false),
//     },
//   },
// });
