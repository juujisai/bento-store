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
    let newItem = action.payload.item
    // newItem.selectedSize = action.payload.size



    // state.cart.filter(i => i.id === newItem.id && i.selectedSize === newItem.selectedSize).length !== 0 ? newItem.amount = newItem.amount + 1 : newItem.amount = 1

    let newCart = [...state.cart]

    if (state.cart.filter(i => i.id === newItem.id && newItem.order[1] === action.payload.size).length !== 0) {
      console.log('jest')

      const id = newCart.findIndex(i => i.id === newItem.id)

      newCart[id].order = [newCart[id].order[0] + 1, action.payload.size]




    } else {
      console.log(' nie jest')

      newItem.order = [1, action.payload.size]
      newCart = [...state.cart, newItem]
    }




    // let newCart = [...state.cart, action.payload.item]
    newCart = [...new Set(newCart)]
    console.log('new', newCart)
    // dodaj local storage

    return { ...state, cart: newCart }
  }

  return state
}

export default reducer