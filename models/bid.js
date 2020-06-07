"use strict";
module.exports = (sequelize, DataTypes) => {
  const bid = sequelize.define(
    "bid",
    {
      email: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.INTEGER, min: 0 }, //to prevent neg entry
    },
    {}
  );
  bid.associate = function (models) {
    // associations can be defined here
    bid.belongsTo(models.artwork);
  };
  return bid;
};
