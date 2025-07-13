import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'GameDev',
  description: 'A technical reference journal for learning game development.',
  base: '/gamedev-journal/',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'CS', link: '/cs/' },
      { text: 'Graphics', link: '/graphics/' },
    ],

    sidebar: {
      '/cs/': [
        { text: 'asdhasd', link: '/cs/index' },
      ],
      '/graphics/': [
        { text: 'asdasdh', link: '/graphics/index' },
      ],
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/creacher4/gamedev-journal",
      }
    ],

  },
})
