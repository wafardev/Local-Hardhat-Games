async function mainDeploy(contractNumber) {
  const contractsAmount = 5; // The amount of contracts in the contracts folder
  // Validate the input
  if (
    isNaN(contractNumber) ||
    contractNumber <= 0 ||
    contractNumber > contractsAmount
  ) {
    throw new Error("Invalid or undefined contract number.");
  }

  const contractName = `Game${contractNumber}`;

  const Game = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const game = await Game.deploy();
  console.log(`${contractName} deployed to address: ${game.address}`);
}

module.exports = { mainDeploy };
