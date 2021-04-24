require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("./scripts/tasks/deploy.js");

const rinkeby = require("./.secrets/rinkeby.json");
const mainnet = require("./.secrets/mainnet.json");
const { removeConsoleLog } = require("hardhat-preprocessor");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200,
          },
        }
      }
    ]
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  etherscan: {
    apiKey: "U5P14Q45313D3AVKN8TJ879E1UKY5873CW",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "./deploy",
    deployments: "./deployments",
  },
  preprocess: {
    eachLine: removeConsoleLog((bre) => bre.network.name !== "hardhat" && bre.network.name !== "localhost"),
  },
  mocha: {
    timeout: 20000
  },
  networks: {
    development: {
      url: 'http://localhost:8545'
    },
    rinkeby: {
      url: rinkeby.url,
      accounts: rinkeby.accounts
    },
    mainnet: {
      url: mainnet.url,
      accounts: mainnet.accounts
    }
  }
};