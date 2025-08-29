import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  server: {
    open: "/",
  },
  //   resolve: {
  //   alias: {
  //     assets: "/src/assets",
  //     api: "/src/api",
  //     components: "/src/components",
  //     hooks: "/src/hooks",
  //     pages: "/src/pages",
  //     store: "/src/store",
  //     types: "/src/types",
  //     utils: "/src/utils",
  //   },
  // },
  base: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },

});
