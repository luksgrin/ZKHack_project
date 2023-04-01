source .env

forge script "script/DeployZyKloon.s.sol:DeployZykloon" --rpc-url $GOERLI_RPC_URL --broadcast --verify --etherscan-api-key $GOERLI_ETHERSCAN_API -vvvv