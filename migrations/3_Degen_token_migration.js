let DegenToken = artifacts.require("./DegenToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DegenToken);
};