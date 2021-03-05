module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });

    User.associate = function(models) {
      User.hasMany(models.Post,{
          foreignKey : 'userId',
          as : 'posts'
      });
  };
  
    return User;
  };