const { GraphQLSchema } = require('gridsome/graphql')
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// var TocType = new GraphQLObjectType({
//   name: 'tocEl',
//   fields: () => ({
//     id: { type: GraphQLString },
//     name: { type: GraphQLString }
//   })
// });

module.exports = function (api) {
  api.loadSource(({ addSchemaResolvers }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/


    // addSchemaResolvers({
    //   MainPage: {
    //     title: {
    //       type: 'String',
    //       args: {
    //         uppercased: 'Boolean'
    //       },
    //       resolve(obj, args) {
    //         if (args.uppercased) {
    //           return obj.title.toUpperCase()
    //         }
    //         return obj.title
    //       }
    //     }
    //   }
    // })

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
