const {
  winGame1,
  winGame2,
  winGame3or4,
  winGame5,
} = require("./winFunctions.js");

async function mainWin(contractNumber, contractAddress) {
  const contractsAmount = 5; // The amount of contracts in the contracts folder
  // Validate the input
  if (
    isNaN(contractNumber) ||
    contractNumber <= 0 ||
    contractNumber > contractsAmount
  ) {
    throw new Error("Invalid or undefined contract number.");
  }

  if (!ethers.utils.isAddress(contractAddress)) {
    throw new Error("Invalid or undefined contract address.");
  }

  const contractName = `Game${contractNumber}`;
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, contractAddress);
  let receipt;

  switch (contractNumber) {
    case "1":
      receipt = await winGame1(game);
      break;
    case "2":
      receipt = await winGame2(game);
      break;
    case "3":
      receipt = await winGame3or4(game, 3);
      break;
    case "4":
      receipt = await winGame3or4(game, 4);
      break;
    case "5":
      receipt = await winGame5(game);
      break;
  }
  console.log(receipt);

  const winnerEvent = receipt.events[0];

  if (winnerEvent.event === "Winner") {
    console.log("You won! :)");
  }
}

module.exports = { mainWin };
