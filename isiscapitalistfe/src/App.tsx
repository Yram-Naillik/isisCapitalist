import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import { gql, useQuery } from "@apollo/client";

const GET_WORLD = gql`
  query Query {
    getWorld {
      logo
      name
      money
      score
      totalangels
      activeangels
      angelbonus
      lastupdate
      products {
        timeleft
        id
        name
        logo
        cout
        croissance
        revenu
        vitesse
        quantite
        managerUnlocked
        paliers {
          name
          logo
          seuil
          idcible
          ratio
          typeratio
          unlocked
        }
      }
      allunlocks {
        name
        logo
        seuil
        idcible
        ratio
        typeratio
        unlocked
      }
      upgrades {
        name
        logo
        seuil
        idcible
        ratio
        typeratio
        unlocked
      }
      angelupgrades {
        name
        logo
        seuil
        idcible
        ratio
        typeratio
        unlocked
      }
      managers {
        name
        logo
        seuil
        idcible
        ratio
        typeratio
        unlocked
      }
    }
  }
`;

{
  /*stockage du pseudo*/
}
let username = localStorage.getItem("username");

{
  /*fonction pour maj l etat quand l utilisateur saisi un nouveau pseudo*/
}
function onUserNameChanged() {
  if (typeof username != "undefined" && username) {
    localStorage.setItem("username", username);
  } else {
    localStorage.setItem(
      "username",
      "breton" + Math.floor(Math.random() * 1000)
    );
  }
}

function App() {
  {
    /*champ texte pour specifier le pseudo*/
  }
  const [username, setUsername] = useState("");
  {
    /*requete graphql pour recuperation des 4 variables, parametre nom du joueur pour 
  bien retourner les infos de son monde*/
  }
  const { loading, error, data, refetch } = useQuery(GET_WORLD, {
    context: { headers: { "x-user": username } },
  });

  {
    /*test de la var loading, si true = chargement*
   puis test de la var error, si false = acces au monde*/
  }
  let corps = undefined;
  if (loading) corps = <div> Loading... </div>;
  else if (error) {
    corps = <div> Erreur de chargement du monde ! </div>;
    console.log(error);
  } else
    corps = (
      <div>
        <Main loadworld={data.getWorld} username={username} />
      </div>
    );

  return (
    <div className="App">
      <div className="id">
        ID : &nbsp;{" "}
        <input value={username} onChange={onUserNameChanged}></input>
      </div>
      <div>{corps}</div>
    </div>
  );
}

export default App;
