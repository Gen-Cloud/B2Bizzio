module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "app-cddfe284-e918-449d-ab1c-2badb9611691-do-user-211953-0.b.db.ondigitalocean.com"
      ),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "db"),
      user: env("DATABASE_USERNAME", "db"),
      password: env("DATABASE_PASSWORD", "KepXcAW7PhD6gkZJ"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});

// ssl: {
//     rejectUnauthorized: false,
//     ca: process.env.CACERT,
//   }

//postgresql://db:KepXcAW7PhD6gkZJ@app-cddfe284-e918-449d-ab1c-2badb9611691-do-user-211953-0.b.db.ondigitalocean.com:25060/db?sslmode=require

// module.exports = ({ env }) => ({
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
