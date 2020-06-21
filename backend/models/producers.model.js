module.exports = (sequelize, DataTypes) => {
    const Producers = sequelize.define("producers", {
      producer_id:{
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
  
    return Producers;
};