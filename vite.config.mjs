import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".mjs"]
  },
  plugins: [react()],
  base: "/blog-post-demo/",
  server: {
    port: 4000,
    open: true,
    historyApiFallback: true
  }
})
