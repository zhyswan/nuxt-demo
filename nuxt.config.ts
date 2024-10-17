// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/scrollbar.css", "@/assets/styles/base.css"],

  // 运行时全局变量，在server都可以访问
  // 在client端只能看到public
  runtimeConfig: {
    count: 0,
    isServe: true,

    // 在client可以看到的变量
    public: {
      apiUrl: process.env.API_URL,
    },
  },

  modules: ["@element-plus/nuxt"],
});
