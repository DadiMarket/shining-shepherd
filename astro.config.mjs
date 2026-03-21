// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Dadi Market',
			logo: {
				src: './src/assets/DadiMarkerT.webp',
			},
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DadiMarket' }],
			sidebar: [
				{
					label: 'Dadi Initial Rewards',
					items: [
						{ label: 'Introduction', slug: 'scripts/dadi-initial-rewards/introduction' },
						{ label: 'Installation & SQL', slug: 'scripts/dadi-initial-rewards/installation' },
						{ label: 'Configuration', slug: 'scripts/dadi-initial-rewards/configuration' },
					],
				},
				{
					label: 'Dadi Exotic Paints',
					items: [
						{ label: 'Introduction', slug: 'scripts/dadi-exotic-paints/introduction' },
						{ label: 'Installation', slug: 'scripts/dadi-exotic-paints/installation' },
						{ label: 'Configuration', slug: 'scripts/dadi-exotic-paints/configuration' },
					],
				},
			],
		}),
	],
});
