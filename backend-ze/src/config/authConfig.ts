export default {
  jwt: {
    secret: process.env.JWT_CONFIG_SECRET,
    expiresIn: process.env.JWT_CONFIG_EXPIRES,
  },
};
