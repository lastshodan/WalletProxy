let ApeToken = artifacts.require("./ApeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ApeToken);
};