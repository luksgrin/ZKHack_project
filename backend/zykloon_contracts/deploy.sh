source .env

forge script "script/DeployZyKloon.s.sol:DeployZykloon" --rpc-url $MUMBAI_RPC_URL --broadcast --verify --etherscan-api-key $MUMBAI_POLYGONSCAN_API -vvvv