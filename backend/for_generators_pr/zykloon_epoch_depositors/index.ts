import {JsonRpcProvider} from "@group-generators/helpers/data-providers/json-rpc/json-rpc";
import {
  ValueType,
  Tags,
  FetchedData,
  GroupWithData,
} from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";
import {ethers} from "ethers";


const MUMBAI_TESTNET_RPC = "https://matic-mumbai.chainstacklabs.com";

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Weekly,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {

    const jsonRPCProvider = new JsonRpcProvider(MUMBAI_TESTNET_RPC);

    // Zykloon contract address
    const zykloonContractAddress = "";
    const zykloonABI =[
        "event Deposit(address indexed user)"
    ];

    const ZykloonContract = new ethers.Contract(
        zykloonContractAddress,
        zykloonABI,
        jsonRPCProvider
    );

    const latest_block = await jsonRPCProvider.getBlockNumber()

    const depositEvents = await ZykloonContract.queryFilter(
        ZykloonContract.filters.Deposit(),
        latest_block - 44800, // 1 week in blocks, given 12s block time
        latest_block 
    );

    const zykloonDepositors: FetchedData = {};

    for (const event of depositEvents) {
        zykloonDepositors[event.args[0]] = 1;
    }

    return [
      {
        // give a name to your group
        name: "zykloon_epoch_depositors",
        timestamp: context.timestamp,
        // add a small description explaining how to be eligible to your group
        description: "Deposit funds in zykloon contract within the specified epoch",
        // document the group eligibility criterias more specifically
        specs: "Deposit Ether in zykloon contract within the specified epoch",
        data: zykloonDepositors,
        valueType: ValueType.Info, // ValueType.Score if we need to increment
        tags: [Tags.User],
      },
    ];
  },
};

export default generator;