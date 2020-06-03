"use strict";
module.exports = (sequelize, DataTypes) => {
  const artwork = sequelize.define(
    "artwork",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      hearts: { type: DataTypes.INTEGER, defaultValue: 0 },
      minimumBid: { type: DataTypes.INTEGER, min: 0 },
      userId: DataTypes.INTEGER,
    },
    {}
  );
  artwork.associate = function (models) {
    // associations can be defined here
  };
  return artwork;
};
