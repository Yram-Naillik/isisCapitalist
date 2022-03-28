var fs = require("fs");

/**
 * Saves the current state of the world
 * @param {*} context
 */
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

/**
 *
 * @param {*} context
 * @returns elapsed time since lastUpdate of the world
 */
function elapsedTime(context) {
  // Get last update value
  lastUpdateString = context.world.lastUpdate;
  lastUpdateInt = parseInt(lastUpdateString);

  // Get current date value
  currentDate = Date.now();

  // Calculate elapsed time since last update
  elapsedTime = currentDate - lastUpdateInt;
  console.log(elapsedTime);

  return elapsedTime;
}

module.exports = {
  Query: {
    getWorld(parent, args, context) {
      elapsedTime(context);
      saveWorld(context);
      //console.log(JSON.stringify(context.world));
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
    lancerProductionProduit(parent, args, context) {
      // Upadte (TODO later)
      // Recover arguments
      id = args.id;

      // Assign vitesse value to timeleft
      const product = context.world.products.find(
        (product) => product.id === id
      );
      if (!product) {
        throw new Error("Le produit n'existe pas");
      } else {
        product.timeleft = product.vitesse;

        // Saving world & returning updated object
        saveWorld(context);
        return product;
      }

      // Assign Date.now() value to lastUpdate
    },
    engagerManager(parent, args, context) {
      // Update (TODO later)

      // Recover arguments
      managerName = args.name;

      // Unlock manager, and set unlocked to the corresponding product
      const manager = context.world.managers.find(
        (manager) => manager.name === managerName
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
        return manager;
      }
    },
  },
};
