// SPDX-License-Identifier: MIT

/**
 * @title WalletProxy.sol
 * @dev contract that impliments a minimal proxy contract.
 * Borrows from Vypers create_forwarder_to().
 * Was not possible to use Openzepplins minimal proxy contracts since they are
   no longer been supported.They only support Solidity compiler version 0.5.x
 */

pragma solidity ^0.7.0;


contract WalletProxy {
   	address WalletLogic;

   	constructor(address _WalletLogic){
   		WalletLogic = _WalletLogic;
   	}

	/**
 	* @dev forward() adapted from vyper's create_forwarder to clone a contract like WalletLogic
 	* 
 	*/
 	function forward () external returns(bytes memory) {
 		(bool success, bytes memory data) = WalletLogic.delegatecall(msg.data);

 		require (success);

 		return data;
 	
 	}
     
 }


