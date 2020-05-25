module.exports = {
    title: 'AutoTouch Document',
    description: 'AutoTouch official document',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        logo: '/img/logo.png',
        nav: [
            { text: 'Official Site', link: 'https://autotouch.net', target: '_blank' },
            {
                text: 'Repositories',
                ariaLabel: 'Repos for Cydia',
                items: [
                    { text: 'Beta Repo', link: 'https://beta.autotouch.net', target: '_blank' },
                    { text: 'Official Repo', link: 'https://apt.autotouch.net', target: '_blank' }
                ]
            },
            { text: 'Licenses', link: 'https://license.autotouch.net', target: '_blank' },
        ],
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
                        '/js/api',
                    ]
                },
                {
                    title: 'JSBridge',
                    path: '/js/jsbridge',
                    collapsable: true,
                    sidebarDepth: 3,
                    children: [
                        '/js/jsbridge'
                    ]
                },
                {
                    title: 'Lua',
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
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                // moment.locale(lang)
                return moment(timestamp).utc().fromNow()
            }
        }],
        ['@vuepress/google-analytics', {
            ga: 'UA-75239087-5'
        }],
        ['flowchart']
    ],
}