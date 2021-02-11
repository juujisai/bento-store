import { SWITCH_NAV_VISIBILITY, FILTER_DATA_TO_SHOW, GET_ITEM_FROM_ID } from '../actions/actions'


function reducer(state, action) {
  if (action.type === SWITCH_NAV_VISIBILITY) {
    return { ...state, navOpen: !state.navOpen }
  }

  if (action.type === FILTER_DATA_TO_SHOW) {

    if (action.payload.filter === 'news') {
      const dataToShow = state.shopData.filter(item => item.isNew)
      return { ...state, dataToShow }
    }


  }

  if (action.type === GET_ITEM_FROM_ID) {
    return { ...state, itemPage: state.shopData.filter(i => i.id === action.payload.id)[0] }
  }



  return state
}

export default reducer