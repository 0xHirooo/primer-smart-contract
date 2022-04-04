//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Criptdle {
    
    string[] words;                                   

    constructor() {
        console.log("deployando el contrato");
    }

    function createWord(string memory _word) public {
        words.push(_word);
    }

    function readWords() public view returns(string[] memory) {
        return words;
    }
}