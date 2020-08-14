const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize) => {
    class user extends Model {}
    user.init(
        {
            userName: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            avatar: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            socketId: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
        },
        { modelName: 'user', sequelize, paranoid: true }
    );
    user.associate = (Models) => {
        user.hasMany(Models.message, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        });
        user.belongsToMany(Models.room, { through: 'user_room' });
    };
    return user;
};
