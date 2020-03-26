export default (sequelize, DataTypes) => {
    let Run = sequelize.define('run', {
        start_date: DataTypes.STRING,
        start_fuel_level: DataTypes.STRING,
        start_mileage: DataTypes.INTEGER,
        driver_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
},
    {
        freezeTableName: true,
        timestamps: false,
    });

    Run.sync();

    return Run;
};