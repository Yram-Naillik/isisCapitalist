var fs = require("fs");

function saveWorld(context) {
  fs.writeFile(
    "userworlds/" + context.user + "-world.json",
    JSON.stringify(context.world),
    (err) => {
      if (err) {
        console.error(err);
        throw new Error(`Erreur d'écriture du monde coté serveur`);
      }
    }
  );
}

module.exports = {
  Query: {
    getWorld(parent, args, context) {
      saveWorld(context);
      console.log(JSON.stringify(context.world));

      return context.world;
    },
  },
  Mutation: {
    acheterQtProduit(parent, args, context) {
      // Update world (TODO later)
      console.log("Argent de base : " + context.world.money);

      // Recover arguments
      quantity = args.quantite;
      id = args.id;

      // Verifing if the product exists
      const product = context.world.products.find(
        (product) => product.id === id
      );
      if (!product) {
        throw new Error("Le produit n'existe pas");
      } else {
        console.log(context.world.money - 1 * quantity);
        context.world.money = context.world.money - 1 * quantity;
        product.quantite = product.quantite + quantity;

        // Saving world & returning updated object
        console.log(JSON.stringify(context.world));
        saveWorld(context);
        return product;
      }
    },
    lancerProductionProduit(id) {},
    engagerManager(name) {},
  },
};
