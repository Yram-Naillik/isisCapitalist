import React, { useState } from "react";
import "./App.css";
import "./ProductComponent";
import ProductComponent from "./ProductComponent";
import { World, Product } from "./world";
import { transform } from "./utils";

type MainProps = {
  loadworld: World;
  username: string;
};

export default function Main({ loadworld, username }: MainProps) {
  const [world, setWorld] = useState(
    JSON.parse(JSON.stringify(loadworld)) as World
  );

  let score = transform(world.money);
  const [qtMultiplicator, setQtMultiplicator] = useState("1");

  function changeMultiplicator() {
    switch (qtMultiplicator) {
      case "1":
        setQtMultiplicator("10");
        console.log(qtMultiplicator);
        break;
      case "10":
        setQtMultiplicator("100");
        console.log(qtMultiplicator);
        break;
      case "100":
        setQtMultiplicator("MAX");
        console.log(qtMultiplicator);
        break;
      case "MAX":
        setQtMultiplicator("1");
        console.log(qtMultiplicator);
        break;
    }
  }

  return (
    <div>
      {/*bandeau de titre : divisé en 4 cases de tailles égales*/}
      <div className="header">
        <img
          className="round logomonde"
          src={"http://localhost:4000/" + world.logo}
        />
        <p>{world.name}</p>
        <p className="money">
          <span
            dangerouslySetInnerHTML={{ __html: transform(world.money) }}
          ></span>
          &nbsp; Buzuk
        </p>
        <div>
          <button className="multiplicatorbutton" onClick={changeMultiplicator}>
            <p className="multiplicatorvalue">x{qtMultiplicator}</p>
          </button>
        </div>
      </div>

      <div className="main">
        <div className="menubuttons">
          <button data-hover="click me!">
            <div>Unlocks</div>
          </button>
          <button data-hover="click me!">
            <div>Cash</div>
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
          <div className="productlistleft">
            <div>
              <ProductComponent
                prod={world.products[0]}
                qtMultiplicator={qtMultiplicator}
                money={world.money}
              />
            </div>
            <div>
              <ProductComponent
                prod={world.products[1]}
                qtMultiplicator={qtMultiplicator}
                money={world.money}
              />
            </div>
            <div>
              <ProductComponent
                prod={world.products[2]}
                qtMultiplicator={qtMultiplicator}
                money={world.money}
              />
            </div>
          </div>
          <div className="productlistright">
            <div>
              <ProductComponent
                prod={world.products[3]}
                qtMultiplicator={qtMultiplicator}
                money={world.money}
              />
            </div>
            <div>
              <ProductComponent
                prod={world.products[4]}
                qtMultiplicator={qtMultiplicator}
                money={world.money}
              />
            </div>
            <div>
              <ProductComponent
                prod={world.products[5]}
                qtMultiplicator={qtMultiplicator}
                money={world.money}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
