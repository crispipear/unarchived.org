import {UPDATE_DISTRICTS, UPDATE_CUR_DISTRICT, TOGGLE_DISTRICT_INFO, UPDATE_MAP_CENTER, UPDATE_MAP_ZOOM,
    UPDATE_POI_INDEX, TOGGLE_POI_INFO} from '../actions/mapActions';

const initState = {
    districts: {},
    curDistrict: "pioneer-square",
    districtInfo: false,
    mapCenter: {lat: 47.6015, lng: -122.3343},
    zoom: 14,
    index: 0,
    info: false
}

export default function(state=initState, action){
    switch(action.type){
        case UPDATE_DISTRICTS:
            return{
                ...state,
                districts: action.payload
            }
        case UPDATE_CUR_DISTRICT:
            return{
                ...state,
                curDistrict: action.payload
            }
        case TOGGLE_DISTRICT_INFO:
            return{
                ...state,
                districtInfo: action.payload
            }
        case UPDATE_MAP_CENTER:
            return{
                ...state,
                mapCenter: action.payload
            }
        case UPDATE_MAP_ZOOM:
            return{
                ...state,
                zoom: action.payload
            }
        case UPDATE_POI_INDEX:
            return{
                ...state,
                index: action.payload
            }
        case TOGGLE_POI_INFO:
            return{
                ...state,
                info: action.payload
            }
        default:
            return state
    }
}