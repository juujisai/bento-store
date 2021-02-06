import { SWITCH_NAV_VISIBILITY, FILTER_DATA_TO_SHOW } from '../actions/actions'


function reducer(state, action) {
  // console.log(state)
  if (action.type === SWITCH_NAV_VISIBILITY) {
    return { ...state, navOpen: !state.navOpen }
  }

  if (action.type === FILTER_DATA_TO_SHOW) {

    if (action.payload.filter === 'news') {
      console.log('chuj')
      const dataToShow = state.shopData.filter(item => item.isNew)
      // console.log({ ...state, dataToShow })
      return { ...state, dataToShow }
    }


  }


  return state
}

export default reducer