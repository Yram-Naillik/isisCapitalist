import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_WORLD = gql`
query GetWorld {
  getWorld {
    name
  }
}
`

let username = localStorage.getItem("username");


function onUserNameChanged() {
  if (typeof username != 'undefined' && username) {
    localStorage.setItem("username", username)
  }
  else {
    localStorage.setItem("username", "breton" + Math.floor(Math.random() * 1000))
  }
}

function App() {
  const [username, setUsername] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_WORLD, {
    context: { headers: { "x-user": username } }
  });

  let corps = undefined
  if (loading) corps = <div> Loading... </div>
  else if (error) corps = <div> Erreur de chargement du monde ! </div>
  else corps = <div> {data.getWorld.name} </div>

  return (
    <div className="App">

      <div className="header">

        <div> logo monde </div>
        <div> argent </div>
        <div> multiplicateur </div>
        <div> <div>ID :</div>
          <input type="text" value={username} onChange={onUserNameChanged} />
          {corps}
        </div>
      </div>
      <div className="main">
        <div> liste des boutons de menu </div>
        <div className="product">
          <div> premier produit </div>
          <div> second produit </div>
          <div> troisième produit </div>
          <div> quatrième produit </div>
          <div> cinquième produit </div>
          <div> sixième produit </div>
        </div>
      </div>
    </div>
  );
}

export default App;
