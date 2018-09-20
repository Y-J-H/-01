'use strict';
const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   queryInterface.bulkInsert(
    'shops',
    [
      { id: 1, name: 'shop1', thumb_url: '1.png', ...timestamps }
    ],
    {}
   )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   const { Op } = Sequelize
   return queryInterface.bulkDelete('shops', { id: { [Op.in]: [1] } }, {})
  }
};
