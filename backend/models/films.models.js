module.exports = (sequelize, DataTypes) => {
    const Films = sequelize.define("films", {
      film_id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

      },
      title: {
        type: DataTypes.STRING
      },
      plot: {
        type: DataTypes.STRING
      },
      released:{
        type:DataTypes.INTEGER
      },
      runtime:{
        type:DataTypes.STRING
      }


    });
  
    return Films;
};