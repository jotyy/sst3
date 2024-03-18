import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  out: "./migrations",
  tablesFilter: ["web_*"],
} satisfies Config;
