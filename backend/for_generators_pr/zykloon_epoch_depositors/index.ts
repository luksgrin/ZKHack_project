import { dataOperators } from "@group-generators/helpers/data-operators";
import { dataProviders } from "@group-generators/helpers/data-providers";
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

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Once,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
    // 1. Instantiate the Lens provider
    const lensProvider = new dataProviders.LensProvider();
    // query all the collectors of the first Sismo Lens post
    // https://lenster.xyz/posts/0x26e5-0x02
    const zykloonDepositors: FetchedData = await lensProvider.getWhoCollectedPublication({
      publicationId: "0x26e5-0x02",
    });

    return [
      {
        // give a name to your group
        name: "zykloon_epoch_depositors",
        timestamp: context.timestamp,
        // add a small description explaining how to be eligible to your group
        description: "Deposit funds in zykloon contract within the specified epoch",
        // document the group eligibility criterias more specifically
        specs: "Deposit Ether in zykloon contract within the specified epoch",
        // reference the final data we created
          // two different data formats in the group
          // Lens account -> "dhadrien.lens": "1"
          // Ethereum account -> "0x95af97aBadA3b4ba443ff345437A5491eF332bC5": "1", 
        data: zykloonDepositors,
        valueType: ValueType.Info,
        tags: [Tags.User, Tags.Lens, Tags.Web3Social],
      },
    ];
  },
};

export default generator;