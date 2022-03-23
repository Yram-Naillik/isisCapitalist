let express = require("express");
let { ApolloServer } = require("apollo-server-express");

let typeDefs = require("./schema");
let resolvers = require("./resolvers");
let world = require("./world");

let server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    world: world,
    user: req.headers["x-user"],
  }),
});

let app = express();
app.use(express.static("public"));
server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at
http://localhost:4000${server.graphqlPath}`)
  );
});
