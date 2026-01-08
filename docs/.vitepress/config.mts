import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  base: '/gemini-training/',
  title: "Gemini Training [Alpha]",
  description: "Master the Gemini CLI for Software Engineering",
  ignoreDeadLinks: true,
  srcDir: '.',
  outDir: './.vitepress/dist',
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/docs/getting-started' },
      { text: 'Modules', link: '/docs/modules/01-introduction' },
      { text: 'Exercises', link: '/docs/exercises/01-basic-usage/README' }
    ],
    sidebar: {
      '/docs/modules/': [
        {
          text: 'Core Concepts',
          items: [
            { text: 'Introduction', link: '/docs/modules/01-introduction' },
            { text: 'Advanced Prompts', link: '/docs/modules/02-advanced-prompts' },
            { text: 'Best Practices', link: '/docs/modules/03-best-practices' },
            { text: 'Extensions Overview', link: '/docs/modules/04-extensions-overview' },
            { text: 'Authoring Extensions', link: '/docs/modules/05-authoring-extensions' },
            { text: 'Interactive Power User', link: '/docs/modules/06-interactive-power-user' },
            { text: 'Custom Commands', link: '/docs/modules/07-custom-commands' },
            { text: 'Context & Memory', link: '/docs/modules/08-context-and-memory' }
          ]
        }
      ],
      '/docs/exercises/': [
        {
          text: 'Hands-on Labs',
          items: [
            { text: '01. Basic Usage', link: '/docs/exercises/01-basic-usage/README' },
            { text: '02. Advanced Prompting', link: '/docs/exercises/02-advanced-prompting/README' },
            { text: '03. Prompt Refinement', link: '/docs/exercises/03-iterative-prompt-refinement/README' },
            { text: '04. Using Extensions', link: '/docs/exercises/04-using-extensions/README' },
            { text: '05. Authoring Extensions', link: '/docs/exercises/05-authoring-extensions/README' },
            { text: '06. Interactive Mastery', link: '/docs/exercises/06-interactive-mastery/README' },
            { text: '07. Custom Commands', link: '/docs/exercises/07-creating-custom-commands/README' },
            { text: '08. Context Mastery', link: '/docs/exercises/08-context-mastery/README' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'CLI Commands', link: '/docs/reference/cli-reference' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lbijeau/gemini-training' }
    ],
    footer: {
      message: 'This is an independent community project in Alpha. Not affiliated with or endorsed by Google.',
      copyright: 'Copyright © 2026-present Luc Bijeau. Gemini is a trademark of Google LLC.'
    }
  }
}))
