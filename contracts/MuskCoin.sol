// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MuskCoin is ERC20 {
    constructor() ERC20("MuskCoin", "$MUSK") {
        _mint(msg.sender, 100000 * 1e18);
    }
}