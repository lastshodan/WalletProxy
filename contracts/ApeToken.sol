// SPDX-License-Identifier: MIT

// ApeToken.sol


pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
* @title ApeToken is a basic ERC20 Token
*/
contract ApeToken is ERC20, Ownable{

    /**
    * @dev assign totalSupply to account creating this contract
    */
    constructor()  ERC20("ApeToken","APE"){
        _setupDecimals(18);
        _mint(msg.sender, 100000000000);
    }
}
