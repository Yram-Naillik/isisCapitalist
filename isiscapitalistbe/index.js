let express = require("express");
let { ApolloServer } = require("apollo-server-express");

let typeDefs = require("./schema");
let resolvers = require("./resolvers");
let world = require("./world");
let fs = require("fs");

async function readUserWorld(user) {
  try {
    const data = fs.readFileSync("userworlds/" + user + "-world.json");
    //console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return world;
  }
}

let server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    world: await readUserWorld(req.headers["x-user"]),
    user: req.headers["x-user"],
  }),
});

let app = express();
app.use(express.static("public"));
server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
