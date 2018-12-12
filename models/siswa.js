'use strict';
module.exports = (sequelize, DataTypes) => {
  const Siswa = sequelize.define('Siswa', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kelas: DataTypes.INTEGER
  }, {});
  Siswa.associate = function(models) {
    // associations can be defined here
  };
  return Siswa;
};