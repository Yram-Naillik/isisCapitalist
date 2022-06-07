import React, { useState } from "react";
import "./App.css";
import "./ProductComponent";
import ProductComponent from "./ProductComponent";
import { World, Product } from "./world";

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
      <span>{world.money}</span>
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
        <div className="product">
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
          <div>
            <ProductComponent prod={world.products[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
