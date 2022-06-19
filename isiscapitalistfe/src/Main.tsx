import React, { useState } from "react";
import "./App.css";
import "./ProductComponent";
import ProductComponent from "./ProductComponent";
import { World, Product } from "./world";
import { transform } from "./utils";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  const [cashModalIsOpened, setCashModalIsOpened] = useState(false);
  const [investorsModalIsOpened, setInvestorsModalIsOpened] = useState(false);
  const [angelsModalIsOpened, setAngelsModalIsOpened] = useState(false);
  const [managersModalIsOpened, setManagersModalIsOpened] = useState(false);
  const [unlocksModalIsOpened, setUnlocksModalIsOpened] = useState(false);
  const [showMain, setShowMain] = useState(true);

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

  function openCashModal() {
    setCashModalIsOpened(!cashModalIsOpened);
    setShowMain(!showMain);
  }

  function openInvestorsModal() {
    setInvestorsModalIsOpened(!investorsModalIsOpened);
    setShowMain(!showMain);
  }

  function openAngelsModal() {
    setAngelsModalIsOpened(!angelsModalIsOpened);
    setShowMain(!showMain);
  }

  function openManagersModal() {
    setManagersModalIsOpened(!managersModalIsOpened);
    setShowMain(!showMain);
  }

  function openUnlocksModal() {
    setUnlocksModalIsOpened(!unlocksModalIsOpened);
    setShowMain(!showMain);
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
          <div className="sc-wrapper">
            <div className="container"></div>
          </div>
          <button className="multiplicatorbutton" onClick={changeMultiplicator}>
            <p className="multiplicatorvalue">x{qtMultiplicator}</p>
          </button>
        </div>
      </div>

      {/** MANAGERS MODAL**/}
      <div>
        {managersModalIsOpened && (
          <div className="modal">
            <Box>
              <div className="modalTitle">Managers</div>
              <div className="managersList">
                <div className="managersLeftSide">
                  <div className="managersComponent">
                    <img
                      src={"http://localhost:4000/" + world.managers[0].logo}
                    />
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
                    <img
                      src={"http://localhost:4000/" + world.managers[1].logo}
                    />
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
                    <img
                      src={"http://localhost:4000/" + world.managers[2].logo}
                    />
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
                    <img
                      src={"http://localhost:4000/" + world.managers[3].logo}
                    />
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
                    <img
                      src={"http://localhost:4000/" + world.managers[4].logo}
                    />
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
                    <img
                      src={"http://localhost:4000/" + world.managers[5].logo}
                    />
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
              <button onClick={openManagersModal}>FERMER</button>
            </Box>
          </div>
        )}{" "}
      </div>

      {/** MAIN **/}
      <div>
        {showMain && (
          <div className="main">
            <div className="menubuttons">
              <button data-hover="Unlocks 🔓" onClick={openUnlocksModal}>
                <div>Unlocks</div>
              </button>
              <div>
                {unlocksModalIsOpened && (
                  <Modal
                    className="modal"
                    open={true}
                    //onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                      <div className="modalButton" onClick={openUnlocksModal}>
                        <div>Fermer</div>
                      </div>
                    </Box>
                  </Modal>
                )}
              </div>
              <button data-hover="Cash 💸" onClick={openCashModal}>
                <div>Cash</div>
              </button>
              <div>
                {cashModalIsOpened && (
                  <Modal
                    className="modal"
                    open={true}
                    //onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                )}
              </div>
              <button data-hover="Angels 👼" onClick={openAngelsModal}>
                <div>Angels</div>
              </button>
              <div>
                {angelsModalIsOpened && (
                  <Modal
                    className="modal"
                    open={true}
                    //onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                )}
              </div>
              <button data-hover="Managers 🤵" onClick={openManagersModal}>
                <div>Managers</div>
              </button>

              <button data-hover="Investors 💰" onClick={openInvestorsModal}>
                <div>Investors</div>
              </button>
              <div>
                {" "}
                {investorsModalIsOpened && (
                  <Modal
                    className="modal"
                    open={true}
                    //onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
                )}{" "}
              </div>
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
        )}
      </div>
    </div>
  );
}
