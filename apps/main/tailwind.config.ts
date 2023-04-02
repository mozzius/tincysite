import type { Config } from "tailwindcss";

import baseConfig from "@tincy/tailwind-config";

export default {
  content: ["./src/**/*.tsx", "../../packages/components/ui/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
