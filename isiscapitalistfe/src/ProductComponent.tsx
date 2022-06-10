import React from "react";
import { Product } from "./world";
import "./App.css";

type ProductProps = {
  prod: Product;
};

export default function ProductComponent({ prod }: ProductProps) {
  return (
    <div className="product">
      <p>Test</p>
    </div>
  );
}
