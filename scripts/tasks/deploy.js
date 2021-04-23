require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const deployContract = require('../libs/deployContract');

task('deployContract', 'Deploys the Musk token')
  .setAction(async (params, hre) => {
    await run('compile');
    await deployContract(params, hre);
  })