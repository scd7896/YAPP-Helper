'use strict';
module.exports = (sequelize, DataTypes) => {
  const MailForm = sequelize.define('MailForm', {
    title: DataTypes.STRING(60),
    type: DataTypes.STRING(60),
    pass: DataTypes.BOOLEAN,
    contents: DataTypes.TEXT,
    header_image: DataTypes.TEXT,
    map_image: DataTypes.TEXT
  }, {});
  MailForm.associate = function(models) {
    // associations can be defined here
  };
  return MailForm;
};