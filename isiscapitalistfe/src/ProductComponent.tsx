import React, { useState } from "react";
// import React from "react";
// import { Product } from "./world";
import "./App.css";
import { World, Product } from "./world";
import MyProgressbar from "./MyProgressBar";

type ProductProps = {
  prod: Product;
  qtMultiplicator: String;
  money: number;
};

export default function ProductComponent({
  prod,
  qtMultiplicator,
  money,
}: ProductProps) {
  const [product, setProduct] = useState(
    JSON.parse(JSON.stringify(prod)) as Product
  );
  const [multiplicator, setQtMultiplicator] = useState(
    JSON.parse(JSON.stringify(qtMultiplicator)) as String
  );

  //const [buyPrice, setBuyPrice] = useState(0);
  let buyPrice = 0;

  function calcMaxCanBuy() {
    if (qtMultiplicator == "MAX") {
      console.log("max");
    } else {
      console.log("else");
      let multiplicatorToNumber = Number(qtMultiplicator);
      let q = prod.croissance;
      let initialCost = prod.cout;
      buyPrice =
        initialCost * ((1 - Math.pow(q, multiplicatorToNumber)) / (1 - q));
    }
  }

  calcMaxCanBuy();

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
            frontcolor="green"
            backcolor="yellow"
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
          <div className="multiplicator" onChange={calcMaxCanBuy}>
            x{qtMultiplicator}
          </div>
          <div className="buyable">{buyPrice} buzuk</div>
        </div>
      </div>
    </div>
  );
}
