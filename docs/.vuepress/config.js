module.exports = {
    title: 'AutoTouch Document',
    description: 'AutoTouch official document',
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        sidebar: {
            '/': [
                {
                    title: 'About AutoTouch',
                    path: '/',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/'
                    ]
                },
                {
                    title: 'JavaScript',
                    path: '/js/',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/js/',
                        '/js/api-references',
                        '/js/JSBridge'
                    ]
                },
                {
                    title: 'Lua Guide',
                    path: '/lua',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/lua/'
                    ]
                },
                {
                    title: 'HTTP APIs',
                    path: '/http-api',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/http-api'
                    ]
                },
                {
                    title: 'Release Notes',
                    path: '/release-notes',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/release-notes/'
                    ]
                },
            ]
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/last-updated', true],
        ['@vuepress/google-analytics', {
            ga: 'UA-75239087-5'
        }],
        ['flowchart']
    ],
}