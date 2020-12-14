module.exports = {
	base: '/pages/GridControl/',
	title: 'GridControl',
	description: '网格管理',
	themeConfig: {
		sidebarDepth: 2,
		nav: [
			{
				text: '选择版本',
				ariaLabel: 'Language Menu',
				items: [
					{ text: 'v1.x', link: '/v1.x/' },
					{ text: 'v2.x', link: '/v2.x/' }
				]
			}
		],
		sidebar: {
			'/v1.x/': [
				{
					title: '使用方法',
					path: '/v1.x/',
				},
				{
					title: '变量和方法',
					path: '/v1.x/Variable.md',
				}
			],
			'/v2.x/': [
				{
					title: '使用方法',
					path: '/v2.x/',
				},
				{
					title: '变量和方法',
					path: '/v2.x/Variable.md',
				}
			],
			// '/': []
		}
	},
	markdown: {
		lineNumbers: true
	}
}
