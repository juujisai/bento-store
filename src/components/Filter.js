import React from 'react';
import { BsFilter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { BiDownArrow } from 'react-icons/bi'


const Filter = () => {

  const [show, setShow] = React.useState(false)
  // const [filters, setFilters] = React.useState({ type: '', color: '', price: '', new: '' })
  const [showType, setShowType] = React.useState(false)
  const [showColor, setShowColor] = React.useState(false)
  const [showPrice, setShowPrice] = React.useState(false)
  const [showNew, setShowNew] = React.useState(false)


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
            <div className={`filtered-data ${showType ? 'show' : null}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptas.
            </div>
          </div>

          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowColor(!showColor)}>Kolor <BiDownArrow className={`rotate ${showColor ? 'rotate-true' : null}`} /></div>
            <div className={`filtered-data ${showColor ? 'show' : null}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptas.

            </div>
          </div>

          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowPrice(!showPrice)}>Cena <BiDownArrow className={`rotate ${showPrice ? 'rotate-true' : null}`} /></div>
            <div className={`filtered-data ${showPrice ? 'show' : null}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptas.

            </div>
          </div>

          <div className="filter-single">
            <div className="filter-single-name" onClick={() => setShowNew(!showNew)}>Nowość <BiDownArrow className={`rotate ${showNew ? 'rotate-true' : null}`} /></div>
            <div className={`filtered-data ${showNew ? 'show' : null}`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptas.

            </div>
          </div>
        </div>

        <div className='item-filter'><button className='btn-main' onClick={() => setShow(!show)}>Filtruj</button></div>
      </div>

    </div>
  );
}

export default Filter;