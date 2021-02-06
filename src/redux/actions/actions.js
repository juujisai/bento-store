export const SWITCH_NAV_VISIBILITY = 'SWITCH_NAV_VISIBILITY'
export const FILTER_DATA_TO_SHOW = 'FILTER_DATA_TO_SHOW'


export const showTheData = (filterType) => {
  return { type: FILTER_DATA_TO_SHOW, payload: { filter: filterType } }
} 
