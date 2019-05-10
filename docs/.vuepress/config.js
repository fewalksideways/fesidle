module.exports = {
    title: 'FeSidle',
    description: 'Learn this lesson and you can walk sideways in the front end ',
    base: '/FeSidle/',
    dest: './dist',
    head: [
        ['link', { rel: 'icon', href: `/images/logo.png` }]
    ],
    themeConfig: {
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'fewalksideways/FeSidle',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如文档放在一个特定的分支下：
        docsBranch: 'gh-pages',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        activeHeaderLinks: false,
        //Algolia 搜索
        // algolia: {
        //     apiKey: '<API_KEY>',
        //     indexName: '<INDEX_NAME>'
        //   }
        lastUpdated: '上次提交',
        nav: [
            {
                text: 'Js',
                link: '/js/',
            },
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
                text: 'Node',
                link: '/node/'
            },
            {
                text: 'Plugin',
                link: '/plugin/'
            },
            {
                text: 'CSS3',
                link: '/css3/'
            }
        ],
        sidebar: {
            '/js/': genSidebarConfig('Js'),
            '/blog/': [
                '',
                'gitalk',
                'travis'
            ],
            '/css3/': ['',
                'Grid布局',
                '布局和包含块',
                '优先级继承和级联',
                '视觉格式化模型'
            ]
        }

    },
}
function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'befe',
                'closures',
                'typeof',
                'repetition'
            ]
        }
    ]
}
