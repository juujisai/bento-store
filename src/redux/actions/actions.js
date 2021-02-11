export const SWITCH_NAV_VISIBILITY = 'SWITCH_NAV_VISIBILITY'
export const FILTER_DATA_TO_SHOW = 'FILTER_DATA_TO_SHOW'
export const GET_ITEM_FROM_ID = 'GET_ITEM_FROM_ID'

export const showTheData = (filterType) => {
  return { type: FILTER_DATA_TO_SHOW, payload: { filter: filterType } }
}


export const getItem = (id) => {
  return { type: GET_ITEM_FROM_ID, payload: { id } }
}