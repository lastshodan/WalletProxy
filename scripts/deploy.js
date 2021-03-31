// This is a Hardhat script for deploying the contracts. 

async function main() {
  
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());


  
 //deploy DegenToken

  const DegenToken = await ethers.getContractFactory("DegenToken");
  console.log("Deploying DegenToken....");
  const degentoken = await DegenToken.deploy();
  await degentoken.deployed();
  console.log("DegenToken address:", degentoken.address); 

  //deploy ApeToken
  
  const ApeToken = await ethers.getContractFactory("ApeToken");
  console.log("Deploying ApeToken....");
  const apetoken = await ApeToken.deploy();
  await apetoken.deployed();
  console.log("ApeToken address:", apetoken.address); 



  //deploy WalletLogic

  const WalletLogic = await ethers.getContractFactory("WalletLogic");
  console.log("Deploying WalletLogic....");
  const walletlogic = await WalletLogic.deploy();
  await walletlogic.deployed();
  console.log("WalletLogic address:", walletlogic.address);

  
  //deploy WalletProxy
  
  const WalletProxy = await ethers.getContractFactory("WalletProxy");
  console.log("Deploying WalletProxy....");
  const walletproxy = await WalletProxy.deploy(walletlogic.address);
  await walletproxy.deployed();
  console.log("WalletProxy address:", walletproxy.address); 

} 


  main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
