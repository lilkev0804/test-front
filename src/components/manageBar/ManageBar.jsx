import React, { useContext, useState } from 'react'
import { ToggleBlackWhite } from '../../store/Countext'
export default function ManageBar({ cars, handleSubmit, handleReset }) {
  const toggleBlackWhite = useContext(ToggleBlackWhite)
  const [order, setOrder] = useState(false)
  const [modal, setModal] = useState(false)
  const [searchValue, setSearchValue] = useState({})
  const [request, setRequest] = useState([])
  const [filterIsActive, setFilterIsActive] = useState(false)
  const filterType = (car, type) => {
    if (type === 'color') {
      return car.color
    }
    if (type === 'doors') {
      return car.doors
    }
    if (type === 'car_type') {
      return car.car_type
    }
    if (type === 'make_and_model') {
      return car.make_and_model
    }
  }

  const carColor = (cars, type) => {
    const newArray = []
    cars.map((el) => newArray.push(filterType(el, type)))
    let uniqueColor = [...new Set(newArray)]
    return type === 'make_and_model'
      ? uniqueColor.map((spe, i) => (
          <option key={i} name={spe} value={spe}>
            {spe.split(' ')[0]}
          </option>
        ))
      : uniqueColor.map((spe, i) => (
          <option key={i} name={spe} value={spe}>
            {spe}
          </option>
        ))
  }

  const handleModal = () => {
    if (modal) {
      setRequest([])
      setSearchValue({})
      setModal(!modal)
    }
    setModal(!modal)
  }
  const handleChange = (value) => {
    if (request.includes(value)) {
      return request
    }
    setRequest((oldArray) => [...oldArray, value])
  }

  const subElement = () => {
    setFilterIsActive(true)
    setModal(!modal)
    return handleSubmit(searchValue, request)
  }

  const manageReset = () => {
    if (filterIsActive) {
      setFilterIsActive(!filterIsActive)
    }
    setRequest([])
    setSearchValue({})
    return handleReset()
  }
  return (
    <div className="actionsContainer">
      <button id="buttonReload" onClick={() => toggleBlackWhite.refresh()}>
        Reload
      </button>

      <button
        className={order ? 'switchButtonEnable' : 'switchButtonDisable'}
        onClick={() => toggleBlackWhite.toggleBW()}
      >
        {toggleBlackWhite.textBtn}
      </button>

      <div className="filterContainer">
        <button id="btnFilter" onClick={() => handleModal()}>
          {modal ? 'X' : 'Filter'}
        </button>
        {filterIsActive && <button onClick={() => manageReset()}>Reset</button>}
        {modal && (
          <div className="containerFilter">
            <div className="formgroup">
              <select
                onChange={(e) => {
                  setSearchValue({
                    ...searchValue,
                    color: e.target.value,
                  })
                  handleChange('color')
                }}
              >
                <option>Choose colors</option>
                {carColor(cars, 'color')}
              </select>
            </div>
            <div className="formgroup">
              <select
                onChange={(e) => {
                  setSearchValue({
                    ...searchValue,
                    doors: parseInt(e.target.value),
                  })
                  handleChange('doors')
                }}
              >
                <option>Chosse doors</option>
                {carColor(cars, 'doors')}
              </select>
            </div>
            <div className="formgroup">
              <select
                onChange={(e) => {
                  setSearchValue({
                    ...searchValue,
                    car_type: e.target.value,
                  })
                  handleChange('car_type')
                }}
              >
                <option>Choose type</option>
                {carColor(cars, 'car_type')}
              </select>
            </div>
            <div className="formgroup">
              <select
                onChange={(e) => {
                  setSearchValue({
                    ...searchValue,
                    make_and_model: e.target.value,
                  })
                  handleChange('make_and_model')
                }}
              >
                <option>Choose brand</option>
                {carColor(cars, 'make_and_model')}
              </select>
            </div>
            <button onClick={() => subElement()}>Validate</button>
          </div>
        )}
      </div>
    </div>
  )
}
