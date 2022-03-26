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
        saveWorld(context);
        return product;
      }
    },
    lancerProductionProduit(parent, args, context) {},
    engagerManager(parent, args, context) {
      // Update (TODO later)

      // Recover arguments
      name = args.name;

      // Unlock manager, and set unlocked to the corresponding product
      const manager = context.world.managers.find(
        (manager) => manager.name === name
      );
      if (!manager) {
        throw new Error("Le manager n'existe pas");
      } else {
        manager.unlocked = true;

        const correspondingProduction = context.world.products.find(
          (product) => product.id === manager.idcible
        );

        correspondingProduction.managerUnlocked = true;

        // Saving world & returning updated object
        saveWorld(context);
        return product;
      }
    },
  },
};
