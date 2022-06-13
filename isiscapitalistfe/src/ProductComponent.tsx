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
    JSON.parse(JSON.stringify(prod)) as Product
  );

  return (
    <div className="productComponent">
      <div className="leftside">
        <img
          className="roundprod logoprod"
          src={"http://localhost:4000/" + prod.logo}
        />
        <div className="lesecond">
          <div className="quantite">
            <div>
              <p>{prod.quantite}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightside">
        <div className="producttitle">{prod.name}</div>
        <div className="time">
          <MyProgressbar
            className="barstyle"
            vitesse={product.vitesse}
            initialvalue={product.vitesse - product.timeleft}
            run={true}
            auto={product.managerUnlocked}
            /*onCompleted={onProgressbarCompleted}*/
          />
          <div className="timeleft">{product.timeleft}</div>
        </div>
        <div className="label">
          <div className="multiplicator">x1</div>
          <div className="buyable">10 buzuk</div>
        </div>
      </div>
    </div>
  );
}
