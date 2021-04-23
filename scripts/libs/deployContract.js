module.exports = async function (params, hre) {

  const { ethers, network, upgrades } = hre;
  const [deployer] = await ethers.getSigners();

  const contractFactory = await ethers.getContractFactory("MuskCoin");
  muskContract = await contractFactory.deploy();
  await muskContract.deployed();
  console.log("MuskCoin token deployed at ", muskContract.address);

  const balance = await muskContract.connect(deployer).balanceOf(deployer.address);

  console.log(ethers.utils.formatEther(balance.toString()).toString());

  if(hre.network.name != 'hardhat') {
    await hre.run("verify:verify", {
      network: hre.network.name,
      address: muskContract.address,
      constructorArguments: []
    });
  }
}