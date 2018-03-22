module.exports = {
  up: (queryInterface, Sequelize) => {
    // logic for transforming into the new state

    /*queryInterface.addColumn(
     'nameOfAnExistingTable',
      'nameofTheNewAttribute',
      Sequelize.STRING)
      */
  },

  down: (queryInterface, Sequelize) => {
    // logic for reverting the changes
    /*queryInterface.removeColumn(
      'nameOfAnExistingTable',
      'nameOfTheAttribute')
      */
  }
}
