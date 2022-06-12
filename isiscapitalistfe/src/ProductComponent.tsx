import React, { useState } from "react";
// import React from "react";
// import { Product } from "./world";
import "./App.css";
import { World, Product } from "./world";
import MyProgressbar from "./MyProgressBar";


type ProductProps = {
  prod: Product;
};


/* il manque la propriété services*/

export default function ProductComponent({ prod }: ProductProps) {
  const [product, setProduct] = useState(
    JSON.parse(JSON.stringify(prod)) as Product);

  return (
    <div className="product">
      <div className="lesdeux">
        <img className="roundprod logoprod" src={"http://localhost:4000/" + prod.logo} />
        <div className="lesecond">
          <div className="quantite">
            <div> {prod.quantite}</div>
          </div>
        </div>

        {/* <MyProgressbar className="barstyle" vitesse={product.vitesse}
          initialvalue={product.vitesse - product.timeleft}
          run={run} frontcolor="#ff8800" backcolor="#ffffff"
          auto={product.managerUnlocked} orientation={Orientation.horizontal}
          onCompleted={onProgressbarCompleted} /> */}


      </div>
      <div>{prod.name}</div>
    </div>
  )
}
