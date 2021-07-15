module.exports = (sequelize, Sequelize) => {
  const FoundsPet = sequelize.define("founds_pet", {
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.STRING,
    },
    dis_features: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    photo: { type: Sequelize.TEXT },
    email: { type: Sequelize.STRING, allowNull: false },
    name:{type: Sequelize.STRING},
    phone:{type: Sequelize.STRING}
  });

  return FoundsPet;
};
