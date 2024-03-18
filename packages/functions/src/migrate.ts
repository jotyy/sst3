import { ApiHandler } from "sst/node/api";
import { migrate } from "@sst3/web/server/db";

export const handler = ApiHandler(async (_event) => {
  await migrate("migrations");
  return {
    body: "Migrations completed",
  };
});
