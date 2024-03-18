import { SSTConfig } from "sst";
import { Default } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "sst3",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(Default);
  },
} satisfies SSTConfig;
