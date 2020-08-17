module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      token: DataTypes.TEXT,
      name: DataTypes.STRING(60),
    },
    {
      scopes: {
        whereUser(token) {
          return {
            where: {
              token: token,
            },
          };
        },
      },
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
