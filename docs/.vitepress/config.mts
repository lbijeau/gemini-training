import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/gemini-training/',
  title: "Gemini Training",
  description: "Master the Gemini CLI for Software Engineering",
  srcDir: '.',
  outDir: './.vitepress/dist',
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Modules', link: '/modules/01-introduction' },
      { text: 'Exercises', link: '/exercises/01-basic-usage/' }
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
            { text: '01. Basic Usage', link: '/exercises/01-basic-usage/' },
            { text: '02. Advanced Prompting', link: '/exercises/02-advanced-prompting/' },
            { text: '03. Code Explanation', link: '/exercises/03-code-explanation/' },
            { text: '04. Using Extensions', link: '/exercises/04-using-extensions/' },
            { text: '05. Prompt Refinement', link: '/exercises/05-iterative-prompt-refinement/' },
            { text: '06. Authoring Extensions', link: '/exercises/06-authoring-extensions/' },
            { text: '07. Interactive Mastery', link: '/exercises/07-interactive-mastery/' },
            { text: '08. Custom Commands', link: '/exercises/08-creating-custom-commands/' },
            { text: '09. Context Mastery', link: '/exercises/09-context-mastery/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lbijeau/gemini-training' }
    ]
  }
})
