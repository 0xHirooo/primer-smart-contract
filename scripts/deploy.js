const hre = require("hardhat");

async function main() {
  const Criptdle = await hre.ethers.getContractFactory("Criptdle");
  const criptdle = await Criptdle.deploy();
  await criptdle.deployed();

  console.log("Criptdle deployed to:", criptdle.address);
  /*
  let tx = await criptdle.createWord("solow");

  tx = await criptdle.createWord("fork");

  tx = await criptdle.createWord("blockchain");

  tx = await criptdle.readWords();
  console.log(tx);

  tx = await criptdle.useWord("wagmi")

  tx = await criptdle.words("wagmi");
  
  console.log(tx);
  */
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });