async function winGame1(game) {
  const tx = await game.win();

  const receipt = await tx.wait();

  return receipt;
}

async function winGame2(game) {
  const tx1 = await game.setX(25);

  await tx1.wait();

  const tx2 = await game.setY(25);

  await tx2.wait();

  const receipt = await winGame1(game);

  return receipt;
}

async function winGame3or4(game, number) {
  const numberToAdd = number === 3 ? 45 : 56;

  const tx = await game.win(numberToAdd);

  const receipt = await tx.wait();

  return receipt;
}

async function winGame5(game) {
  const allowanceAmount = 100000;
  const tx1 = await game.giveMeAllowance(allowanceAmount);

  await tx1.wait();

  const tx2 = await game.mint(allowanceAmount);

  await tx2.wait();

  const receipt = await winGame1(game);

  return receipt;
}

module.exports = { winGame1, winGame2, winGame3or4, winGame5 };
