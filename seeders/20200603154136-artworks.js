"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "artworks",
      [
        {
          id: 1,
          title: "Saihan's art",
          imageUrl: "https://picsum.photos/200/300",
          hearts: 0,
          minimumBid: 200,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Saariba's art",
          imageUrl: "https://picsum.photos/200/300",
          hearts: 0,
          minimumBid: 200,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Arka's art",
          imageUrl: "https://picsum.photos/200/300",
          hearts: 0,
          minimumBid: 200,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artworks", null, {});
  },
};
