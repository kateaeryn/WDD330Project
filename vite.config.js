import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        account: resolve(__dirname, "src/account.html"),
        profile: resolve(__dirname, "src/profile.html"),
      },
    },
  },
});
