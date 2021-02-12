import { SWITCH_NAV_VISIBILITY, FILTER_DATA_TO_SHOW, GET_ITEM_FROM_ID, ADD_ITEM_TO_CART } from '../actions/actions'


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

  if (action.type === ADD_ITEM_TO_CART) {
    state.cart.filter(i => i.id === action.payload.item.id && i.orderedSize === action.payload.item.orderedSize).length !== 0 ? action.payload.item.amount = action.payload.item.amount + 1 : action.payload.item.amount = 1
    let newCart = [...state.cart, action.payload.item]
    newCart = [...new Set(newCart)]
    console.log(newCart)
    // dodaj local storage

    return { ...state, cart: newCart }
  }

  return state
}

export default reducer