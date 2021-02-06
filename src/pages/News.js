import React from 'react';

import { connect } from 'react-redux'
import { showTheData } from '../redux/actions/actions'
import ItemDemoComponent from '../components/ItemDemoComponent'

const News = ({ data, dataToShow }) => {
  const [shopDataFiltered, setShopDataFiltered] = React.useState([])

  React.useEffect(() => {

    setTimeout(() => {
      dataToShow.length === 0 && data('news')
      setShopDataFiltered(dataToShow)
    }, 1000)

  }, [data, dataToShow])


  const dataZ = shopDataFiltered.map((item, id) => (
    <ItemDemoComponent data={item} key={id} />
  ))


  if (shopDataFiltered.length === 0) {
    return (
      <div className="loader">
        loading . . .
      </div>
    )
  }

  return (
    <div className='section-new'>
      <h1 className='whats-new'>Nowości w naszym sklepie internetowym</h1>

      <div className="items">
        {dataZ}
      </div>


    </div>
  );
}
const mapStateToProps = ({ dataToShow }) => {
  return { dataToShow }
}


const mapDispatchToProps = (dispatch) => {
  return { data: (filterType) => dispatch(showTheData(filterType)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);