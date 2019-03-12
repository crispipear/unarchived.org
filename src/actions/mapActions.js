export const UPDATE_DISTRICTS       = 'UPDATE_DISTRICTS',
             UPDATE_CUR_DISTRICT    = 'UPDATE_CUR_DISTRICT',
             TOGGLE_DISTRICT_INFO   = 'TOGGLE_DISTRICT_INFO',
             UPDATE_MAP_CENTER      = 'UPDATE_MAP_CENTER',
             UPDATE_MAP_ZOOM        = 'UPDATE_MAP_ZOOM'
             
export const updateDistricts = content => ({
    type: UPDATE_DISTRICTS,
    payload: content
})

export const updateCurDistrict = content => ({
    type: UPDATE_CUR_DISTRICT,
    payload: content
})

export const toggleDistrictInfo = toggle => ({
    type: TOGGLE_DISTRICT_INFO,
    payload: toggle
})

export const updateMapCenter = coords => ({
    type: UPDATE_MAP_CENTER,
    payload: coords
})

export const updateMapZoom = zoom => ({
    type: UPDATE_MAP_ZOOM,
    payload: zoom
})