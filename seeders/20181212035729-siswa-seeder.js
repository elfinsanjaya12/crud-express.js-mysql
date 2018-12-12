'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Siswas', [{
      nama: 'John Doe',
      alamat: 'Jakarta',
      kelas: 12,
      createdAt : new Date(),
      updatedAt : new Date(),
    }, {
      nama: 'John Doe',
      alamat: 'Jakarta',
      kelas: 12,
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Siswas', null, {});
  }
};
