import React from 'react';
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ItemDemoComponent from '../components/ItemDemoComponent'
import { connect } from 'react-redux'
import { showTheData } from '../redux/actions/actions'

const Men = ({ dataToShow, data, dataFiltered }) => {
  const [shopDataFiltered, setShopDataFiltered] = React.useState([])
  const [getData, setGetData] = React.useState(true)

  React.useEffect(() => {

    setTimeout(() => {
      // warunek konieczny aby funkcja data wykonała się tylko raz (w zasadzie wykonuje się 2 razy)

      getData && data('men')
      setGetData(false)

      setShopDataFiltered(dataToShow)
      dataFiltered.length !== 0 && setShopDataFiltered(dataFiltered)
    }, 1000)

  }, [data, dataToShow, dataFiltered, getData])


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
    <div className='section-new section-men'>
      <div>
        <h1 className="site-name">Kolekcja męska</h1>
      </div>
      <div className="site-items-controllers">
        <Filter />
        <Sort />
        <h3 className='amount-of-products'>Produkty: <strong>- {shopDataFiltered.length} -</strong></h3>
      </div>
      <div className="items">
        {dataZ}
      </div>

    </div>
  );
}

const mapStateToProps = ({ dataToShow, dataFiltered }) => {
  return { dataToShow, dataFiltered }
}

const mapDispatchToProps = (dispatch) => {
  return { data: (filterType) => dispatch(showTheData(filterType)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Men);