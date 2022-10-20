export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NuxtSideProject",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  loading: {
    color: "yellow",
    height: "5px",
    failedColor: "red",
    duration: 1000 * 10,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/bootstrap.js",
    "~/plugins/filter.js",
    "~/plugins/fontawesome.js",
    { src: "~/plugins/tui-editor.js", mode: "client" },
    { src: "~/plugins/vue-js-modal", mode: "client" },
    { src: "~plugins/infinite-loading", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/google-fonts",
    "@nuxtjs/vuetify",
    ["@nuxtjs/vuetify"],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@tui-nuxt/editor",
    "vue-toastification/nuxt",
  ],
  tui: {
    editor: {},
  },
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
  googleFonts: {
    families: {
      //a simple name
      Roboto: true,
      //a name with spaces
      "Josefin+Sans": true,

      //specific font weights
      Lato: [100, 300],

      //advanced
      Raleway: {
        //weights

        wght: [100, 400],

        // italic
        ital: [100],
      },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
