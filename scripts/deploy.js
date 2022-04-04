const hre = require("hardhat");

async function main() {
  const Criptdle = await hre.ethers.getContractFactory("Criptdle");
  const criptdle = await Criptdle.deploy();
  await criptdle.deployed();

  console.log("Criptdle deployed to:", criptdle.address);
  
  let tx = await criptdle.createWord("solow");

  tx = await criptdle.createWord("fork");

  tx = await criptdle.createWord("blockchain");

  let words = await criptdle.readWords();
  console.log(words);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });