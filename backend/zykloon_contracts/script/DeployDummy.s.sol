// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/DummyVault.sol";

contract DeployDummy is Script {

    bytes16 immutable APP_ID = 0xad0038dcb4c955565d81cbb7eddc77e9;

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        DummyVault vault = new DummyVault({
            appId: APP_ID
        });

        vm.stopBroadcast();
    }
}