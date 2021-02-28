import React from 'react';
import { BiSortDown } from 'react-icons/bi'
import { GrClose } from 'react-icons/gr'
import { BiDownArrow } from 'react-icons/bi'
import { connect } from 'react-redux'
import { sortData } from '../redux/actions/actions'


const Sort = ({ dataToShow, sortMe }) => {
  const [show, setShow] = React.useState(false)
  const [byLowestPrice, setByLowestPrice] = React.useState(false)
  const [byHighestPrice, setByHighestPrice] = React.useState(false)
  const [byAlphabet, setByAlphabet] = React.useState(false)

  const handleOnClickFilter = () => {

    const sorts = [byLowestPrice, byHighestPrice, byAlphabet]
    const sortsName = ['najnizsza', 'najwyzsza', 'alfabet']

    sorts.forEach((item, i) => {
      if (item) {
        sortMe(sortsName[i])
      }
    })


    setShow(!show)




  }

  const handleOnClick = (which) => {
    setByLowestPrice(false)
    setByHighestPrice(false)
    setByAlphabet(false)

    which(true)

  }

  const styleGreen = {
    color: `rgb(41, 107, 58)`,
    fontWeight: '900',
    transition: '.3s'
  }

  React.useEffect(() => { }, [dataToShow])


  return (

    <div className={'filter'}>
      <div className="sort-btn" onClick={() => setShow(!show)}><BiSortDown className='dark-green' /> Sortowanie</div>
      <div className={`filter-cont ${show ? 'open' : null}`}>
        <div className="info-cont">
          <h2>Filtry</h2>
          <button className='btn-close' onClick={() => setShow(!show)}><GrClose /></button>
        </div>


        <div className="filter-single-cont">

          <div className="filter-single">
            <div className="filter-single-name" style={byLowestPrice ? styleGreen : null} onClick={(which) => handleOnClick(setByLowestPrice)}>Od najniższej ceny<BiDownArrow className={`rotate ${byLowestPrice ? 'rotate-true' : null}`} /></div>
          </div>
          <div className="filter-single">
            <div className="filter-single-name" style={byHighestPrice ? styleGreen : null} onClick={(which) => handleOnClick(setByHighestPrice)}>Od najwyższej ceny<BiDownArrow className={`rotate ${byHighestPrice ? 'rotate-true' : null}`} /></div>
          </div>
          <div className="filter-single">
            <div className="filter-single-name" style={byAlphabet ? styleGreen : null} onClick={(which) => handleOnClick(setByAlphabet)}>Alfabetycznie<BiDownArrow className={`rotate ${byAlphabet ? 'rotate-true' : null}`} /></div>
          </div>
        </div>

        <div className='item-filter'><button className='btn-main' onClick={handleOnClickFilter}>Filtruj</button></div>
      </div>

    </div>


  );
}

const mapStateToProps = ({ dataToShow, dataFilterd }) => {
  return { dataToShow, dataFilterd }
}

const mapDispatchToProps = (dispatch) => {
  return { sortMe: (sortType) => dispatch(sortData(sortType)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);