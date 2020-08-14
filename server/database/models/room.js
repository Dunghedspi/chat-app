const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize) => {
    class room extends Model {}
    room.init(
        {
            name: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
        },
        { modelName: 'room', sequelize, paranoid: true }
    );
    room.associate = (Models) => {
        room.hasMany(Models.message, {
            foreignKey: {
                name: 'roomId',
                allowNull: false,
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        });
        room.belongsToMany(Models.user, { through: 'user_room' });
    };
    return room;
};
