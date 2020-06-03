"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "bids",
      [
        {
          id: 1,
          email: "saihan@adnan.com",
          amount: 205,
          // artworkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          email: "saariba@papia.com",
          amount: 208,
          // artworkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          email: "arka@hasnat.com",
          amount: 205,
          // artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          email: "jui@nahar.com",
          amount: 220,
          // artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          email: "ruma@sharmin.com",
          amount: 270,
          // artworkId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("bids", null, {});
  },
};
