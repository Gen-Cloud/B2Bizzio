module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4cc981f05ad9a50728f11ee6e414c994'),
  },
});
