"use strict";
const crypto = require("crypto");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          token: crypto.createHash("sha512").update(process.env.GOOGLE_ACCESS.toString()).digest("base64"),
          name: "supportYapp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          token: crypto.createHash("sha512").update(process.env.CDO_ACCESSTOKEN.toString()).digest("base64"),
          name: "supportYapp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
