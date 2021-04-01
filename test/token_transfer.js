const WalletLogic = artifacts.require('./WalletLogic.sol');
const ApeToken = artifacts.require('./ApeToken.sol');
const DegenToken = artifacts.require('./DegenToken.sol');

const BigNumber = web3.utils.BN;

const should = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

let sender, ape, degen;

contract('token_transfer', async (accounts) => {

    let accountA, accountB, accountC, accountD;

    [accountA, accountB, accountC, accountD ] = accounts;

    let bytes32Ape = web3.utils.fromAscii("APE");
    let bytes32Degen = web3.utils.fromAscii("DEGEN");
    beforeEach(async () => {
        sender = await WalletLogic.new();
        ape = await ApeToken.new();
        degen = await DegenToken.new();

        await sender.addNewToken(bytes32Ape, ape.address);
        await sender.addNewToken(bytes32Degen, degen.address);
    });

    it("should be able to transfer sender token to another wallet", async() => {
        let amount = new BigNumber(500000e5);

        await ape.approve(sender.address, amount,{from: accountA});

        await sender.transferTokens(bytes32Ape,accountB, amount,{from: accountA});

        let balance = ((await  ape.balanceOf(accountB)).toString());

        balance.should.equal(amount.toString())
    });

});
