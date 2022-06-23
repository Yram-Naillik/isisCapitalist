import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Product } from "./world";
import MyProgressbar from "./MyProgressBar";

type ProductProps = {
  prod: Product;
  qtMultiplicator: String;
  money: number;
  onProductionDone: (product: Product) => void;
};

export default function ProductComponent({
  prod,
  onProductionDone,
  qtMultiplicator,
  money,
}: ProductProps) {
  if (!prod.lastupdate) {
    prod.lastupdate = Date.now();
  }

  function calcScore() {
    let elapsedTime = Date.now() - prod.lastupdate;
    prod.lastupdate = Date.now();
    prod.timeleft = prod.timeleft - elapsedTime;

    if (product.timeleft <= 0) {
      console.log("FINITO");
      prod.timeleft = 0;
    } else {
      console.log(prod.timeleft);
    }
    onProductionDone(product);
  }

  const savedCallback = useRef(calcScore);
  useEffect(() => (savedCallback.current = calcScore));
  useEffect(() => {
    let timer = setInterval(() => savedCallback.current(), 5000);
    return function cleanup() {
      if (timer) clearInterval(timer);
    };
  }, []);
  const [product, setProduct] = useState(
    JSON.parse(JSON.stringify(prod)) as Product
  );

  const [multiplicator, setQtMultiplicator] = useState(
    JSON.parse(JSON.stringify(qtMultiplicator)) as String
  );

  const [barIsRunning, setBarIsRunning] = useState(false);

  let buyPrice = 0;
  let qtMultiplicatorDisplay = "";

  function calcMaxCanBuy() {
    if (qtMultiplicator == "MAX") {
      let q = prod.croissance;
      let initialCost = prod.cout;
      let nMax = Math.floor(
        Math.log((initialCost - money * (1 - q)) / initialCost) / Math.log(q)
      );
      buyPrice = initialCost * ((1 - Math.pow(q, nMax)) / (1 - q));
      qtMultiplicatorDisplay = nMax.toString();
    } else {
      let multiplicatorToNumber = Number(qtMultiplicator);
      let q = prod.croissance;
      let initialCost = prod.cout;
      buyPrice =
        initialCost * ((1 - Math.pow(q, multiplicatorToNumber)) / (1 - q));
      qtMultiplicatorDisplay = qtMultiplicator.toString();
    }
  }

  function startFabrication() {
    setBarIsRunning(true);
    product.timeleft = product.vitesse;
    prod.lastupdate = Date.now();
  }

  function onProgressbarCompleted() {
    setBarIsRunning(false);
  }

  calcMaxCanBuy();

  return (
    <div className="productComponent">
      <div className="leftside" onClick={startFabrication}>
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
            vitesse={prod.vitesse}
            initialvalue={0}
            run={barIsRunning}
            auto={product.managerUnlocked}
            onCompleted={onProgressbarCompleted}
          />
          <div className="timeleft">{product.timeleft}</div>
        </div>
        <div className="label">
          <div className="multiplicator" onChange={calcMaxCanBuy}>
            x{qtMultiplicatorDisplay}
          </div>
          <div className="buyable">{Math.floor(buyPrice)} buzuk</div>
        </div>
      </div>
    </div>
  );
}
