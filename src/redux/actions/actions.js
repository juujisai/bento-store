export const SWITCH_NAV_VISIBILITY = 'SWITCH_NAV_VISIBILITY'
export const FILTER_DATA_TO_SHOW = 'FILTER_DATA_TO_SHOW'
export const GET_ITEM_FROM_ID = 'GET_ITEM_FROM_ID'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
// export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
// export const INCREASE_ITEM_COUNT = 'INCREASE_ITEM_COUNT'
// export const DECREASE_ITEM_COUNT = 'DECREASE_ITEM_COUNT'
export const CHANGE_ITEM_COUNT = 'CHANGE_ITEM_COUNT'
export const DATA_FILTER = 'DATA_FILTER'
export const DATA_SORT = 'DATA_SORT'
export const CLEAR_CART = 'CLEAR_CART'


export const showTheData = (filterType) => {
  return { type: FILTER_DATA_TO_SHOW, payload: { filter: filterType } }
}


export const getItem = (id) => {
  return { type: GET_ITEM_FROM_ID, payload: { id } }
}

export const addToCart = (item, size) => {
  return { type: ADD_ITEM_TO_CART, payload: { item, size } }
}

export const changeCartItem = (operator, id, size) => {
  return { type: CHANGE_ITEM_COUNT, payload: { operator, id, size } }

}

export const filterData = (filters) => {
  return { type: DATA_FILTER, payload: { filters } }
}


export const sortData = (sortType) => {
  return { type: DATA_SORT, payload: { sortType } }
}

export const clearCart = () => {
  return { type: CLEAR_CART }
}