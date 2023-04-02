// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
// cast send 0xe1581476e0a926C0fFC4e2E754C0bB82201378d7 "setGroupID(bytes16)" "0x1f24b274281ec802e53e1ded0dffc810" --rpc-url=$GOERLI_RPC_URL --private-key=$PRIVATE_KEY -vvvv
import "forge-std/Script.sol";
import "../src/ZyKloonVault.sol";

contract GroupIDSetup is Script {

    bytes16 immutable GROUP_ID = 0x1f24b274281ec802e53e1ded0dffc810;
    address immutable MY_CONTRACT = 0x0509eE017540EC6156978dfa843B0615c881402D;

    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);

        ZyKloonVault vault = ZyKloonVault(MY_CONTRACT);
        vault.setGroupID(GROUP_ID);

        vm.stopBroadcast();
    }
}