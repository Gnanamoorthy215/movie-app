module.exports = (sequelize, DataTypes) => {
    const Actors = sequelize.define("actors", {
      actor_id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

      },
      name: {
        type: DataTypes.STRING
      },
      gender:{
        type:DataTypes.CHAR
      },
      dob:{
        type:DataTypes.DATE
      },
      bio:{
        type:DataTypes.TEXT
      }

    });
  
    return Actors;
};