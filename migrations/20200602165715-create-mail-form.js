'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MailForms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(60)
      },
      type: {
        type: Sequelize.STRING(60)
      },
      pass: {
        type: Sequelize.BOOLEAN
      },
      contents: {
        type: Sequelize.TEXT
      },
      header_image: {
        type: Sequelize.TEXT
      },
      map_image: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MailForms');
  }
};