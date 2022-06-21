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

  return (
    <div>
      <div className="modal">
        <Box>
          <div className="modalTitle">Managers</div>
          <div className="managersList">
            <div className="managersLeftSide">
              <div className="managersComponent">
                <img src={"http://localhost:4000/" + world.managers[0].logo} />
                <div>
                  <div>{world.managers[0].name}</div>
                  <div>
                    {world.products[world.managers[0].idcible - 1].name}
                  </div>
                  <div>{world.managers[0].seuil}</div>
                </div>
                <div>Engager</div>
              </div>
              <div className="managersComponent">
                <img src={"http://localhost:4000/" + world.managers[1].logo} />
                <div>
                  <div>{world.managers[1].name}</div>
                  <div>
                    {world.products[world.managers[1].idcible - 1].name}
                  </div>
                  <div>{world.managers[1].seuil}</div>
                </div>
                <div>Engager</div>
              </div>
              <div className="managersComponent">
                <img src={"http://localhost:4000/" + world.managers[2].logo} />
                <div>
                  <div>{world.managers[2].name}</div>
                  <div>
                    {world.products[world.managers[2].idcible - 1].name}
                  </div>
                  <div>{world.managers[2].seuil}</div>
                </div>
                <div>Engager</div>
              </div>
            </div>
            <div className="managersRightSide">
              <div className="managersComponent">
                <img src={"http://localhost:4000/" + world.managers[3].logo} />
                <div>
                  <div>{world.managers[3].name}</div>
                  <div>
                    {world.products[world.managers[3].idcible - 1].name}
                  </div>
                  <div>{world.managers[3].seuil}</div>
                </div>
                <div>Engager</div>
              </div>
              <div className="managersComponent">
                <img src={"http://localhost:4000/" + world.managers[4].logo} />
                <div>
                  <div>{world.managers[4].name}</div>
                  <div>
                    {world.products[world.managers[4].idcible - 1].name}
                  </div>
                  <div>{world.managers[4].seuil}</div>
                </div>
                <div>Engager</div>
              </div>
              <div className="managersComponent">
                <img src={"http://localhost:4000/" + world.managers[5].logo} />
                <div>
                  <div>{world.managers[5].name}</div>
                  <div>
                    {world.products[world.managers[5].idcible - 1].name}
                  </div>
                  <div>{world.managers[5].seuil}</div>
                </div>
                <div>Engager</div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
