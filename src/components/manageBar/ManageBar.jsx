import React, { useContext, useState } from "react";
import { ToggleBlackWhite } from "../../store/Countext";
import { MdRefresh, MdOutlineFilterList, MdClose } from "react-icons/md";
import Button from "../Button";
import KilometerSelector from "../kilometerSelector/KilometerSelector";
export default function ManageBar({ handleSubmit, handleReset }) {
  const toggleBlackWhite = useContext(ToggleBlackWhite);
  const [modal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState({});
  const [request, setRequest] = useState([]);
  const [filterIsActive, setFilterIsActive] = useState(false);
  const [errorSearch, setErrorSearch] = useState("");
  const handleModal = () => {
    if (modal) {
      setRequest([]);
      setSearchValue({});
      setModal(!modal);
    }
    setModal(!modal);
  };
  const handleChange = (value) => {
    if (request.includes(value)) {
      return request;
    }
    setRequest((oldArray) => [...oldArray, value]);
  };

  const subElement = () => {
    if (searchValue.kilometrageMin > searchValue.kilometrageMax) {
      setErrorSearch("Erro");
    } else {
      toggleBlackWhite.toggleBW();
      setFilterIsActive(true);
      setModal(!modal);
      return handleSubmit(searchValue, request);
    }
  };
  const manageReset = () => {
    if (filterIsActive) {
      setFilterIsActive(!filterIsActive);
    }
    setRequest([]);
    setSearchValue({});
    return handleReset();
  };

  return (
    <div className="actionsContainer">
      <div className="subContainerAction">
        <Button
          id="buttonReload"
          className="btn btn-center"
          onClick={() => toggleBlackWhite.refresh()}
          value={<MdRefresh />}
        />
        <Button
          id="btnResetColor"
          className="btn btn-center"
          onClick={() => toggleBlackWhite.toggleBW()}
          value={toggleBlackWhite.textBtn}
        />

        <div className="filterContainer">
          {filterIsActive && (
            <Button
              className="btn"
              onClick={() => manageReset()}
              value="Reset"
            />
          )}
          <Button
            id="btnFilter"
            className="btn btn-center"
            onClick={() => handleModal()}
            value={modal ? <MdClose /> : <MdOutlineFilterList />}
          />
          {modal && (
            <div className="containerFilter">
              <h3 className="title">Choose your kilometers</h3>
              <KilometerSelector />
              {/* <div className="formgroup">
                <input
                  type="text"
                  className="input"
                  placeholder="km min"
                  onChange={(e) => {
                    setSearchValue({
                      ...searchValue,
                      kilometrageMin: parseInt(e.target.value.replace(" ", "")),
                    });
                    handleChange("km-min");
                  }}
                />
              </div>
              <div className="formgroup">
                <input
                  className="input"
                  type="text"
                  placeholder="km max"
                  onChange={(e) => {
                    setSearchValue({
                      ...searchValue,
                      kilometrageMax: parseInt(e.target.value.replace(" ", "")),
                    });
                    handleChange("km-max");
                  }}
                />
              </div> */}
              {errorSearch !== "" && <p className="alertMessage">Error</p>}
              <Button
                className="btn btn-green"
                onClick={() => subElement()}
                value="validate"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
