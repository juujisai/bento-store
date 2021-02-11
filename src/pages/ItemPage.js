import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getItem } from '../redux/actions/actions'

const ItemPage = ({ itemPage, getItemForPage }) => {

  const [item, setItem] = React.useState(itemPage)


  const idOfItem = useParams().id


  React.useEffect(() => {
    setTimeout(() => {
      item.id === null && getItemForPage(parseInt(idOfItem))
      setItem(itemPage)
    }, 1000)
  }, [getItemForPage, idOfItem, item, itemPage])


  if (item.id === null) {
    return (
      <div className="loader">
        loading . . .
      </div>
    )
  }


  return (
    <div>
      item page {item.id}
    </div>
  );
}

const mapStateToProps = ({ itemPage }) => {
  return { itemPage }
}

const mapDispatchToProps = (dispatch) => {
  return { getItemForPage: (id) => dispatch(getItem(id)) }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);