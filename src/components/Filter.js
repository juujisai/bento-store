import React from 'react';
import { BsFilter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { BiDownArrow } from 'react-icons/bi'
import { connect } from 'react-redux'
import { filterData } from '../redux/actions/actions'

const Filter = ({ dataToShow, filterData }) => {
  const [data, setData] = React.useState([])
  const [show, setShow] = React.useState(false)
  const [showType, setShowType] = React.useState(false)
  const [showColor, setShowColor] = React.useState(false)
  const [showPrice, setShowPrice] = React.useState(false)
  const [showNew, setShowNew] = React.useState(false)

  const [filters, setFilters] = React.useState({
    type: [],
    color: [],
    price: 0,
    new: false
  })
  const [maxPrice, setMaxPrice] = React.useState(0)


  const onChangeFilters = (e) => {
    const { name, dataset, value } = e.target

    if (dataset.what === 'type') {
      let type = filters.type
      let id = type.findIndex(i => i.name === name)
      type.splice(id, 1, { name: type[id].name, value: !type[id].value })
      setFilters({ ...filters, type })
    }
    if (dataset.what === 'color') {
      let color = filters.color
      let id = color.findIndex(i => i.name === name)
      color.splice(id, 1, { name: color[id].name, value: !color[id].value })
      setFilters({ ...filters, color })
    }
    if (dataset.what === 'price') {
      setFilters({ ...filters, price: value })
    }
    if (dataset.what === 'new') {
      setFilters({ ...filters, new: !filters.new })
    }



    // console.log(filters)
  }

  const handleOnClick = () => {
    filterData(filters)
    setShow(!show)
  }




  React.useEffect(() => {
    setData(dataToShow)

    let types = []
    let colors = []
    let priceList = []
    let price = 0

    data.map(item => types = [...types, item.type])
    types = [...new Set(types)]

    data.map(item => colors = [...colors, item.color])
    colors = [...new Set(colors)]

    data.map(item => priceList = [...priceList, item.price])
    price = priceList.sort()[priceList.length - 1]
    setMaxPrice(price)

    let type = []
    types.forEach(item => type = [...type, { name: item, value: false }])

    let color = []
    colors.forEach(item => color = [...color, { name: item, value: false }])

    setFilters({
      type, color, price, new: false
    })


  }, [dataToShow, data])



  if (data.length === 0) {
    return <div className="loader">loading</div>
  }

  // type filter
  const type = filters.type.map((item, i) => (
    <label key={i}><input value={item.value} type="checkbox" data-what='type' name={item.name} id={item.name} onChange={onChangeFilters} />{item.name}</label>
  ))

  // color filter

  const color = filters.color.map((item, i) => (
    <label key={i}><input value={item.value} type="checkbox" data-what='color' name={item.name} id={item.name} onChange={onChangeFilters} />{item.name}</label>
  ))

  // price filter


  const price = (
    <div className="price-list">
      <label><input type="range" data-what='price' name="price" id="price" min={0} max={maxPrice} value={filters.price} onChange={onChangeFilters} /> <span>{filters.price} zł</span></label>

    </div>
  )

  // new filter
  const newItem = (
    <label><input type="checkbox" data-what='new' name="new" id="new" value={filters.new} onChange={onChangeFilters} />Nowości</label>
  )


  return (
    <div className={'filter'}>
      <div className="filter-btn" onClick={() => setShow(!show)}><BsFilter className='dark-green' /> Filtry</div>
      <div className={`filter-cont ${show ? 'open' : null}`}>
        <div className="info-cont">
          <h2>Filtry</h2>
          <button className='btn-close' onClick={() => setShow(!show)}><GrClose /></button>
        </div>


        <div className="filter-single-cont">
          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowType(!showType)}>Typ <BiDownArrow className={`rotate ${showType ? 'rotate-true' : null}`} /></div>
            {showType &&
              <div className='filtered-data'>
                {type}
              </div>}


          </div>

          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowColor(!showColor)}>Kolor <BiDownArrow className={`rotate ${showColor ? 'rotate-true' : null}`} /></div>
            {showColor &&
              <div className='filtered-data'>
                {color}
              </div>}
          </div>

          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowPrice(!showPrice)}>Cena <BiDownArrow className={`rotate ${showPrice ? 'rotate-true' : null}`} /></div>
            {showPrice &&
              <div className='filtered-data'>
                {price}
              </div>}
          </div>

          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowNew(!showNew)}>Nowość <BiDownArrow className={`rotate ${showNew ? 'rotate-true' : null}`} /></div>
            {showNew &&
              <div className='filtered-data'>
                {newItem}
              </div>}
          </div>
        </div>

        <div className='item-filter'><button className='btn-main' onClick={handleOnClick}>Filtruj</button></div>
      </div>

    </div>
  );
}

const mapStateToProps = ({ dataToShow }) => {
  return { dataToShow }
}

const mapDispatchToProps = (dispatch) => {
  return { filterData: (filters) => dispatch(filterData(filters)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);