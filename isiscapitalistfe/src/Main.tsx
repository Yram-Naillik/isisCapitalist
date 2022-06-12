import React, { useState } from "react";
import "./App.css";
import "./ProductComponent";
import ProductComponent from "./ProductComponent";
import { World, Product } from "./world";
// import {transform} from "./utils";

type MainProps = {
  loadworld: World;
  username: string;
};

export default function Main({ loadworld, username }: MainProps) {
  const [world, setWorld] = useState(
    JSON.parse(JSON.stringify(loadworld)) as World
  );

  
  return (
    <div>
      {/*bandeau de titre : divisé en 4 cases de tailles égales*/}
      <div className="header">
      <img className ="round logomonde" src={"http://localhost:4000/"+world.logo} />
      <div>{world.name}</div>
      <div>{world.money}
            <p> Buzuk </p>
      </div> 
      {/* <span> dangerouslySetInnerHTML={{__html: transform(world.money)}}</span> */}
      </div>

      <div className="main">
        <div>
          <button data-hover="click me!">
            <div>Unlocks</div>
          </button>
          <button data-hover="click me!">
            <div>Cash </div>
          </button>
          <button data-hover="click me!">
            <div>Angel</div>
          </button>
          <button data-hover="click me!">
            <div>Managers</div>
          </button>
          <button data-hover="click me!">
            <div>Investors</div>
          </button>
        </div>
        <div className="productlist">
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
          <div>
            <ProductComponent prod={world.products[1]} />
          </div>
          <div>
            <ProductComponent prod={world.products[2]} />
          </div>
          <div>
            <ProductComponent prod={world.products[3]} />
          </div>
          <div>
            <ProductComponent prod={world.products[4]} />
          </div>
          <div>
            <ProductComponent prod={world.products[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}
