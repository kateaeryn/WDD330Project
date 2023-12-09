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
        browse: resolve(__dirname, "src/browse.html"),
        person: resolve(__dirname, "src/anything.html"),
        movie: resolve(__dirname, "src/movieDetail.html"),
        search: resolve(__dirname, "src/search.html"),
        grid: resolve(__dirname, "src/movie-grid.html"),
        tv: resolve(__dirname, "src/tvDetail.html"),
      },
    },
  },
});
