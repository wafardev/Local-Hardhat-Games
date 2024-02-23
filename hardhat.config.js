require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
const { task } = require("hardhat/config");
const { mainDeploy } = require("./scripts/deploy.js");
const { mainWin } = require("./scripts/win.js");

task("deployWithNumber", "Deploys a contract with the number of the contract.")
  .addParam("contractNumber", "Number of the contract to deploy")
  .setAction(async (userInput) => {
    await mainDeploy(userInput.contractNumber);
  });

task("winWithArgs", "Tries to emit Winner on the contract.")
  .addParam("contractAddress", "Address of the contract to win")
  .addParam("contractNumber", "Number of the contract to deploy")
  .setAction(async (userInput) => {
    await mainWin(userInput.contractNumber, userInput.contractAddress);
  });

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "localhost",
};
