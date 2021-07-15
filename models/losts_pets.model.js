module.exports = (sequelize, Sequelize) => {
  const LostsPet = sequelize.define("losts_pet", {
    nickname: { type: Sequelize.STRING, allowNull: false },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    breed: { type: Sequelize.STRING, allowNull: false },
    color: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.STRING,
    },
    location: { type: Sequelize.STRING },
    height: { type: Sequelize.STRING },
    dis_features: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    photo: { type: Sequelize.TEXT },
    phone: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING, allowNull: false },
  });

  return LostsPet;
};
