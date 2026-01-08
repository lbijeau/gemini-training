import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Gemini Training",
  description: "Master the Gemini CLI for Software Engineering",
  themeConfig: {
    logo: '/assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/GETTING_STARTED' },
      { text: 'Modules', link: '/docs/modules/01-introduction' },
      { text: 'Exercises', link: '/docs/exercises/01-basic-usage/' }
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
            { text: '01. Basic Usage', link: '/docs/exercises/01-basic-usage/' },
            { text: '02. Advanced Prompting', link: '/docs/exercises/02-advanced-prompts/' },
            { text: '03. Code Explanation', link: '/docs/exercises/03-code-explanation/' },
            { text: '04. Using Extensions', link: '/docs/exercises/04-using-extensions/' },
            { text: '05. Prompt Refinement', link: '/docs/exercises/05-iterative-prompt-refinement/' },
            { text: '06. Authoring Extensions', link: '/docs/exercises/06-authoring-extensions/' },
            { text: '07. Interactive Mastery', link: '/docs/exercises/07-interactive-mastery/' },
            { text: '08. Custom Commands', link: '/docs/exercises/08-creating-custom-commands/' },
            { text: '09. Context Mastery', link: '/docs/exercises/09-context-mastery/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lbijeau/gemini-training' }
    ]
  },
  srcDir: '.',
  outDir: './.vitepress/dist' 
})
