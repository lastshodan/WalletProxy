/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

module.exports = {
solidity: "0.7.0",

networks : {
	development: {url:"http://localhost:8545"},
}
};
