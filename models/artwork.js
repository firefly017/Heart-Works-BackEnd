"use strict";
module.exports = (sequelize, DataTypes) => {
  const artwork = sequelize.define(
    "artwork",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      hearts: { type: DataTypes.INTEGER, defaultValue: 0 },
      minimumBid: { type: DataTypes.INTEGER, min: 0 },
    },
    {}
  );
  artwork.associate = function (models) {
    // associations can be defined here
    artwork.belongsTo(models.user);
    artwork.hasMany(models.bid);
  };
  return artwork;
};
