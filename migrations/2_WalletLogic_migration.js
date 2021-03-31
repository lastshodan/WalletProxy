let WalletLogic = artifacts.require("./WalletLogic.sol");
let WalletProxy = artifacts.require("./WalletProxy.sol");


module.exports = function(deployer) {
    deployer.deploy(WalletLogic).then(() => {
    	return deployer.deploy(WalletProxy,WalletLogic.address);

    });
};