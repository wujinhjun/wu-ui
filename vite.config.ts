import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "vite-plugin-stylelint";
import path from "path";

const variablePath = normalizePath(path.resolve("./src/styles/_variable.scss"));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint(), viteStylelint()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
});
