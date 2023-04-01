// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract DummyVault {
    uint256 constant DEPOSIT_AMOUNT = 1 ether;
    uint256 constant EPOCH_DURATION = 1 weeks;

    // the id of the group we want our users to be member of
    bytes16 public GROUP_ID;
    uint256 public currentEpoch = 0;
    uint256 public currentEpochStartTimestamp;

    mapping(uint => mapping(address => bool)) public hasDeposited;

    event Deposit(address indexed user);
    event Withdrawal(address indexed user);
    event EpochStarted(uint256 epoch);

    error AlreadyDeposited();
    error WrongDepositAmount();
    error TransferFailed();
    error EpochNotStarted(uint256 epoch);

    modifier onlyValue() {
        if (!(msg.value == DEPOSIT_AMOUNT)) {
            revert WrongDepositAmount();
        }
        _;
    }

    constructor() {}

    function deposit() external payable onlyValue {
        if (_epochFinished()) {
            startNewEpoch();
        }
        if (hasDeposited[currentEpoch][msg.sender]) {
            revert AlreadyDeposited();
        }
        hasDeposited[currentEpoch][msg.sender] = true;
        emit Deposit(msg.sender);
    }

    /**
     * @notice Claim a funds on the address `to` thanks to a zkConnect response containing a valid proof
     *         with respect to the auth, claim and message signature requests
     * @param to the address to mint the token to
     */
    function withdraw(
        bytes memory,
        address to, // prevent front-running by passing the address to mint the token to as a parameter
        uint epoch // epoch 1, 2 ...
    ) public {
        if (epoch > currentEpoch) {
            revert EpochNotStarted(epoch);
        }

        // if the proof is valid, we mint the token to the address `to`
        // the tokenId is the anonymized userId of the user that claimed the token
        // if the user calls the claimWithZkConnect function multiple times
        // he will only be able to claim one token
        //uint256 tokenId = zkConnectVerifiedResult.verifiedAuths[0].userId;
        (bool success, ) = to.call{value: DEPOSIT_AMOUNT}("");

        if (!success) {
            revert TransferFailed();
        }
        emit Withdrawal(to);
    }

    // internal function to start new epoch

    function _epochFinished() internal view returns (bool) {
        return block.timestamp >= currentEpochStartTimestamp + EPOCH_DURATION;
    }

    function startNewEpoch() public {
        if (_epochFinished()) {
            currentEpoch++;
            currentEpochStartTimestamp = block.timestamp;
            emit EpochStarted(currentEpoch);
        }
    }

    function uint256ToBytes16(
        uint256 value
    ) public pure returns (bytes16 result) {
        bytes memory temp = abi.encodePacked(value);
        assembly {
            result := mload(add(temp, 16))
        }
    }
}
