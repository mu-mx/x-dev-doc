import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '开发文档',
  description: 'A VitePress Site',
  outDir: './dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/pages/doc' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '常见命令', link: '/pages/doc' },
          { text: 'macos', link: '/pages/mac' },
          { text: 'linux', link: '/pages/linux' },
          { text: 'docker', link: '/pages/docker' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/mu-mx/x-dev-doc' }],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
});
