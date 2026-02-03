import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'build', // Keeps it consistent with your Heroku/CRA setup
	},
})
