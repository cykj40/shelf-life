import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: 'tests',
	testIgnore: ['**/labs/fixtures/**', '**/labs/broken-traces/**'],
	webServer: {
		command: 'npm run build && npm run preview -- --host 127.0.0.1 --port 4173',
		url: 'http://127.0.0.1:4173',
		// The default 60s budget covers a full cold production build plus
		// preview startup, which exceeds it on a cold Windows checkout.
		timeout: 180_000,
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: 'http://127.0.0.1:4173'
	}
});
