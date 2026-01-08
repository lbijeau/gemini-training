import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  base: '/gemini-training/',
  title: "Gemini Training [Alpha]",
  description: "Master the Gemini CLI for Software Engineering",
  ignoreDeadLinks: true,
  srcDir: 'docs',
  outDir: '.vitepress/dist',
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Modules', link: '/modules/01-introduction' },
      { text: 'Exercises', link: '/exercises/01-basic-usage/README' }
    ],
    sidebar: {
      '/modules/': [
        {
          text: 'Core Concepts',
          items: [
            { text: 'Introduction', link: '/modules/01-introduction' },
            { text: 'Advanced Prompts', link: '/modules/02-advanced-prompts' },
            { text: 'Best Practices', link: '/modules/03-best-practices' },
            { text: 'Extensions Overview', link: '/modules/04-extensions-overview' },
            { text: 'Authoring Extensions', link: '/modules/05-authoring-extensions' },
            { text: 'Interactive Power User', link: '/modules/06-interactive-power-user' },
            { text: 'Custom Commands', link: '/modules/07-custom-commands' },
            { text: 'Context & Memory', link: '/modules/08-context-and-memory' }
          ]
        }
      ],
      '/exercises/': [
        {
          text: 'Hands-on Labs',
          items: [
            { text: '01. Basic Usage', link: '/exercises/01-basic-usage/README' },
            { text: '02. Advanced Prompting', link: '/exercises/02-advanced-prompting/README' },
            { text: '03. Prompt Refinement', link: '/exercises/03-iterative-prompt-refinement/README' },
            { text: '04. Using Extensions', link: '/exercises/04-using-extensions/README' },
            { text: '05. Authoring Extensions', link: '/exercises/05-authoring-extensions/README' },
            { text: '06. Interactive Mastery', link: '/exercises/06-interactive-mastery/README' },
            { text: '07. Custom Commands', link: '/exercises/07-creating-custom-commands/README' },
            { text: '08. Context Mastery', link: '/exercises/08-context-mastery/README' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'CLI Commands', link: '/reference/cli-reference' }
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
