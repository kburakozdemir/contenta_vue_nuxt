// change this to your own server.
const serverBaseUrl = 'https://test-wwf.binbiriz.com';
const serverFilesUrl = 'https://test-wwf.binbiriz.com';

export default {
  plugins: ['~plugins/vue-lazyload'],
  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/api',
    serverFilesUrl,
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma-4.3.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' },
    ],
  },
  // page loading progress bar color
  loading: { color: '#3B8070' },
};
