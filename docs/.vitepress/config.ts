import { defineConfig } from 'vitepress';
import markdownItKatex from 'markdown-it-katex';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'GameDev',
  description: 'A technical reference journal for learning game development.',
  base: '/gamedev-journal/',
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    config: (md) => {
      // use markdown-it-katex for rendering LaTeX math expressions
      md.use(markdownItKatex);
    }
  },

  themeConfig: {
    nav: [
      { text: 'Maths', link: '/mathematics/' },
      { text: 'Graphics', link: '/graphics/' },
      { text: 'Physics', link: '/physics/' },
      { text: 'AI', link: '/ai/' },
      { text: 'Engine', link: '/engine/' },
    ],

    sidebar: {
      '/mathematics/': [
        { text: 'Overview', link: '/mathematics/' },
        { text: 'Further Reading', link: '/mathematics/further-reading' },
        { text: 'Addendum', link: '/mathematics/addendum' },
        { 
          text: 'Linear Algebra',
          collapsed: false,
          items: [
            { text: 'Vectors', link: '/mathematics/linear-algebra/vectors' },
            { text: 'Matrices', link: '/mathematics/linear-algebra/matrices' },
          ],
        },
        {
          text: 'Calculus',
          collapsed: true,
          items: [
            // future topics will be added here
          ]
        }
      ],
      '/physics/': [
        { text: 'Overview', link: '/physics/' }
      ],
      '/graphics/': [
        { text: 'Overview', link: '/graphics/' }
      ],
      '/ai/': [
        { text: 'Overview', link: '/ai/' }
      ],
      '/engine/': [
        { text: 'Overview', link: '/engine/' }
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
