// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "zk-connect-solidity/SismoLib.sol";
import "solmate/auth/Owned.sol";

contract ZyKloonVault is Owned {//ZkConnect, Owned {

    uint256 constant DEPOSIT_AMOUNT = 1 ether;

    // the id of the group we want our users to be member of
    bytes16 public GROUP_ID;
    // Object that contains the claim, auth and message signature requests
    // that was used for the proof generation in the Data Vault app
    // it needs to match the requests made by the frontend to the Data Vault app
    ZkConnectRequestContent private zkConnectRequestContent;

    mapping(address => bool) public deposited;
    mapping(uint => address) public nullifier;

    event Deposit(address indexed user);

    error AlreadyDeposited();
    error WrongDepositAmount();
    error TransferFailed();

    modifier onlyValue() {
        if (!(msg.value == DEPOSIT_AMOUNT)) {
            revert WrongDepositAmount();
        }
        _;
    }

    modifier hasDeposited() {
        if (deposited[msg.sender]) {
            revert AlreadyDeposited();
        }
        _;
    }

    constructor(
        bytes16 appId // the appId of your zkConnect app (you need to register your zkConnect app on https://factory.sismo.io)
    ) Owned(msg.sender) {}//ZkConnect(appId) {}

    function setGroupID(bytes16 _group_id) external onlyOwner {
        GROUP_ID = _group_id;
        transferOwnership(address(0));
    }

    function deposit() external payable hasDeposited onlyValue {
        deposited[msg.sender] = true;
        emit Deposit(msg.sender);
    }

    /**
     * @notice Claim a funds on the address `to` thanks to a zkConnect response containing a valid proof
     *         with respect to the auth, claim and message signature requests
     * @param zkConnectResponse the zkConnect response from the Data Vault app in bytes
     * @param to the address to mint the token to
     */
    /*function withdraw(bytes memory zkConnectResponse, address to) public {
        // the verify function will check that the zkConnectResponse proof is cryptographically valid
        // with respect to the auth, claim and message signature requests
        // i.e it checks that the user is member of the group with id GROUP_ID
        // that he is the owner of a Sismo Data Vault
        // and that the message signature is valid
        ZkConnectVerifiedResult memory zkConnectVerifiedResult = verify({
            responseBytes: zkConnectResponse,
            authRequest: buildAuth({authType: AuthType.ANON}),
            claimRequest: buildClaim({groupId: GROUP_ID}),
            messageSignatureRequest: abi.encode(to),
            namespace: "Epoch" // Edit this to change after each epoch
        });

        // nullify the deposit
        uint256 userId = zkConnectVerifiedResult.verifiedAuths[0].userId;

        require(!nullifier[userId], "ZyKloonVault: already withdrawn");

        nullifier[userId] = true;

        // if the proof is valid, we mint the token to the address `to`
        // the tokenId is the anonymized userId of the user that claimed the token
        // if the user calls the claimWithZkConnect function multiple times
        // he will only be able to claim one token
        //uint256 tokenId = zkConnectVerifiedResult.verifiedAuths[0].userId;
        (bool success, ) = to.call{value: DEPOSIT_AMOUNT}("");

        if (!success) {
            revert TransferFailed();
        }
    }*/
}
