module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    // ...
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://127.0.0.1:1337",
        accessToken:'a6e8992b6cff16b61ea6b3aaf07d9b650c66687f9b830a47b38a17544c9bc6751ba2d4746694acd7ff50ad44b8b723b069df4366380794c5b60b0e326715ad5c3bd0eaf24ed0efe83f3b57b8147a54c8322d1c44717e1646c4aa62c6436c12f853104bb6d21abbffe0ae5e844b4ec73442d1d98adca99ed7974c16826dd14e52',
        collectionTypes: [
          'home',
          'about',
          'companynew',
          'dataset',
          'finding',
          'prodigi',
          'quote',
          'stat',
          'unseen',
          'footer',
          'footermenu',
          'user'
        ],
        queryLimit: 1000,
      },
    },
    // 'gatsby-plugin-offline'
  ],
}