import React from 'react';
import { BsFilter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { BiDownArrow } from 'react-icons/bi'
import { connect } from 'react-redux'

const Filter = ({ dataToShow }) => {
  const [data, setData] = React.useState([])
  const [show, setShow] = React.useState(false)
  // const [filters, setFilters] = React.useState({ type: '', color: '', price: '', new: '' })
  const [showType, setShowType] = React.useState(false)
  const [showColor, setShowColor] = React.useState(false)
  const [showPrice, setShowPrice] = React.useState(false)
  const [showNew, setShowNew] = React.useState(false)


  React.useEffect(() => {
    setData(dataToShow)
  }, [dataToShow])


  let typeList = []
  let colorList = []
  let priceList = []
  let priceCont = { low: 0, high: 0 }

  if (data.length === 0) {
    return <div className="loader">loading</div>
  }

  // type filter
  data.map(item => typeList = [...typeList, item.type])
  typeList = [...new Set(typeList)]
  const type = typeList.map((item, i) => (
    <label key={i}><input type="radio" name={item} id={item} />{item}</label>
  ))

  // color filter
  data.map(item => colorList = [...colorList, item.color])
  colorList = [...new Set(colorList)]
  const color = colorList.map((item, i) => (
    <label key={i}><input type="radio" name={item} id={item} />{item}</label>
  ))

  // price filter
  data.map(item => priceList = [...priceList, item.price])
  priceCont.high = priceList.sort()[priceList.length - 1]
  console.log(priceCont)

  const price = (
    <div className="price-list">
      <label><input type="range" name="price" id="price" min={priceCont.low} max={priceCont.high} value={priceCont.high} />Cena</label>
      <span>{priceCont.high} zł</span>
    </div>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptas.
            </div>}
          </div>
        </div>

        <div className='item-filter'><button className='btn-main' onClick={() => setShow(!show)}>Filtruj</button></div>
      </div>

    </div>
  );
}

const mapStateToProps = ({ dataToShow }) => {
  return { dataToShow }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);