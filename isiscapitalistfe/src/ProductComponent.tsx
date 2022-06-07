import React from "react";
import { Product } from "./world";

type ProductProps = {
  prod: Product;
};

export default function ProductComponent({ prod }: ProductProps) {
  return (
    <div>
      <p>Test</p>
    </div>
  );
}
