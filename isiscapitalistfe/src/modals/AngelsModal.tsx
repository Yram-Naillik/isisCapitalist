import React, { useState } from "react";
import "../App.css";
import { World } from "../world";
import Box from "@mui/material/Box";

type ProductProps = {
  loadworld: World;
};

export default function ManagersModal({ loadworld }: ProductProps) {
  const [world, setWorld] = useState(
    JSON.parse(JSON.stringify(loadworld)) as World
  );

  return <div>ANGELS </div>;
}
