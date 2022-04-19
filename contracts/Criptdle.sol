//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Criptdle {

    address public owner;
    
    string[] wordsText;     

    struct word {
        string text;
        bool used;
    } 

    mapping(string=>word)public words;   
     modifier Owner(address _address) {
        require(_address == owner, "No tenes permiso para ejecutar esta operacion.");
        _;
    }                

    constructor() {
        owner = msg.sender;
        console.log("La address owner del contrato es: ", owner);
        console.log("deployando el contrato");
    }

    function createWord(string memory _word) public {
        words[_word] = word(_word, false);
        wordsText.push(_word);
    }

    function readWords() public view returns(string[] memory) {
        return wordsText;
    }

    function useWord(string memory _word) public {
        words[_word] = word(_word, true);
    }
}
