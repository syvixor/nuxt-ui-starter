// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxt/ui"],
    compatibilityDate: "latest",
    nitro: { compatibilityDate: "latest" },
    devtools: { enabled: true },
    colorMode: { preference: "dark" },
    css: ["~/assets/css/global.css"]
});