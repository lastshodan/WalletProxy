# WalletProxy
Wallet and Minimal Proxy contracts.Wallet contract can be used to transfer different types of ERC20 tokens from different addresses.WalletProxy contract impliments the Minimal Proxy pattern(EIP1167) adapted from Vyper's create_forward_to method.The WalletLogic contract is located at contracts/WalletLogic.sol while the WalletProxy contract is located at contracts/WalletProxy.sol.DegenToken.sol and ApeToken.sol are ERC20 token contracts.They can be transfered to and from the WalletLogic contract.

Setup
----

git clone https://github.com/lastshodan/WalletProxy

Please use the following commands:

->cd WalletProxy

->npm install

->truffle console

->truffle(development)> compile 

you can also compile using Hardhat ----> #npx hardhat compile 

->truffle(development)> migrate --reset

you can also deploy using Hardhat -----> #npx hardhat run scripts/deploy.js

run tests by:

->truffle(development)> test

You can use the above commands by spinning up Ganache-CLI.
